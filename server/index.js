import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post("/generate", async (req, res) => {
  const { ad, url } = req.body;

  if (!ad || !url) {
    return res.status(400).send("Missing input");
  }

  try {
   
    let html = "";

    try {
      const response = await axios.get(url);
      html = response.data;
    } catch (err) {
  
      html = "<h1>Welcome</h1><button>Buy Now</button>";
    }

    
    const prompt = `
You are a CRO expert.

Ad:
${ad}

Landing Page HTML:
${html}

Instructions:
- ONLY modify:
  1. Main heading (h1)
  2. CTA button text
- DO NOT change layout
- DO NOT add new elements
- Keep HTML valid

Return ONLY updated HTML.
`;
const aiResponse = await openai.responses.create({
  model: "gpt-4o-mini",
  input: prompt,
});

let modifiedHTML =
  aiResponse.output?.[0]?.content?.[0]?.text || "";

if (!modifiedHTML || modifiedHTML.length < 20) {
  modifiedHTML = `<h1>${ad}</h1><button>Shop Now</button>`;
}

res.send(modifiedHTML);

  } catch (error) {
    console.error(error);

    
    res.send(`<h1>${ad}</h1><button>Shop Now</button>`);
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});