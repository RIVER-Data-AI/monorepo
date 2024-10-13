import { type Metadata } from "next";

export const metadata: Metadata = {
  description: "skeleton app",
  title: "river",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
