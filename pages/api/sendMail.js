// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { from, subject, text } = req.body;
    // console.log("to ", to);
    // Create a Nodemailer transporter using your SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Example: 'smtp.gmail.com' for Gmail
      port: 587, // 465 for SSL, 587 for TLS
      secure: false, // Use TLS
      auth: {
        user: "vayamdesigners@gmail.com", // Your email address
        pass: "fuez ntkl fmsb cnki", // Your email password or app-specific password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: from, // Sender address
        to: "vayamdesigners@gmail.com", // Receiver address
        subject, // Email subject
        text, // Email body
      });

      // Respond with success
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      // Handle errors
      res
        .status(500)
        .json({ message: "Error sending email", error: error.message });
    }
  } else {
    // Handle other HTTP methods (e.g., GET)
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
