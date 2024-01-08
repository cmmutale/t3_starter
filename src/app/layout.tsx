import "@/styles/globals.css";
import UserSession from "@/components/UserSession";
import { Toaster } from '@/components/ui/toaster';

import { Rubik } from "next/font/google";

// const inter = Inter({
//     subsets: ["latin"],
//     variable: "--font-sans",
// });

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-sans",
})
export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${rubik.variable}`}>
                <UserSession>
                    {children}
                    <Toaster />
                </UserSession>
            </body>
        </html>
    );
}
