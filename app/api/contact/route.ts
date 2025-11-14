import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { google } from "googleapis"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const phone = String(formData.get("phone") || "")
    const service = String(formData.get("service") || "")
    const message = String(formData.get("message") || "")

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 })
    }

    const gmailUser = process.env.SMTP_FROM_EMAIL
    const toEmail = process.env.SMTP_TO_EMAIL || gmailUser
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || "https://developers.google.com/oauthplayground"
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!gmailUser || !clientId || !clientSecret || !refreshToken) {
      return NextResponse.json(
        { message: "Email configuration missing. Please set GOOGLE_CLIENT_ID/SECRET, GOOGLE_REFRESH_TOKEN, SMTP_FROM_EMAIL." },
        { status: 500 },
      )
    }

    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri)
    oAuth2Client.setCredentials({ refresh_token: refreshToken })
    const accessToken = await oAuth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: gmailUser,
        clientId,
        clientSecret,
        refreshToken,
        accessToken: typeof accessToken === "string" ? accessToken : accessToken?.token || undefined,
      },
    })

    const internalSubject = `New contact submission from ${name}`
    const internalHtml = `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
      from: gmailUser,
      to: toEmail,
      replyTo: email,
      subject: internalSubject,
      html: internalHtml,
    })

    const userSubject = "Thank you for contacting IGNEK"
    const userHtml = `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to IGNEK. We have received your message and our team will get back to you shortly.</p>
      <p>Summary of your request:</p>
      <ul>
        <li><strong>Service:</strong> ${service || "(not specified)"}</li>
        <li><strong>Phone:</strong> ${phone || "(not provided)"}</li>
      </ul>
      <p>Best regards,<br/>IGNEK Team</p>
    `

    await transporter.sendMail({
      from: gmailUser,
      to: email,
      subject: userSubject,
      html: userHtml,
    })

    // Forward submission to Web3Forms (optional, if key present)
    if (web3formsAccessKey) {
      const forward = new FormData()
      forward.append("access_key", web3formsAccessKey)
      forward.append("name", name)
      forward.append("email", email)
      if (phone) forward.append("phone", phone)
      if (service) forward.append("service", service)
      forward.append("message", message)
      try {
        await fetch("https://api.web3forms.com/submit", { method: "POST", body: forward })
      } catch (e) {
        // Ignore Web3Forms errors; primary is email
      }
    }

    return NextResponse.json({ message: "Sent" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}