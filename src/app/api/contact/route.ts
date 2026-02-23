import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      jobPosition,
      employees,
      country,
      message,
    } = body

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@mechasys.ca',
      to: 'jaewan.kim@mechasys.ca',
      subject: `[Mechasys Japan] 新しいお問い合わせ - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #0047bb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">新しいお問い合わせ</h1>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0047bb; border-bottom: 2px solid #0047bb; padding-bottom: 10px;">お客様情報</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">お名前</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${lastName} ${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">メール</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #0047bb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">電話番号</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || '未入力'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">会社名</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">ウェブサイト</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="${website}" target="_blank" style="color: #0047bb;">${website}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">役職</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${jobPosition}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">従業員数</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${employees}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">国</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${country}</td>
              </tr>
            </table>
            
            <h2 style="color: #0047bb; border-bottom: 2px solid #0047bb; padding-bottom: 10px; margin-top: 30px;">メッセージ</h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message || 'メッセージなし'}</div>
          </div>
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            このメールは Mechasys Japan ウェブサイトのお問い合わせフォームから送信されました。
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
