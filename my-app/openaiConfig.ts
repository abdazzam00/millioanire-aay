// openaiConfig.js
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "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",
  dangerouslyAllowBrowser: true,
});

export { openai };
