
# 🧠 Forescribe AI – Frontend Assignment

A fully responsive, accessible, and animated frontend built using **Next.js (TypeScript)** and **TailwindCSS**, inspired by the provided Figma design and Framer Motion interactions.

---

## 🚀 Live Demo

**Vercel Deployment:** [https://forescribe-fzal87ovs-kshitij-singhs-projects-b6b0888b.vercel.app/](https://forescribe-fzal87ovs-kshitij-singhs-projects-b6b0888b.vercel.app/)

**GitHub Repository:** [https://github.com/indkshitij/-ForescribeAI](https://github.com/indkshitij/-ForescribeAI)

---

## 📂 Directory Structure

```
src/
 ├── app/
 │   ├── hooks/                   # Custom React hooks (e.g., dark mode)
 │   ├── privacy-policy/          # Privacy Policy page
 │   ├── term-and-conditions/     # Terms & Conditions page
 │   ├── favicon.ico              # App icon
 │   ├── globals.css              # Global styles and Tailwind theme setup
 │   ├── layout.tsx               # Root layout and metadata
 │   └── page.tsx                 # Home page
 │
 ├── assets/
 │   ├── CardImg/                 # Card images and assets
 │   └── LogoImg/                 # Logo assets (PNG, GIF)
 │
 ├── components/
 │   ├── Authentication/          # Login UI
 │   ├── Branding/                # Logo components
 │   ├── Buttons/                 # Button components
 │   ├── Cards/                   # InfoCard and related UI
 │   ├── DarkMode/                # Dark mode toggler
 │   └── Policy/                  # Policy-related reusable elements
 │
 └── utils/
     └── CardData.ts              # Static card data configuration
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/indkshitij/-ForescribeAI.git
   cd -ForescribeAI
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   ```
   http://localhost:3000
   ```

---

## 🧩 Pages Implemented

* **Home Page:** `/`
* **Privacy Policy Page:** `/privacy-policy`
* **Terms & Conditions Page:** `/term-and-conditions`

---

## ✨ Features

* **Responsive Design:** Works seamlessly across all screen sizes.
* **Smooth Animations:** Implemented with Framer Motion (page transitions, hover effects, and content reveal).
* **Dark Mode:** Custom dark theme implemented with Tailwind CSS and local storage persistence.
* **Accessibility:** Semantic HTML, ARIA roles, and proper contrast.
* **Optimized Assets:** Images compressed and lazy-loaded for performance.
* **Created Two Pages:** Privacy Policy and Terms & Conditions.
* **Created Modular and Reusable Components:** Added favicon and metadata for better SEO and presentation.

---

## 🧠 Assumptions Made

* The UI follows the provided Figma design closely, with animation adjustments for smoother performance.
* Dark mode was implemented using a lightweight custom hook with localStorage for theme persistence.

---

## 🧑‍💻 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons
* **Deployment:** Vercel

---

✅ **Developed by [Kshitij Singh](https://github.com/indkshitij)**
