# CTA Section – Two Blocks

This project recreates the **CTA Section – Two Blocks** from the provided Figma design.  
The goal of this assignment was to translate a design into a responsive and reusable component.

The section contains:
- A label
- A title with mixed typography
- Optional body text
- An optional button with hover state
- Two image CTA cards with gradient overlay, text and arrow button
- Desktop and mobile layouts

---

## Tech stack

- React / Next.js
- Tailwind CSS
- Figma for design reference

---

## Features

- Responsive layout (desktop and mobile)
- Hover states for buttons and card arrows
- Image gradient overlay for text readability
- Reusable card structure using mapped data
- Clean component structure

The component is structured into two parts:
- **CTASection** – main section layout and content
- **CTACard** – reusable component for the image cards

---

## Running the project

Install dependencies:
    npm install

Run the development server:
    npm run dev

Then open:
    http://localhost:0000


---

## CMS considerations

A `cms-fields.md` file is included in this repository describing the proposed CMS fields for this section.  
This outlines how marketers could edit the content in a CMS environment such as HubSpot.

---

## Notes

The design was implemented as closely as possible to the Figma file, including:
- typography
- spacing
- hover states
- responsive behavior

