import "./globals.css";

export const metadata = {
  title: "Maaz Hussain | Freelance Video Editor",
  description:
    "Maaz Hussain's freelance video editing portfolio — YouTube, short-form content, motion graphics, promos, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
