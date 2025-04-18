import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { ContextProvider } from "@/context/userProvider";
import { DataProvider } from "@/context/dataProvider";

export const metadata: Metadata = {
  title: "Gainz Journal",
  description: "A journal for your fitness journey",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-background via-60% to-button select-none`}
      >
        <ContextProvider>
          <DataProvider>
            <header className="z-50">
              <NavBar />
            </header>
            <div className="z-10">{children}</div>
          </DataProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
