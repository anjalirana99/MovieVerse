import OpenAI from 'openai';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true 
});

export default openai