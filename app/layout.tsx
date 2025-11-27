import type { Metadata } from "next";
import { Bricolage_Grotesque, Jersey_10 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const jersey = Jersey_10({
  weight: "400",
  variable: "--font-jersey",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Styled Github Graph",
  description:
    "A server-ready Typescript / React component to display your GitHub activity with a sleek, customizable design!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ToastContainer />
      <html lang="en">
        <body
          className={`${jersey.variable} ${bricolage.variable} antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
