import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY! });

export async function generatePersonalizedPath(userGoals: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        User Goals: ${userGoals.join(", ")}
        
        Based on these goals for learning Shopify, provide a structured learning path.
        Return a JSON object with:
        1. recommendedModules: string[] (IDs of recommended modules from: setup, design, nocode, cro, theme-dev, adv-theme, app-dev)
        2. focusAreas: string[] (Specific sub-topics to focus on)
        3. estimatedTime: string (Estimated time to completion)
        
        Current Modules Available:
        - setup: Store Setup & Configuration
        - design: Theme Customization
        - nocode: No-Code Page Builders
        - cro: Conversion Rate Optimization
        - theme-dev: Theme Development (Liquid)
        - adv-theme: Advanced Theme Dev
        - app-dev: Shopify App Development
      `,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    const jsonMatch = text?.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return null;
  } catch (error) {
    console.error("Error generating path:", error);
    return null;
  }
}
