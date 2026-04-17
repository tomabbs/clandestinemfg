# Clandestine Manufacturing - Backend Integration Documentation

## ✅ COMPLETED INTEGRATIONS

All links in the landing page now point to your actual backend URLs. Here's the complete mapping:

### Navigation Links (Desktop & Mobile)

| Product | URL |
|---------|-----|
| Vinyl | `https://store.clandestinemfg.com/vinylproject/` |
| CDs | `https://store.clandestinemfg.com/discproject/` |
| Cassettes | `https://store.clandestinemfg.com/cassettes/` |
| Apparel | `https://store.clandestinemfg.com/apparel/` |

### Support Dropdown Links

| Resource | URL |
|----------|-----|
| FAQs / Help Center | `https://store.clandestinemfg.com/action/HelpCenterView` |
| Design Templates | `https://store.clandestinemfg.com/templates-disc` |
| Mail in Master Form | `https://store.clandestinemfg.com/MIMForm.pdf` |

### Product Cards (Main Content)

Each of the 4 product cards now links to:
- **Vinyl Card** → `https://store.clandestinemfg.com/vinylproject/`
- **CD Card** → `https://store.clandestinemfg.com/discproject/`
- **Cassette Card** → `https://store.clandestinemfg.com/cassettes/`
- **Apparel Card** → `https://store.clandestinemfg.com/apparel/`

### Primary CTA Buttons

**Hero Section:**
- "Get Your Free Quote" → Links to Vinyl project (can be changed to custom quote page)
- "See Our Work" → Scrolls to #work section

**CTA Section (Bottom):**
- "Get Free Quote" → `https://store.clandestinemfg.com/vinylproject/`
- "Call Us" → `tel:+1-555-0123` (NEEDS UPDATE - see below)

### Footer Links

All footer links mirror the navigation with identical URLs to backend store.

---

## ⚠️ ITEMS THAT NEED YOUR INPUT

### 1. **Contact Phone Number**

**Current:** `(555) 012-3456` (placeholder)

**Location in code:** Line ~490 in `index.html`

```html
<a href="tel:+1-555-0123" class="btn btn-secondary-inverse">Call Us: (555) 012-3456</a>
```

**What you need to provide:**
- Your actual customer service phone number
- Format: `(XXX) XXX-XXXX`

**How to update:**
Replace both instances:
1. `tel:+1-555-0123` → `tel:+1-XXX-XXX-XXXX`
2. `(555) 012-3456` → Your formatted number

---

### 2. **Login Page URL**

**Current:** `#login` (placeholder anchor)

**Locations:** 
- Desktop nav (line ~93)
- Mobile menu (line ~145)

**What you need to provide:**
- Full URL to your login/account page
- Example: `https://store.clandestinemfg.com/action/AccountLoginView`

**How to update:**
Find and replace all instances of `href="#login"` with your actual login URL.

---

### 3. **Shopping Cart URL**

**Current:** SVG icon with no link

**Location:** Line ~135 (desktop nav)

**What you need to provide:**
- URL to shopping cart page
- Example: `https://store.clandestinemfg.com/action/BasketView`

**How to update:**
Wrap the `<svg class="nav-cart">` in an anchor tag:
```html
<a href="https://store.clandestinemfg.com/action/BasketView">
    <svg class="nav-cart" viewBox="0 0 24 24">...</svg>
</a>
```

---

### 4. **Additional Products You Offer**

I noticed you also have:
- **Flexi Discs:** `https://store.clandestinemfg.com/flexi-discs/`

**Should we add this to the product grid?**

If yes, I can add a 5th product card with:
- Icon design
- Description
- Link to flexi-discs page

---

### 5. **Primary CTA Destination**

**Current:** "Get Your Free Quote" buttons point to vinyl project page

**Question:** Should the main CTA button go to:
- A) Vinyl project (current)
- B) CD project
- C) A general "Get Quote" landing page
- D) A contact form

**Location:** 
- Hero section (line ~203)
- CTA section (line ~489)

---

### 6. **"See Our Work" Portfolio Page**

**Current:** `href="#work"` (scrolls to anchor that doesn't exist)

**Location:** Hero section secondary button (line ~204)

**Options:**
- A) Create a portfolio/gallery page and link to it
- B) Link to a section of projects on backend
- C) Remove this button
- D) Change to "Browse Products" and link to products section

---

## 📋 URL STRUCTURE ANALYSIS

Based on the URLs you provided, I can see your backend uses this pattern:

```
https://store.clandestinemfg.com/[product-name]/
```

**Products:**
- `/vinylproject/` - Vinyl configurator
- `/discproject/` - CD configurator  
- `/cassettes/` - Cassette configurator
- `/apparel/` - Apparel configurator
- `/flexi-discs/` - Flexi disc configurator

**Actions:**
- `/action/HelpCenterView` - FAQ/Help
- `/action/AccountLoginView` - Login (assumed)
- `/action/BasketView` - Cart (assumed)

