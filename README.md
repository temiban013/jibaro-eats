# Jibaro Media - Photography & Video Portfolio

A professional photography and video portfolio website built with Next.js, Tailwind CSS, and Cloudinary integration.

![Jibaro Media Portfolio](https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg)

## 📋 Overview

Jibaro Media Group is a full-service advertising and production agency specializing in photography, videography, graphic design, and web development. This portfolio website showcases various categories of work including:

- Food photography (Jibaro Eats)
- Event photography
- Music videos
- Short videos
- Films
- Commercial productions
- Street photography
- Nature photography
- Fashion photography
- Portraits
- Sports photography
- And more...

The website features a responsive design with image galleries, video integration from YouTube, and contact forms.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Image Galleries**: Categorized showcase of photography work
- **Video Integration**: YouTube video embedding for film and video portfolios
- **Cloudinary Integration**: Cloud-based image storage and optimization
- **Interactive Image Carousel**: For viewing full-size images with navigation
- **Contact Form**: Self-contained contact solution with reCAPTCHA integration
- **SEO Optimization**: Metadata tags for better search engine visibility
- **Accessible Navigation**: User-friendly menu system across the site
- **Dark Mode Support**: Automatic theme detection based on user preferences

## 🛠️ Technologies Used

- **Frontend**: Next.js 14 (App Router), React 18
- **Styling**: Tailwind CSS
- **Image Hosting**: Cloudinary
- **Video Hosting**: YouTube
- **TypeScript**: For type safety and better development experience
- **Framer Motion**: For smooth animations and transitions
- **Sharp**: For image optimization
- **React Swipeable**: For touch interactions on image carousels

## 📂 Project Structure

```
src/
├── app/                   # Next.js App Router pages
│   ├── about/             # About page
│   ├── contactus/         # Contact form page
│   ├── works/             # Portfolio categories
│   │   ├── jibaro-animals/
│   │   ├── jibaro-eats/
│   │   ├── jibaro-events/
│   │   ├── jibaro-fashion/
│   │   ├── jibaro-films/
│   │   ├── [other categories]...
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage component
├── components/            # Reusable React components
│   ├── ContactForm.tsx    # Contact form component
│   ├── HomePage.tsx       # Home page layout component
│   ├── JibaroCard.tsx     # Card component for portfolio items
│   ├── Navigation.tsx     # Navigation menu component
│   ├── PhotoCarousel.tsx  # Image carousel component
│   ├── VideoPage.tsx      # Video gallery component
│   ├── WorksPage.tsx      # Works portfolio component
├── utils/                 # Utility functions
│   ├── animationVariants.ts   # Animation configurations
│   ├── cachedImages.ts        # Image caching logic
│   ├── cloudinary.ts          # Cloudinary configuration
│   ├── generateBlurPlaceholder.ts # Image blur placeholder generator
│   ├── getCloudImages.ts      # Cloudinary image fetching
│   ├── range.ts               # Utility function for ranges
│   ├── types.ts               # TypeScript type definitions
```

## 🔧 Setup and Installation

### Prerequisites

- Node.js (v18 or later)
- pnpm package manager
- Cloudinary account
- Windows 11 with PowerShell

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation Steps

1. Clone the repository

   ```powershell
   git clone https://github.com/yourusername/jibaro-media.git
   cd jibaro-media
   ```

2. Install dependencies using pnpm

   ```powershell
   pnpm install
   ```

3. Run the development server

   ```powershell
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Development Guidelines

### Code Style

- Use functional components with hooks instead of class components
- Follow event-driven programming patterns
- Keep components small and focused on a single responsibility
- Use TypeScript types for all props and state

### Working with Images

Images are stored in Cloudinary and organized into folders by category. The `getCloudImages` utility function fetches images from the specified folder.

### Adding New Content Categories

1. Create a new folder in `src/app/works/` with the category name
2. Create a `page.tsx` file following the existing pattern
3. Update the Cloudinary folder structure to match

### Implementing reCAPTCHA for Contact Form

To add reCAPTCHA to the contact form:

1. Register your site on [Google reCAPTCHA](https://www.google.com/recaptcha)
2. Install the reCAPTCHA package:
   ```powershell
   pnpm add react-google-recaptcha
   ```
3. Add your reCAPTCHA site key to `.env.local`:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   ```
4. Implement the reCAPTCHA component in the ContactForm component

## 🚢 Deployment

### Build for Production

```powershell
pnpm build
```

### Deploy to Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import the project to Vercel
3. Add the environment variables
4. Deploy

## 🤝 Contributing

1. Create a feature branch from main
2. Make your changes
3. Run tests to ensure everything works
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For any questions or feedback, please reach out:

- Phone: (787) 932-0884
- Email: jibaromg@gmail.com

---

Created with ❤️ using Next.js and React
