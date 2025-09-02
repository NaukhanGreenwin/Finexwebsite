# Finex Development Website

A modern, professional website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- ✅ **Responsive Design**: Mobile-first design with beautiful UI components
- ✅ **SEO Optimized**: Meta tags, OpenGraph images, JSON-LD structured data, sitemap
- ✅ **Accessibility**: WCAG compliant with proper focus management and screen reader support
- ✅ **Performance**: Optimized images, lazy loading, and efficient animations
- ✅ **Contact Form**: Secure form with validation, rate limiting, and email notifications
- ✅ **Content Management**: Easy-to-edit JSON data files for all content

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file with:
   ```env
   # Email Configuration (for contact form)
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=info@finexdevelopment.com
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://finexdevelopment.com
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Content Management

All content is stored in JSON files in the `/data` directory:

- `services.json` - Service offerings and descriptions
- `highlights.json` - Featured service blocks
- `about.json` - Company information and statistics
- `credo.json` - Company values and principles
- `clients.json` - Client logos and information
- `sponsors.json` - Community sponsorship information
- `contact.json` - Contact information and office details

## Email Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up for a Resend account
2. Add your domain and verify it
3. Get your API key from the dashboard
4. Add `RESEND_API_KEY` to your environment variables
5. Set `CONTACT_EMAIL` to your desired recipient email

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Self-hosted with PM2

## Performance

The website is optimized for excellent Lighthouse scores:

- **Performance**: 95+ (desktop), 90+ (mobile)
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 95+

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

© 2024 Finex Development. All rights reserved.
