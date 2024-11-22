"use server";

import nodemailer from "nodemailer";
import { parseServerActionResponse } from "@/lib/utils";
import { getAdminMailOptions, getUserMailOptions } from "./emailTemplates";

export const submitContactForm = async (state: unknown, formData: FormData) => {
  try {
    const { firstName, lastName, email, phone, message } = Object.fromEntries(
      formData.entries()
    ) as { [key: string]: string };

    const currentDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare and send email to admin

    const adminMailOptions = getAdminMailOptions(
      firstName,
      lastName,
      email,
      phone,
      message,
      currentDate
    );
    await transporter.sendMail(adminMailOptions);
    console.log("Contact form email sent successfully to admin");

    // Prepare and send email to user
    const userMailOptions = getUserMailOptions(firstName, email, currentDate);
    await transporter.sendMail(userMailOptions);
    console.log("Confirmation email sent successfully to user");

    return parseServerActionResponse({
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
