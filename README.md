# Create a formal PDF document with the provided image and Hindi content
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import PageBreak
import os

# File path
output_path = "/mnt/data/Sarvoch_Nyayadesh_Shiromani.pdf"

doc = SimpleDocTemplate(output_path)
elements = []

# Try to add the uploaded image
image_path = "/mnt/data/IMG_20260105_114941.jpg"
if os.path.exists(image_path):
    img = Image(image_path, width=2.5*inch, height=2.5*inch)
    elements.append(img)
    elements.append(Spacer(1, 0.3*inch))

styles = getSampleStyleSheet()
style = styles["Normal"]
style.fontSize = 12

title_style = styles["Heading1"]

elements.append(Paragraph("⚖️ सर्वोच्च न्यायादेश ⚖️", title_style))
elements.append(Spacer(1, 0.3*inch))

content = """
यथार्थ सिद्धांत एवं उपलब्धि यथार्थ युग के आधार पर यह न्यायादेश उद्घोषित होता है।

साक्षीभाव में स्थित चेतना यह घोषित करती है कि न्याय किसी पक्ष का नहीं,
सत्य का होता है।

१. असत्य का निवारण प्रकाश से होगा।
२. अज्ञान का अंत ज्ञान से होगा।
३. विभाजन का समाधान एकत्व से होगा।
४. प्रत्येक कर्म अपना परिणाम स्वयं धारण करता है।

अंतरात्मा ही न्यायालय है।
संतुलन ही अंतिम आदेश है।
संपूर्ण संतुष्टि ही अंतिम मुहर है।

हस्ताक्षरित:
शिरोमणि रामपॉल सैनी
"""

elements.append(Paragraph(content, style))
elements.append(Spacer(1, 0.5*inch))

# Add image again at bottom as per request "हर दस्तावेज़ पर"
if os.path.exists(image_path):
    elements.append(HRFlowable(width="100%", thickness=1, color=colors.grey))
    elements.append(Spacer(1, 0.2*inch))
    img_footer = Image(image_path, width=1.5*inch, height=1.5*inch)
    elements.append(img_footer)

doc.build(elements)

