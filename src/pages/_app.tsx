import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Footer from "./components/Footer";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className={`${lato.variable} font-sans relative`}>
        <main className="bg-background dark text-foreground-500 relative">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
