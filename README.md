**Portfolio: Shubham Mukherjee**

A personal portfolio site built with Next.js (app router) showcasing projects, experience, and contact information. This repo contains a clean, responsive UI with sections for Hero, About, Projects, Experience, Blog, and Contact, plus an email-send API route.

**Tech Stack**
- **Framework:** Next.js (app directory)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (configured in the project)
- **Runtime:** Node.js / Vercel-compatible

**Features**
- **Responsive sections:** Hero, About, Projects, Experience, Blog, Contact, Footer
- **Email API:** Server route to send email ([app/api/send/route.ts](app/api/send/route.ts))
- **Reusable UI components:** Buttons, Glass cards, Section wrapper, Social links
- **Custom backgrounds and effects:** Neural background and typewriter effect

**Local development**
Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

**Project structure (high level)**
- **app/** — Next.js app entry, global styles, routes ([app/page.tsx](app/page.tsx))
- **components/** — Reusable UI and section components (examples: [components/sections/Experience.tsx](components/sections/Experience.tsx), [components/email-templates.tsx](components/email-templates.tsx))
- **lib/** — Utility helpers ([lib/utils.ts](lib/utils.ts))
- **public/** — Static assets

**Deployment**
This project is ready to deploy to Vercel or any Node-compatible host that supports Next.js. For Vercel, connect the repository and use the default build command `npm run build` and output directory handled by Next.

**Contributing**
- Fork and open a PR for changes.
- Run `npm run dev` locally to test UI and API routes before submitting.

**Contact**
If you'd like to get in touch about the portfolio or a potential collaboration, use the contact form on the site or reach out via the contact details in the project.

**License**
This repository does not include a license file. Add one if you want to permit reuse.
