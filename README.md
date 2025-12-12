# StyxPay

StyxPay is a privacy-first onchain neobank with authorization-based security. This is the official landing page built with Next.js.

## Features

- **Authorization-Based Security**: Pull model instead of push, preventing wallet drains
- **Spend Anywhere**: Virtual cards accepted at 40M+ merchants worldwide
- **Instant Settlement**: Transfers within seconds
- **Zero-Knowledge Privacy**: ZK-proof encrypted transactions
- **Programmable Money**: Define spending rules directly in code

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd styxpay
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
styxpay/
├── app/
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles and animations
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Fonts

The project uses two Google Fonts:
- **Inter**: Main body font
- **Space Grotesk**: Display/heading font

These are configured in `app/layout.tsx` and can be changed to other Google Fonts or custom fonts.

### Colors

The color scheme is primarily dark with indigo/purple accents. Key colors:
- Background: `#030303`
- Primary accent: Indigo-500 / Purple-600
- Glass cards: `rgba(255, 255, 255, 0.02)`

## Deployment

### Vercel (Recommended)

Deploy your Next.js app easily with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live at `https://your-project.vercel.app`

### Other Platforms

The app can also be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted with Node.js

## License

All rights reserved © 2023 StyxPay Inc.

## Support

For issues and questions, please open an issue in the repository.
