import "./globals.css";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

export const metadata = {
  title: "TerraScope",
  description: "ByEzeSarru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto max-3xl">
        <div className="mb-[5%]">
          <TopBar />
        </div>
        {children}
        <div className="mt-[15%]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
