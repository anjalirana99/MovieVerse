import OpenAI from 'openai';
const API_open = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: API_open, // This is the default and can be omitted
  dangerouslyAllowBrowser: true 
});

export default openai