import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "DishDash",
    description: "Use your left over produce to craft easy and delicious meals",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="{inter.className} bg-cover bg-no-repeat" >{children}</body>
        </html>
    );
}
