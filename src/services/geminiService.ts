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

/**
 * AI Syllabus Engine - Iterative Generation
 */
export async function generateSyllabusChunk(
  topic: string,
  targetMonth: number,
  targetWeek: number,
  existingData?: any
) {
  try {
    const systemInstruction = `
      You are the "Syllabus Architect" for Shopify Mastery Hub.
      TASK: Generate a high-performance curriculum chunk for: "${topic}".
      TARGET: Month ${targetMonth}, Week ${targetWeek}.
      
      RULES:
      1. Structure: 1 Module (Week) containing 7 Lessons (Day 1-5: Videos, Day 6-7: Assignments).
      2. IDs: Module ID must be "week-{absolute_week_number}". Lesson ID must be "day-{absolute_day_number}".
      3. Content: Each Video Day lesson must have 3-5 videos. Each Video object MUST have: id (e.g. "d1-v1"), title, youtubeId (empty string), and duration ("00:00").
      4. Content: Each Lesson MUST have tasks. Each Task object MUST have: id (e.g. "d1-t1"), title, and completed (false).
      5. Preservation: If existingData is provided, fill gaps ONLY. Never overwrite a non-empty "youtubeId".
      
      OUTPUT: Return ONLY a valid JSON object:
      {
        "module": {
          "id": "week-1",
          "title": "Week 1: Title",
          "description": "Overview",
          "month": ${targetMonth},
          "order": ${targetWeek}
        },
        "lessons": [
          {
            "id": "day-1",
            "moduleId": "week-1",
            "order": 1, 
            "title": "Day 1: Title", 
            "description": "Objectives",
            "difficulty": "${targetMonth === 1 ? 'Beginner' : targetMonth === 2 ? 'Intermediate' : 'Advanced'}",
            "videos": [{ "id": "d1-v1", "title": "Title", "youtubeId": "", "duration": "00:00" }],
            "tasks": [{ "id": "d1-t1", "title": "Task", "completed": false }]
          }
        ]
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Context: ${topic}. Existing Week Data: ${JSON.stringify(existingData || {})}`,
      config: { 
        systemInstruction: systemInstruction,
        responseMimeType: "application/json" 
      }
    });

    if (!response.text) throw new Error("Neural Link Failed");
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Syllabus Engine Error:", error);
    return null;
  }
}

