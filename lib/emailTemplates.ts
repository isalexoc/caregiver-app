import { MailOptions } from "nodemailer/lib/sendmail-transport";

const avatarUrl = "https://www.ecservices.app/avatar.png";

const commonHeaders = {
  "X-GM-THUMNAIL": avatarUrl,
  "X-MS-AVATAR-URL": avatarUrl,
  "X-Yahoo-Avatar-URL": avatarUrl,
  "X-Avatar-URL": avatarUrl,
  "From-Avatar-URL": avatarUrl,
};

export const getAdminMailOptions = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string,
  currentDate: string
): MailOptions => ({
  from: `"Info | Essential Care Services" <${process.env.EMAIL_FROM}>`,
  to: "isaac87usa@gmail.com, yorraizl@gmail.com",
  subject: "New Contact Form Submission - Essential Care Services",
  headers: {
    ...commonHeaders,
  },
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Essential Care Services</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #6366f1; color: white; padding: 10px; text-align: center; }
        .logo { display: block; width: 200px; height: auto; margin-bottom: 15px; }
        .content { margin-top: 20px; }
        .footer { margin-top: 20px; font-size: 0.8em; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
      <img 
          src="https://www.ecservices.app/ecslogo.png" 
          alt="Essential Care Services Logo" 
          class="logo"
          width="200"
          height="57"
          style="display: block; width: 200px; height: auto; margin-bottom: 15px;"
          >
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <p><strong>Date:</strong> ${currentDate}</p>
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h2>Message</h2>
          <p>${message}</p>
        </div>
        <div class="footer">
          <p>This email was sent from the Essential Care Services contact form.</p>
          <p>Please respond to the sender's email address provided above.</p>
        </div>
      </div>
    </body>
    </html>
  `.trim(),
  text: `
NEW CONTACT FORM SUBMISSION
============================

Date: ${currentDate}

CONTACT DETAILS
---------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

MESSAGE
-------
${message}

---
This email was sent from the Essential Care Services contact form.
Please respond to the sender's email address provided above.
  `.trim(),
});

export const getUserMailOptions = (
  firstName: string,
  email: string,
  currentDate: string
): MailOptions => ({
  from: `"Info | Essential Care Services" <${process.env.EMAIL_FROM}>`,
  to: email,
  subject: "Thank you for contacting Essential Care Services",
  headers: {
    ...commonHeaders,
  },
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting Essential Care Services</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .signature { margin-top: 20px; border-top: 1px solid #ddd; padding-top: 20px; }
        .logo { display: block; width: 200px; height: auto; margin-bottom: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
          <div class="signature">
              <img 
              src="https://www.ecservices.app/ecslogo.png" 
              alt="Essential Care Services Logo" 
              class="logo"
              width="200"
              height="57"
              style="display: block; width: 200px; height: auto; margin-bottom: 15px;"
              >
              <p><strong>Information Center</strong><br>
              Office Manager<br>
              Essential Care Services LLC</p>
              
              <p>
              🌐 Website: <a href="https://www.ecservices.app" style="color: #6366f1; text-decoration: none;">www.ecservices.app</a><br>
              📞 Phone: <a href="tel:+15406813507" style="color: #6366f1; text-decoration: none;">(+1) 540-6813507</a><br>
              📧 Email: <a href="mailto:info@ecservices.app" style="color: #6366f1; text-decoration: none;">info@ecservices.app</a><br>
              📍 Address: 129 Pewter Ln Stafford VA 22554
              </p>
          </div>
        <h2>Thank you for contacting Essential Care Services</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message on ${currentDate}.</p>
        <p>We appreciate you taking the time to reach out to us. Our team is committed to providing exceptional care and support, and we will review your inquiry as soon as possible.</p>
        
        <h3>What's Next?</h3>
        <p>One of our dedicated team members will respond to your inquiry within 24-48 business hours. We strive to address all questions and concerns promptly and thoroughly.</p>
        <p>If you need immediate assistance, please don't hesitate to call us at <strong>(540)-681-3507</strong>.</p>
        
        <p>Thank you for considering Essential Care Services. We look forward to the opportunity to assist you.</p>
        
        <p>Best regards,<br>The Essential Care Services Team</p>
        
        <hr>
      </div>
    </body>
    </html>
  `.trim(),
  text: `Dear ${firstName},
    
    Thank you for contacting Essential Care Services. We have received your message on ${currentDate}.
    
    We appreciate you taking the time to reach out to us. Our team is committed to providing exceptional care and support, and we will review your inquiry as soon as possible.
    
    What's Next?
    One of our dedicated team members will respond to your inquiry within 24-48 business hours. We strive to address all questions and concerns promptly and thoroughly.
    
    If you need immediate assistance, please don't hesitate to call us at (540)-681-3507.
    
    Thank you for considering Essential Care Services. We look forward to the opportunity to assist you.
    
    Best regards,
    The Essential Care Services Team
    
    ---
    
    Information Center
    Office Manager
    Essential Care Services LLC
    
    Website: www.ecservices.app
    Phone: (+1) 540-6813507
    Email: info@ecservices.app
    Address: 129 Pewter Ln Stafford VA 22554
  `.trim(),
});
