// layout.jsx
import localFont from "next/font/local";

const geist = localFont({
  src: [
    {
      path: "../public/fonts/Geist-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Geist-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-geist",
});

export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
