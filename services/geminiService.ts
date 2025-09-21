
import { GoogleGenAI, Type } from "@google/genai";
import type { Verse } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const verseSchema = {
  type: Type.OBJECT,
  properties: {
    surahName: {
      type: Type.STRING,
      description: "The name of the Surah (chapter) in the Quran. E.g., 'Al-Baqarah'."
    },
    verseNumber: {
      type: Type.STRING,
      description: "The verse number(s). E.g., '2:155-157'."
    },
    arabicText: {
      type: Type.STRING,
      description: "The full verse in its original Arabic script."
    },
    transliteration: {
      type: Type.STRING,
      description: "The English transliteration of the Arabic verse."
    },
    translation: {
      type: Type.STRING,
      description: "A clear and accurate English translation of the verse."
    },
    explanation: {
      type: Type.STRING,
      description: "A brief, compassionate explanation of how this verse provides comfort and guidance for the specified topic."
    }
  },
  required: ["surahName", "verseNumber", "arabicText", "transliteration", "translation", "explanation"]
};

export const fetchVersesForTopic = async (topic: string): Promise<Verse[]> => {
  const prompt = `Please provide 4 Quranic verses that offer solace and guidance for someone experiencing ${topic}. For each verse, provide the required information.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: verseSchema
        },
        temperature: 0.5,
      },
    });
    
    const jsonText = response.text.trim();
    if (!jsonText) {
      throw new Error("API returned an empty response.");
    }

    const verses: Verse[] = JSON.parse(jsonText);
    return verses;

  } catch (error) {
    console.error("Error fetching verses from Gemini API:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
};
