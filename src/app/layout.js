import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

export const metadata = {
  title: "SkillSphere",
  description: "Prioritise yourself",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
