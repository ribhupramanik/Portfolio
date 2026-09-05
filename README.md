# Ribhu Pramanik — Developer Portfolio

A personal portfolio showcasing my work in **Python & AI/ML**, **MERN stack development**, and **PHP & Laravel**. Built to help recruiters explore relevant projects, experience, technical skills, and role-specific resumes in one place.

[GitHub](https://github.com/ribhupramanik) · [LinkedIn](https://linkedin.com/in/ribhu-pramanik) · [Email](mailto:ribhu02@gmail.com)

## Features

- Three specialization views, each with its own colour palette, introduction, skills, projects, certifications, and downloadable CV.
- Nine featured projects with source-code links, plus live demos where available.
- Shared professional experience, education, and contact information.
- Direct links to each specialization, with browser back/forward navigation support.
- Responsive layouts, keyboard-accessible tabs, visible focus styles, and reduced-motion support.

| Specialization | Palette | URL path |
| --- | --- | --- |
| Python & AI/ML | Green | `/` or `/?track=ai` |
| MERN Stack | Blue | `/?track=mern` |
| PHP & Laravel | Violet | `/?track=php` |

## Featured projects

| Python & AI/ML | MERN Stack | PHP & Laravel |
| --- | --- | --- |
| Hiring Assistant Chatbot | MERN Ecommerce | Restaurant Management |
| AI Report Maker | MERN Twitter Clone | Financial Deal Management |
| Face & Mood Recognition | Notes Management App | Task Management |

These applications are showcased in the portfolio; their implementations live in their linked repositories.

## Tech stack

- **React 19** and **TypeScript** for the interface and content models.
- **Vinext** and **Vite 8** for development, server rendering, and production builds.
- **Tailwind CSS 4** and custom CSS for layouts and specialization themes.
- **Base UI / shadcn** for accessible interface primitives.
- **Lucide React** for icons.
- **Oxlint** and **Oxfmt** for linting and formatting.

The project uses a Next.js-style `app/` structure through Vinext. Its development and production commands run Vinext.

## Run locally

### Requirements

- Node.js **22.13.0 or newer**
- npm

From the repository directory:

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal, normally [http://localhost:3000](http://localhost:3000).

No API keys, database, or environment variables are required to run the portfolio. The AI project descriptions and links do not make API calls from this website.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Oxlint |
| `npm run format` | Format project files with Oxfmt |

To run the production version locally:

```bash
npm run build
npm run start
```

## Project structure

```text
app/
  page.tsx          # Reads the specialization from the URL
  portfolio.tsx     # Portfolio layout and interactive specialization tabs
  profiles.ts       # Projects, skills, certifications, and CV paths
  globals.css       # Responsive styling and three colour themes
  layout.tsx        # Root layout and site metadata
components/ui/      # Reusable interface primitives
hooks/              # Shared React hooks
lib/                # Shared utilities
public/             # Downloadable CVs and favicon
vite.config.ts      # Vite and Vinext configuration
```

## Update the portfolio

- **Projects and skills:** edit the relevant profile in `app/profiles.ts`. Each project supports a GitHub repository name and an optional live-demo URL.
- **Experience, education, and shared contact links:** edit `app/portfolio.tsx`.
- **Resumes:** replace the PDFs in `public/`, retaining their filenames, or update each profile's `resume` path.
- **Colours and layout:** edit `app/globals.css`. Theme variables are grouped under the `ai`, `mern`, and `php` `data-theme` selectors.
- **Page title and description:** edit `app/layout.tsx`.

After making changes, run `npm run build` and check all three specialization views and their CV downloads.

## Deployment

The current build runs with a Node.js server. Use `npm ci`, followed by `npm run build`, and start it with `npm run start` on a host that supports the required Node.js version.

GitHub can host the source repository, but **GitHub Pages cannot run this server build directly**. A static-export setup would be needed to use GitHub Pages.

Dependencies, local environment files, and generated build output are excluded from version control through `.gitignore`.

## Contact

**Ribhu Pramanik**  
[ribhu02@gmail.com](mailto:ribhu02@gmail.com)  
[LinkedIn](https://linkedin.com/in/ribhu-pramanik) · [GitHub](https://github.com/ribhupramanik)
