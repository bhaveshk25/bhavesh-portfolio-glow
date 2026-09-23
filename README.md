# Bhavesh Kumawat — Developer Portfolio (Glow Edition)

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Website-brightgreen?style=for-the-badge&logo=vercel)](https://bhavesh-portfolio-glow.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Supported-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

A modern, high-performance developer portfolio built for **Bhavesh Kumawat** showcasing projects, skills, certifications, and academic track record across **Data Science, Machine Learning, Frontend Engineering, and DevOps**. 

Features an ethereal glowing aesthetic with glassmorphism, dynamic particle stages, light/dark mode toggling, an interactive CV preview with PDF downloads, and a full-featured **Admin Content Management Panel** with real-time Supabase cloud sync and browser `localStorage` fallback.

---

## 🌐 Live Website

- **Production URL**: [https://bhavesh-portfolio-glow.vercel.app/](https://bhavesh-portfolio-glow.vercel.app/)
- **Hosting Platform**: Vercel
- **Routing**: Full client-side SPA routing with deep link support (`vercel.json`)

---

## 🌟 Key Features

### 1. Interactive Landing Page (`/` or `/#home`)
- **Live Availability Indicator**: A dynamic status pill displaying whether Bhavesh is open to internships, collaborations, or product work (controlled from the Admin Panel).
- **Orbit Skills Chips**: Animated rotating visual tags highlighting core competencies (`React`, `ML`, `Data`, `DevOps`).
- **Quick Links**: One-click shortcuts to LinkedIn, Email, project showcase, and immediate offline CV PDF download.
- **Dynamic Stats Grid**: Live counters calculated from portfolio content (CGPA, completed projects, certifications).
- **About Showcase (`/#about`)**: Clean narrative introduction cards detailing background, technical interests, and building philosophy.

### 2. Multi-Page Experience
- **Skills (`/skills`)**: Grouped skill matrices across Languages, Python/Web/ML, Dev Tools, Core CS, and Soft Skills.
- **Projects & Training (`/projects`)**:
  - Detailed showcases of engineering projects with live links (e.g. CI/CD Pipeline for Portfolio Website, Indian Stock Market Analytics Dashboard, macOS Menu Bar Automation Bot).
  - Dedicated Summer Training showcase featuring data science reports and Google Colab notebooks.
- **Journey (`/journey`)**: Milestone-based roadmap tracking past development, current student focus, and upcoming career steps.
- **Certificates (`/certificates`)**:
  - Chronologically sorted credentials from GeeksforGeeks, Coursera, Techvanto Academy, NPTEL / IIT Kharagpur, Infosys Springboard, Google, and Coding Blocks hackathons.
  - Image previews with direct links opening the verified full-resolution certificate PDFs.
- **CV / Resume (`/cv`)**:
  - Formatted digital resume reflecting academic credentials, project depth, duration badges, and contact channels.
  - One-click buttons to download or view the official `Bhavesh-Kumawat-CV.pdf`.
- **Education (`/education`)**: Detailed cards for Bachelor of Technology in Computer Science at Lovely Professional University and prior schooling.
- **Contact (`/contact`)**: Direct communication hub with phone, email, LinkedIn, and an integrated asynchronous **Formspree** contact form.

### 3. Integrated Admin Control Panel (`/admin`)
- Accessible via the direct route `/admin` or by clicking the **"BK"** logo in the top-left navigation bar.
- **Dual Authentication & Storage Modes**:
  - **Supabase Live Mode**: When `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are configured, authenticate via Supabase Auth to persist updates to the PostgreSQL database for all visitors globally.
  - **Local Fallback Mode**: If Supabase is not configured, the admin panel automatically runs in local browser storage mode using `localStorage` and `sessionStorage`.
- **Content Management Features**:
  - **Availability Status**: Toggle homepage internship status between *Open* and *Closed*.
  - **Projects Management**: Add, edit, reorder (move up/down), or delete projects with live image preview validation.
  - **Certificates Management**: Add, edit, reorder, or delete certificates with date formatting validation (`MMM YY`) and file link verification.
  - **Skills Management**: Add, edit, reorder, or delete custom skill sections and tag lists.
  - **Reset to Defaults**: One-click restore button to revert content to default baseline data.

### 4. Design & Polish
- **Light & Dark Themes**: Persistent theme toggle supporting system preference detection and smooth transitions.
- **Ambient Particle Stage**: Lightweight CSS-driven ambient particle backdrop with glowing gradients and fluid motion.
- **Glassmorphism & Responsive Layout**: Tailored for all screen sizes from mobile devices to ultrawide monitors.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 18.3, TypeScript 5.8 |
| **Build Tool & Bundler** | Vite 5.4, `@vitejs/plugin-react-swc` |
| **Styling & Design** | Tailwind CSS 3.4, PostCSS, Autoprefixer, `tailwindcss-animate` |
| **UI Components** | shadcn/ui, Radix UI Primitives, Lucide React Icons |
| **Routing** | React Router DOM v6 |
| **Data & State Management** | React Context API, TanStack React Query v5 |
| **Backend & Database** | Supabase (PostgreSQL with Row Level Security), Formspree |
| **Testing** | Vitest 3.2, `@testing-library/react`, JSDOM |
| **Deployment** | Vercel, Git |

---

## 📁 Project Structure

```text
bhavesh-portfolio-glow/
├── public/                                # Static public assets
│   ├── Bhavesh-Kumawat-CV.pdf             # Official downloadable CV
│   ├── certificates/                      # Certificate preview images
│   │   └── full/                          # Verified full certificate PDFs
│   ├── project-covers/                    # SVG covers for projects & training
│   ├── favicon.ico / favicon.svg          # Portfolio favicons
│   ├── placeholder.svg                    # Fallback preview SVG
│   └── robots.txt                         # Search engine directives
├── src/
│   ├── assets/                            # Profile photo & hero backdrop
│   ├── components/
│   │   ├── ui/                            # shadcn/ui Radix component library
│   │   ├── AmbientStage.tsx               # Glowing particle animation stage
│   │   ├── Footer.tsx                     # Global footer with social channels
│   │   ├── Navbar.tsx                     # Responsive navigation & theme switch
│   │   └── PageShell.tsx                  # Standard layout wrapper for sub-pages
│   ├── data/
│   │   └── portfolio.ts                   # Initial data (profile, projects, certs)
│   ├── lib/
│   │   ├── portfolio-store.tsx            # Context provider, state & Supabase sync
│   │   ├── supabase.ts                    # Supabase JS client configuration
│   │   └── utils.ts                       # Classnames & UI utility functions
│   ├── pages/
│   │   ├── Index.tsx                      # Landing page (Hero + About)
│   │   ├── SkillsPage.tsx                 # Technical skills matrix
│   │   ├── ProjectsPage.tsx               # Projects & Summer Training showcase
│   │   ├── JourneyPage.tsx                # Milestones & future roadmap
│   │   ├── CertificatesPage.tsx           # Verified certifications grid
│   │   ├── CVPage.tsx                     # Online resume & PDF viewer
│   │   ├── EducationPage.tsx              # Education & academic background
│   │   ├── ContactPage.tsx                # Formspree contact form & direct info
│   │   ├── AdminPage.tsx                  # Content management dashboard
│   │   └── NotFound.tsx                   # 404 fallback page
│   ├── test/
│   │   ├── setup.ts                       # Vitest matchMedia & storage mocks
│   │   ├── example.test.ts                # Baseline sanity test
│   │   └── routes.test.tsx                # Route integration tests for all pages
│   ├── App.tsx                            # Root router & provider composition
│   ├── index.css                          # Global styles, variables & keyframes
│   └── main.tsx                           # Application entry point
├── .env.example                           # Sample environment configuration
├── index.html                             # HTML template with SEO metadata
├── package.json                           # Dependencies & scripts
├── SUPABASE_SETUP.md                      # Supabase SQL schema & instructions
├── tailwind.config.ts                     # Tailwind theme extensions
├── tsconfig.json                          # TypeScript project configuration
├── vercel.json                            # Vercel SPA route rewrite rules
└── vite.config.ts                         # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0 or newer recommended)
- **npm**, **yarn**, or **bun**

### 1. Clone the Repository
```bash
git clone https://github.com/bhaveshk25/bhavesh-portfolio-glow.git
cd bhavesh-portfolio-glow
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Configure the environment variables:
```env
# Formspree contact form endpoint
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xqeynoan

# Supabase (Optional for live multi-user admin persistence)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# Local fallback admin login when Supabase is not configured
VITE_ADMIN_USER=bhavesh-admin
VITE_ADMIN_PASS=bk-portfolio-2026
```

> **Note**: If `VITE_SUPABASE_URL` is left blank, the app gracefully operates in local fallback mode using browser `localStorage`.

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts Vite local development server with Hot Module Replacement |
| `npm run build` | Compiles TypeScript and creates optimized production bundle in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint across the codebase |
| `npm test` | Runs the Vitest test suite (including route integration tests) |
| `npx tsc -b` | Runs strict TypeScript type checking across all project references |

---

## 🔒 Admin Panel & Supabase Setup

### Accessing the Admin Panel
1. Click the **"BK"** logo in the top-left navigation bar, or navigate directly to `/admin`.
2. Enter your admin credentials:
   - **Local Mode (Default)**:
     - Admin ID: `bhavesh-admin`
     - Password: `bk-portfolio-2026`
   - **Supabase Live Mode**: Enter your registered Supabase user email and password.

### Supabase Database Configuration
To sync admin changes to all visitors globally:
1. Create a project at [supabase.com](https://supabase.com/).
2. Run the following SQL in the **Supabase SQL Editor**:

```sql
create table if not exists public.portfolio_content (
  id text primary key,
  profile jsonb not null,
  about_items jsonb not null,
  availability_open boolean not null default true,
  projects jsonb not null,
  certificates jsonb not null,
  skill_sections jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.portfolio_content (
  id,
  profile,
  about_items,
  availability_open,
  projects,
  certificates,
  skill_sections
)
values (
  'main',
  '{}'::jsonb,
  '[]'::jsonb,
  true,
  '[]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb
)
on conflict (id) do nothing;

alter table public.portfolio_content enable row level security;

-- Public can read content
create policy "public can read portfolio content"
on public.portfolio_content
for select
to anon, authenticated
using (true);

-- Authenticated admins can update content
create policy "authenticated admin can update portfolio content"
on public.portfolio_content
for all
to authenticated
using (true)
with check (true);
```

3. Under **Authentication > Users**, create an admin user with your email and password.
4. Add your Supabase URL and anon key to `.env` (or Vercel project environment variables).

---

## 📬 Contact Form Setup (Formspree)

1. Register at [formspree.io](https://formspree.io/) and create a new form.
2. Copy the Form ID endpoint (e.g. `https://formspree.io/f/xqeynoan`).
3. Set `VITE_FORMSPREE_ENDPOINT` in your environment variables.
4. Submissions from `/contact` will be dispatched directly to your designated email.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub.
2. In [Vercel](https://vercel.com/), click **Add New > Project** and import the repository.
3. Keep default Vite build settings:
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
4. Add your Environment Variables in the Vercel project settings:
   - `VITE_FORMSPREE_ENDPOINT`
   - `VITE_SUPABASE_URL` *(if using Supabase)*
   - `VITE_SUPABASE_ANON_KEY` *(if using Supabase)*
5. Click **Deploy**.

> The included `vercel.json` ensures that all routes (`/skills`, `/projects`, `/certificates`, `/cv`, `/admin`, etc.) route directly to `index.html` on page reload.

---

## 👤 Author & Contact

**Bhavesh Kumawat**  
- **Portfolio**: [https://bhavesh-portfolio-glow.vercel.app/](https://bhavesh-portfolio-glow.vercel.app/)
- **LinkedIn**: [linkedin.com/in/bhaveshkumar07](https://www.linkedin.com/in/bhaveshkumar07)
- **GitHub**: [github.com/bhaveshk25](https://github.com/bhaveshk25)
- **Email**: [kumawatbhav001@gmail.com](mailto:kumawatbhav001@gmail.com)
- **Location**: India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
