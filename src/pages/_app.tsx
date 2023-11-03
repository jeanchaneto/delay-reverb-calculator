import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Footer from "../components/Footer";
import Script from "next/script";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      {isProduction && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          ></Script>
          <Script strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
          </Script>
        </>
      )}
      <div className={`${lato.variable} font-sans relative`}>
        <main className="bg-background dark text-foreground-500 relative">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
