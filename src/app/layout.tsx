import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SummitNest Realty | Trusted Real Estate Agent in Austin, Texas",
  description:
    "Buy, sell, or invest with SummitNest Realty in Austin, Texas. Explore featured homes, luxury listings, and expert local guidance. Contact us today.",
  keywords:
    "real estate Austin Texas, homes for sale Austin, luxury homes Austin, SummitNest Realty, Jessica Carter realtor",
  openGraph: {
    title: "SummitNest Realty | Trusted Real Estate Agent in Austin, Texas",
    description:
      "Buy, sell, or invest with SummitNest Realty in Austin, Texas.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-cream-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
