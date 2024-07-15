import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ApolloProviderWrapper from "@/components/ApolloProvider";

export const metadata: Metadata = {
  title: "Chatbot AI",
  description: "A customised AI Chatbot app created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProviderWrapper>
      <ClerkProvider>
        <html lang="en">
          <body className="flex min-h-screen">{children}</body>
        </html>
      </ClerkProvider>
    </ApolloProviderWrapper>
  );
}
