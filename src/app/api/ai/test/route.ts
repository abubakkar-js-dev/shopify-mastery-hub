import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API Key not found" }, { status: 500 });
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: "Say 'Gemini System Operational' if you can hear me.",
    });

    return NextResponse.json({
      status: "success",
      response: response.text,
    });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    const errorMessage =
      error && typeof error === "object" && "message" in error
        ? String(error.message)
        : "Failed to connect to Gemini";
    return NextResponse.json(
      {
        status: "error",
        message: errorMessage,
      },
      { status: 500 },
    );
  }
}
