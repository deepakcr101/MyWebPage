import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Here you would typically send an email using a service like Resend, SendGrid, etc.
        // For now, we'll just log the data and simulate a successful response.
        console.log("Contact Form Submission:", { name, email, message });

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
