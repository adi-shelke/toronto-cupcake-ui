import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "../components/Wrapper.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toronot CupCake Store",
  description:
    "Toronto Cupcake: Sweetening the Six with Every Bite!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
