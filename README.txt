JAWAI TRAIL RUN WEBSITE — V10

Open index.html directly in a browser. All internal pages are normal .html files again (about.html, rules.html, 25km.html, etc.), so the site works from file:// without directory-index behavior.

Latest changes:
- Restored .html URLs and flat page structure.
- Removed only the small Jawai logo beside EVENT DATE in the desktop header; event date and ITRA mark remain.
- Changed the home carousel to a new set of freely licensed Jawai images.
- Rules & Regulations page no longer uses the reveal-on-scroll animation.
- Existing Partners section remains unchanged.

JAWAI TRAIL RUN WEBSITE
=======================

Static HTML/CSS/JS website built with Bootstrap 5 classes.

Structure
---------
- Common header and footer are defined once in common.js and injected into every page.
- style.css contains site-wide branding and responsive styles.
- script.js contains the race-day countdown.
- assets/ contains the supplied branding artwork and the two elevation profiles extracted from the source document.
- All SEO titles and meta descriptions follow the supplied website document.

Before publishing
-----------------
1. Replace https://example.com/ in sitemap.xml and robots.txt with the production domain.
2. Insert actual Google Search Console verification, Google Analytics, and Meta Pixel IDs in the marked places in each page head.
3. The supplied content refers to ITRA, sponsor, organizer and partner logos but does not provide those logo files; placeholders remain as text.
4. The source document asks for Jawai landscape photos but none were supplied. The home carousel therefore uses the supplied brand artwork/patterns so the design remains grounded in the provided materials.
5. The contact form uses mailto because no backend/form endpoint was supplied.
6. The registration and route maps are embedded exactly from the URLs in the source document.


Revision notes
--------------
- Navigation dropdowns redesigned; Contact now precedes Register Now and Register Now stays at the far-right on desktop.
- Bootstrap Icons are loaded from the official jsDelivr Bootstrap Icons CDN.
- Typography now uses Proxima Nova throughout, matching the supplied brand guide. The ZIP does not redistribute any font files; the site references an external webfont stylesheet.
- Three Jawai banner photographs are loaded remotely from Wikimedia Commons and credited in the site footer. Images are CC BY-SA 4.0.
- Scroll fade/reveal animation is implemented with IntersectionObserver and respects prefers-reduced-motion.
- FAQ page has a redesigned two-column layout and client-side search/filter.
- Homepage now links to all principal race, runner-information, registration and contact pages.

V5 updates: Abu Road replaces Pindwara; official full venue name used; ITRA member logo supplied by client added to homepage; rights attribution updated to Seyari & Ronin.


V9 PPT revisions
----------------
- Supplied transparent JTR logo is now used in the header and footer.
- Header includes event date with event mark and the ITRA member mark.
- Homepage About section uses Jawai photography; About page now has multiple Jawai images.
- ITRA section background treatment was removed and the event/ITRA marks are arranged together.
- “Everything You Need” section was removed.
- 25Km and 12Km GPX download links were added from the supplied PPT.
- Rules & Regulations content was reorganized into clearer section headings without changing its wording.
- Waste Management now uses a different Jawai landscape image.
- Facebook and Instagram links were added.
- Clean directory URLs are used so public URLs do not show .html. Old .html routes can redirect via _redirects/.htaccess.
- Sponsors & Partners section was intentionally left unchanged per instruction.