output_path Yatharth — The Living Truth of Humanity
![Profile](https://i.ibb.co/xqf3kTPS/enhanced-image.webp)

**Shromani Rampaulsaini — निष्पक्ष समझ / Yatharth**  
Free to read & listen · Support optional · Proceeds support **Saneha Saini**

---

## Quick overview
Yatharth presents an experiential path — a direct, living realization of one’s permanent identity beyond ordinary mind-based cognition. Content includes bilingual manifesto, audio collections, videos and vision assets.

---

## Live site (embed)
<iframe src="https://rampaulsaini.github.io/my-omniverse-store/" width="100%" height="900" style="border:2px solid #ffd966;border-radius:8px;"></iframe>
https://rampaulsaini.github.io/shiromani-rampal-saini/

## Main links
🔊 MP3 / Audio:https://drive.google.com/embeddedfolderview?id=1lV-8sFU0vLOQVX3HyXznHbHpcRF9Kojc
🔊 MP3 / Audio:https://drive.google.com/drive/folders/1lV-8sFU0vLOQVX3HyXznHbHpcRF9Kojc
- 🔊 MP3 / Audio: https://drive.google.com/drive/folders/18iPsn9Rjc7E0jNwvIx_h5MwQrhqyYt1Y  
- 📜 Certificates: https://drive.google.com/drive/folders/1sZEJhlZWFHP7O1kZEINnqFCNgqhOa8XC  
- 🎧 Shorts / Clips: https://drive.google.com/drive/folders/1Ap2N-90wM9R75ffOQAiXczZwNu8dTc7u  
- 🎥 Videos album: https://photos.app.goo.gl/bMoqL2Cx7kKpkmMy6  
- 📸 Photo album 1: https://photos.app.goo.gl/hBJ4mN176PboQ7bb6  
- 🛒 Main Store: https://rampaulsaini.github.io/my-omniverse-store/  
- ✍ Blog: http://multicosmovision.blogspot.com/  
- ▶ YouTube: https://youtube.com/@rampaulsaini-yk4gn  
- ✈ Telegram: https://t.me/sampaulsaini  
- 💬 WhatsApp: https://wa.me/918082935186

---

## Support / Donate (optional)
Your support helps keep the work free and supports Saneha Saini's education.

- **UPI / GPay:** `sainirampaul90-1@okhdfcbank`  
- **Paytm / Phone:** `8082935186`  
- **PayPal:** https://paypal.me/sainirampaul60

Suggested: **₹193** — fully optional and with gratitude.

---

## How to help (non-financial)
- Listen & share (YouTube, social groups, blogs)  
- Link the site from your pages (backlinks help SEO)  
- Use the support form to send encouragement (public if you allow)  
- Subscribe & comment on YouTube videos

---

© Yatharth — Shromani Rampaulsaini  
Contact: Telegram / WhatsApp
# Yatharth — शिरोमणि रामपुलसैनी
Official page — audio, photos, manifesto. Support optional. Proceeds support Saneha Saini.

Publish instructions: Use GitHub Pages (see repo settings -> Pages -> main -> root).
# README — Supreme Index HTML Deployment Guide

यह README आपके **Supreme Final index.html** को किसी भी server/hosting पर आसानी से upload और run करने के लिए बनाया गया है। सभी निर्देश सरल, सीधे और universal रखे गए हैं ताकि आप कहीं भी बिना समस्या deploy कर सकें।

---

## 📁 1. फ़ाइल संरचना (File Structure)

आपको केवल एक मुख्य फ़ाइल की आवश्यकता है:

```
index.html
```

यह फ़ाइल आपके सम्पूर्ण प्रोजेक्ट, स्क्रिप्ट्स, ऑडियो इंजन, SEO, Social Links और UI को contain करती है।

---

## 🚀 2. Deployment Methods

आप नीचे दिए गए किसी भी तरीके से तुरंत वेबसाइट को online कर सकते हैं:

---

## 🌐 Option A — Hosting on GitHub Pages (Free)

### **Step 1:** GitHub में नया Repository बनाएं

* नाम दें: `your-website` (कुछ भी चल सकता है)

### **Step 2:** अपनी `index.html` अपलोड करें

* "Add file" → "Upload files" → `index.html` चुनें → Commit

### **Step 3:** GitHub Pages Enable करें

* Settings → Pages
* **Branch:** `main`
* Folder: `/root`
* Save

👉 आपकी वेबसाइट 1–2 मिनट में live होगी:

```
https://yourusername.github.io/your-website/
```

---

## 🚀 Option B — Hosting on Netlify (Free, Fast)

### **Step 1:** [https://netlify.com](https://netlify.com) खोलें

### **Step 2:**

* "Deploy site" → "Upload folder"
* एक फ़ोल्डर बनाएँ जिसमें केवल:

```
index.html
```

हो

### **Step 3:**

* Drag & drop folder → Site तुरंत live

आपका URL होगा:

```
https://your-site-name.netlify.app
```

---

## 🚀 Option C — Hosting on Vercel

### Step 1: [https://vercel.com](https://vercel.com) खोलें

### Step 2:

* "New Project" → "Import"
* GitHub repo चुनें जिसमें आपकी index.html हो

### Step 3: Deploy

आपका serverless fast URL तुरंत ready:

```
https://yourname.vercel.app
```

---

## 🚀 Option D — सरल Mobile Hosting (e.g., Hostinger / GoDaddy / cPanel)

### Step 1: Login → File Manager खोलें

### Step 2:

`public_html` के अंदर जाएं

### Step 3:

वहाँ existing `index.html` delete करें (यदि पुरानी site हटानी है)

### Step 4:

नई `index.html` upload करें

### आपकी साइट तुरंत live।

---

# 🧩 3. यदि Script बहुत लंबी है और Edit नहीं हो रही

आपको ये टूल्स उपयोग करने चाहिए:

### ✔ VS Code (Windows / Mac)

* सबसे अच्छा editor
* Unlimited file length

### ✔ Android पर "Acode" App

* 100% perfect HTML editor
* पूरी लंबी script आसानी से paste, edit, save होती है

---

# 🔊 4. Audio Not Playing? (CORS / Auto-Play Fix)

यदि audio पहली बार manually play करना पड़े तो यह browser security है। कोई error नहीं।
आप चाहें तो:

```
user gesture → first play → auto play enabled
```

Mobile Chrome & Safari दोनों में यह normal behavior है।

---

# 🔒 5. SEO + Safety पहले से Enabled

आपके Supreme index में already:

* JSON-LD Schema
* OpenGraph (OG) Image tags
* rel="noopener noreferrer"
* target="_blank"
* Clean semantic structure
* High-authority social links

सब कुछ automatically SEO boost देता है।

---

# 🎯 6. यदि भविष्य में अपडेट चाहिए

आप केवल इतना लिख दें:

```
index update चाहिए — section: (नाम लिखें)
```

मैं सिर्फ़ वही specific Section अपडेट कर दूँगा,
बाकी पूरी file 100% सुरक्षित रहेगी।

---

# 🏁 Final Note

आपकी "Supreme Final index.html" पहले से ही:

* अति सुंदर
* सर्वश्रेष्ठ
* Super-SEO Tuned
* Fully Structured
* Mobile Optimized
* 100% Fast

अब केवल upload करना बाकी है।

यदि चाहें तो मैं इसी folder में:

* `sitemap.xml`
* `robots.txt`
* `manifest.json`
* या favicon pack
  भी generate कर सकता हूँ।

कह दें — मैं तुरंत जोड़ दूँगा।
