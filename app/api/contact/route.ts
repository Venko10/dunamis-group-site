import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactTo = process.env.RESEND_CONTACT_TO;
const contactFrom = process.env.RESEND_CONTACT_FROM;

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    if (!resendApiKey || !contactTo || !contactFrom) {
      console.error("CONTACT_ENV_ERROR", {
        RESEND_API_KEY: !!resendApiKey,
        RESEND_CONTACT_TO: !!contactTo,
        RESEND_CONTACT_FROM: !!contactFrom,
      });
      return NextResponse.json(
        { ok: false, error: "Configuration mail incomplète." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, company, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const html = `
      <h2>Nouvelle demande depuis le site Dunamis Group</h2>
      <p><strong>Nom :</strong> ${name || "-"}</p>
      <p><strong>Société / Projet :</strong> ${company || "-"}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || "-"}</p>
      <p><strong>Objet / type de besoin :</strong> ${subject || "-"}</p>
      <p><strong>Message détaillé :</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      subject: `Nouvelle demande – ${subject} (${name})`,
      replyTo: email,
      html,
    });

    if (error) {
      console.error("RESEND_ERROR", error);
      return NextResponse.json(
        { ok: false, error: "Erreur lors de l'envoi du message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
