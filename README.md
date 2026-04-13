#  AI Landing Page Personalizer

An AI-powered tool that personalizes landing pages based on ad creatives while preserving the original structure and improving CRO (Conversion Rate Optimization).

---

##  Live Demo
https://ai-land-page.vercel.app

---

##  How It Works

1. User inputs:
   - Ad Creative (text/link)
   - Landing Page URL

2. Frontend sends data to backend

3. Backend:
   - Fetches landing page HTML
   - Sends it along with ad to OpenAI

4. AI:
   - Modifies only:
     - Main Heading (H1)
     - CTA Button text

5. Updated HTML is returned and displayed in an iframe

---

##  Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **AI:** OpenAI API
- **Deployment:**
  - Vercel (Frontend)
  - Render (Backend)

---

## 🎯 Features

- Ad-based landing page personalization
- CRO-focused content updates
- Maintains original layout
- Fallback system for reliability

---

## Limitations

- Some websites block scraping (e.g., Amazon)
- Dynamic JS-heavy pages may not work correctly
- Fallback HTML is used in restricted cases

---

## Future Improvements

- Use headless browsers for better scraping
- Advanced UI personalization (colors, images)
- User segmentation
- A/B testing support

---

##  Author

Rashi Gour
