import "./globals.css";

export const metadata = {
  title: "PulseBoard",
  description: "Team standup status feed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
