import "./globals.css";

export const metadata = {
  title: "TerraScope",
  description: "ByEzeSarru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
