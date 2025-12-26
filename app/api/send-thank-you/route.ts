import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"
import { env } from "../../../env.mjs"

sgMail.setApiKey(env.SENDGRID_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email } = (await req.json()) as { name: string; email: string }

    if (!email || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const msg = {
      to: email,
      from: env.SENDGRID_FROM_EMAIL,
      subject: "Thank You for Contacting Ignek Infotech",
      text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nIgnek Infotech Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333;">Thank You for Contacting Us!</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>We've received your inquiry and wanted to say thank you for reaching out to <strong>Ignek Infotech</strong>.</p>
          <p>One of our team members will review your message and get back to you as soon as possible.</p>
          <p>In the meantime, feel free to explore our <a href="https://ignek.com" style="color: #0070f3; text-decoration: none;">website</a> to learn more about our services.</p>
          <br />
          <p style="color: #777; font-size: 0.9em;">Best regards,<br />Ignek Infotech Team</p>
        </div>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json({ message: "Thank you email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending thank you email:", error)
    return NextResponse.json({ error: "Failed to send thank you email" }, { status: 500 })
  }
}
