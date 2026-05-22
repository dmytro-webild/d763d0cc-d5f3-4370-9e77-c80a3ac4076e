import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Nipo Sushi | Premium Sushi Dining',
  description: 'Experience authentic, hand-crafted sushi at Nipo Sushi. Featuring fresh ingredients and modern fusion rolls in an elegant atmosphere.',
  openGraph: {
    "title": "Nipo Sushi | Premium Sushi Dining",
    "description": "Experience authentic, hand-crafted sushi at Nipo Sushi.",
    "siteName": "Nipo Sushi",
    "type": "website"
  },
};

const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
