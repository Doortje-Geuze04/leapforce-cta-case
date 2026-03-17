# CTA Section – Two Blocks

This project recreates the **CTA Section – Two Blocks** based on the provided Figma design.  
The goal of this assignment was to translate a visual design into a **responsive, reusable and maintainable component**.

**Live demo**  
https://doortje-geuze04.github.io/leapforce-cta-case/

---

## Overview

The section includes:
- Label
- Title with mixed typography
- Optional body text
- Optional CTA button with hover state
- Two image-based CTA cards with gradient overlay
- Fully responsive layout (desktop & mobile)

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- Figma (design reference)

---

## Features

- Responsive layout (mobile & desktop)
- Reusable component architecture
- Hover interactions for buttons and card actions
- Gradient overlay on images for readability
- Data-driven rendering using mapped card data

---

## Component Structure

The implementation is split into clear, reusable components:

- **CTASection**  
  Main layout and composition of the section

- **CTAHeader**  
  Handles label, title, body text and CTA button

- **CTACard**  
  Reusable component for image cards

---

## Running the Project

Install dependencies:
    npm install

Start development server:
    npm run dev

Then open:
    http://localhost:5000

## Deployment

The project is deployed using GitHub Pages.
A production build is created using:

```bash 
npm run build
npm run deploy
```

## CMS Considerations

A cms-fields.md file is included in this repository describing the proposed CMS structure.
This outlines how content editors (e.g. marketers) can manage:
* Text fields
* CTA button
* Card content (title, description, image, link)
* Designed with flexibility and scalability in mind.

## Notes

The implementation closely follows the Figma design, including:
* Typography
* Spacing and layout
* Visual hierarchy
* Hover interactions
* Responsive behavior

Focus was placed on clean structure, reusability and maintainability.