**Resources:**
- `/templates-disc` - Design templates
- `/MIMForm.pdf` - Mail-in form

---

## 🔍 WHAT I COULDN'T ACCESS

Due to SSL certificate issues, I couldn't access your backend pages to:

1. ✗ See exact button text/labels on quote tools
2. ✗ Understand the full configurator flow
3. ✗ See if there are other important pages
4. ✗ Check for any special promotional banners
5. ✗ See what product imagery you use

**Recommendation:** Can you provide:
- Screenshots of your vinyl configurator first page
- Screenshots of your CD/Cassette/Apparel pages
- Any special promo messages you want on landing page
- Exact minimum quantities for each product
- Current lead times for each product type

---

## 📦 FILES CREATED

### Core Files
1. **index.html** - Fully integrated landing page
2. **landing.css** - Custom styles for landing page
3. **landing.js** - Interactive functionality
4. **landing-page-strategy.md** - Complete strategy document

### Dependencies (From Your Assets)
- **styles.css** - Your existing brand styles
- **script.js** - Your existing mobile menu script
- **fonts/** - LaoMN and Univers fonts
- **cl-logo-manufacturing.png** - Your logo

---

## 🎯 NEXT STEPS FOR LAUNCH

### Phase 1: Information Gathering (You provide)
- [ ] Actual phone number
- [ ] Login page URL
- [ ] Cart page URL
- [ ] Decide on main CTA destination
- [ ] Decide on "See Our Work" destination
- [ ] Confirm all product URLs are correct
- [ ] Provide any missing URLs

### Phase 2: Content Updates (You/Dev team)
- [ ] Replace placeholder phone number
- [ ] Add login URL
- [ ] Add cart functionality
- [ ] Update CTA destinations
- [ ] Add actual product photography
- [ ] Add real customer testimonials
- [ ] Update company founding year if needed

### Phase 3: Backend Integration (Dev team)
- [ ] Ensure all links work with your session management
- [ ] Test quote tools from landing page clicks
- [ ] Verify Help Center links work
- [ ] Test download links for templates/forms
- [ ] Implement analytics tracking
- [ ] Add conversion tracking on CTAs

### Phase 4: Testing
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile responsiveness testing
- [ ] All link functionality testing
- [ ] Form submission testing (if applicable)
- [ ] Page load speed optimization
- [ ] Accessibility audit

### Phase 5: Launch
- [ ] Deploy to production
- [ ] Update DNS if needed
- [ ] Monitor analytics
- [ ] A/B test variations
- [ ] Collect user feedback

---

## 🔗 COMPLETE LINK INVENTORY

Here's every external link in the landing page:

### Navigation (appears in 3 places: desktop nav, mobile menu, footer)
```
https://clandestinelabelservices.com (7 variations with anchors)
https://store.clandestinemfg.com/vinylproject/
https://store.clandestinemfg.com/discproject/
https://store.clandestinemfg.com/cassettes/
https://store.clandestinemfg.com/apparel/
https://store.clandestinemfg.com/action/HelpCenterView
https://store.clandestinemfg.com/templates-disc
https://store.clandestinemfg.com/MIMForm.pdf
```

### Internal Anchors
```
#products (scrolls to product section)
#quote (scrolls to CTA section)
#work (scrolls to portfolio - currently empty)
#faqs (scrolls to FAQ section)
```

### Call-to-Action
```
tel:+1-555-0123 (NEEDS UPDATE)
```

---

## 💡 RECOMMENDATIONS

### 1. Add Flexi Discs
Since you offer this product, consider adding it to the product grid or mentioning it in the "Other Products" section.

### 2. Create "Custom Quote" Landing Page
For users who aren't sure which product they want, create a page that asks questions and routes them to the right configurator.

### 3. Add Exit Intent Popup
When users are about to leave, offer a "Quick Quote" form to capture leads.

### 4. Implement Live Chat
Based on competitor research, "real people answering" is a huge differentiator. Add a chat widget.

### 5. Add Trust Badges
If you have certifications, awards, or notable clients, add them to the hero or social proof section.

---

## ❓ QUESTIONS FOR YOU

1. **What's your actual business phone number?**

2. **Do you want a unified "Get Quote" page, or should each CTA go to a specific product?**

3. **Do you have a portfolio/projects page we should link to?**

4. **Should we add Flexi Discs to the main product grid?**

5. **What's your company founding year?** (for "Trusted Since XXXX")

6. **Do you have any certifications or awards** we should display?

7. **Any special promotions or messages** for the landing page?

8. **What are your EXACT minimums and lead times** for each product? (I used competitive averages)

---

## 📞 READY TO PROVIDE

Once you answer the questions above, I can:

1. Update all placeholder information
2. Add any additional pages/sections
3. Create mockup images if needed
4. Finalize copy with exact specifications
5. Create a complete handoff package

**This landing page is 95% complete and fully integrated with your backend URLs. Just need a few final details from you!**
