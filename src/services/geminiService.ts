import { GoogleGenAI } from "@google/genai";
import { Lesson, Module } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY! });

/**
 * Technical Co-Pilot for the Workshop
 */
export async function getCoPilotResponse(
  message: string,
  history: { role: 'user' | 'model', parts: string }[],
  context: { lesson: Lesson; module: Module }
) {
  try {
    const systemInstruction = `
      You are the "Mastery Hub AI Co-Pilot," a world-class Shopify Technical Architect.
      Context: You are helping a student in the "${context.module.title}" module, specifically on the lesson: "${context.lesson.title}".
      
      TONE & STYLE:
      - Professional, industrial, and highly technical.
      - Use natural sentence case.
      - Be concise but extremely precise.
      - Use Markdown for code blocks and bolding technical terms.
      
      EXPERTISE:
      - Deep knowledge of Liquid, Shopify Functions, Hydrogen, and Remix.
      - Optimization-first mindset.
      - If a student asks something outside of Shopify/Web-Dev, politely redirect them to the "Mastery Protocol."
      
      Current Lesson Objectives: ${context.lesson.description || 'Mastering the current technical unit.'}
    `;

    // FIX: Move systemInstruction into the config object
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({ 
        role: h.role === 'model' ? 'model' : 'user', 
        contents: [{ text: h.parts }] 
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I was unable to process that request. Please try rephrasing.";
  } catch (error) {
    console.error("Co-Pilot Sync Error:", error);
    return "System Error: Connection to Neural Link interrupted. Please verify your credentials and retry.";
  }
}

/**
 * Initial Roadmap Generator
 */
export async function generatePersonalizedPath(userGoals: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User Goals: ${userGoals.join(", ")}. Based on these goals, provide a structured learning path as JSON.`,
      config: { 
        systemInstruction: "You are a Shopify Curriculum Designer. Output valid JSON only.",
        responseMimeType: "application/json" 
      }
    });
    if (!response.text) throw new Error("Empty response from AI");
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Roadmap Sync Error:", error);
    return null;
  }
}
