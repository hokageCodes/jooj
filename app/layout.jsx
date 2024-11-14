/* eslint-disable @next/next/no-page-custom-font */
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata = {
  title: "AI Agent Liability Insurance | Protect Your AI Agents with Rareblocks",
  description: "Protect your AI Agents with tailored liability insurance. From tech errors to omission coverage, we've got you covered at Rareblocks.",
  keywords: [
    "AI agent liability insurance",
    "tech errors and omissions insurance",
    "AI agent performance evaluation",
    "AI liability coverage",
    "insurance for AI",
    "AI agent risks",
  ].join(", "),
  openGraph: {
    title: "AI Agent Liability Insurance | Protect Your AI Agents with Rareblocks",
    description: "Give your AI agents the confidence they deserve with liability and errors & omissions insurance. Free evaluation for your AI Agent’s performance and accuracy.",
    url: "https://jooj.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/F8dVwxp/image-19.webp",
        width: 1200,
        height: 630,
        alt: "AI Agent Liability Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "AI Agent Liability Insurance | Protect Your AI Agents with Rareblocks",
    description: "Protect your AI agents with tech errors & omissions insurance. Get a free evaluation and custom liability report.",
    image: "https://i.ibb.co/F8dVwxp/image-19.webp",  // Replace with your image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Font and Favicon */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
