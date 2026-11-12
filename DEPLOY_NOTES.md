# SystemFit AI — Real Projects Update

## What's new

- `/work`: redesigned portfolio page with innovative laboratory-inspired interactive project cards.
- `/work/ighv-report-automation`: detailed IGHV workflow case study, measured results, and embedded Google Drive presentation.
- `/work/sample-registration`: detailed Excel → Power Automate Desktop → existing LIMS case study and actual MP4 video.
- `/work/ras-export-archiving`: daily result export and archive case study, plus the project presentation.
- Interactive filters, Before/After comparisons, workflow graphics, mobile layouts, and links to other case studies.
- Home page now highlights actual finished projects rather than coming-soon demos.

## Publish the update to your current Vercel website

1. Extract the ZIP and open the inner `systemfit-ai` folder.
2. Upload **the files and folders inside** `systemfit-ai` to the root of your existing GitHub repository (`heshamezz18/systemfit-ai`, branch `main`). Preserve directory structure; do not upload the ZIP itself. New folders include `lib`, `components`, `app/work/[slug]`, and `public/media`.
3. Commit the update. Your connected Vercel project should redeploy automatically.
4. Test these routes on desktop and mobile:
   - `/work`
   - `/work/ighv-report-automation`
   - `/work/sample-registration`
   - `/work/ras-export-archiving`
5. Check presentation view in a **private/incognito window**. The presentation is hosted on Google Drive and must have suitable public viewer permissions for an anonymous website visitor. An external-link fallback is provided in case inline embedding fails.

## QA / Public-content checklist

- The sample-registration video is bundled at `public/media/sample-registration.mp4`. Check that patient, staff, contact, access, and client-sensitive details are properly redacted before publishing. The poster is from a non-patient part of the video.
- Confirm organization permission to show any third-party logos, screens or proprietary user interfaces from the recorded LIMS.
- IGHV performance metrics come from the supplied project presentation. 393 minutes saved weekly and 300+ hours annually assume 40 reports per week; they should be kept as **project-specific figures**, not general client guarantees.
- SystemFit AI is a provisional brand: no domain or trademark clearance has been assumed.
- `robots.index` is still `false` pending full public launch decisions. The site may be reachable by its URL but it is not optimized for search-engine indexing yet.
- The `/contact` form is still a local-only demo and does not submit inquiries to email or a CRM.

## Build

Run `npm install`, then `npm run build`. For development, use `npm run dev`.
