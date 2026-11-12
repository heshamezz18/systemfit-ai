# SystemFit AI — Company Website

A responsive, English-only marketing website built with Next.js App Router, React, TypeScript and Tailwind CSS.

## Run locally

1. Install Node.js 20.9+ (Node.js 22 LTS recommended).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Production

Run `npm run build` and `npm run start`, or connect the repository to Vercel. Configure a verified domain after completing legal and domain checks.

## Pages

- `/` Home
- `/solutions` Solutions
- `/industries` Industries
- `/work` Real project portfolio and case studies
- `/work/ighv-report-automation` IGHV reporting case study and presentation
- `/work/sample-registration` Power Automate Desktop video case study
- `/work/ras-export-archiving` RAS export and archiving case study
- `/process` Process
- `/about` About
- `/contact` Consultation form preview

## Before public launch

- **Brand:** SystemFit AI is provisional. Verify trademark, trade name and domain availability.
- **Contact:** The contact form deliberately does NOT send customer data. Connect a secure backend/CRM and email delivery, add spam protection, consent/privacy policy and server-side validation.
- **Portfolio:** Actual sample-registration video is bundled in `public/media/sample-registration.mp4`. Original case-study presentation remains hosted on Google Drive and is embedded by its preview URL. Verify both assets are approved for public display and contain no identifiable or confidential records; check that the Drive presentation is publicly accessible in incognito.
- **Results:** IGHV 10-minute → 10-second per-report figures are project-specific. 393 min/week and 300+ hrs/year are calculated at 40 reports weekly; no guarantee for future projects.
- **SEO:** `robots` is intentionally set to noindex until the site is ready for launch. Change in `app/layout.tsx` when ready.
- **Legal:** Add privacy policy, legal entity details and appropriate terms before collecting data.
- **Accessibility:** Test keyboard navigation, screen readers, and contrast before launch.

This edition adds user-supplied, confirmed IGHV results and real laboratory automation case studies; no client endorsements or universal performance guarantees are claimed.
