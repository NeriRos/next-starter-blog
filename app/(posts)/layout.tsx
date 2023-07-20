import "@/styles/globals.css"
import {Metadata} from "next"
import {Inter} from "next/font/google"
import {Toaster} from "react-hot-toast"
import React, {Suspense} from "react"
import AuthStatus from "@/app/(authentication)/components/AuthStatus"
import {Providers} from "@/app/Providers";
import {METADATA} from "@/app/(posts)/consts";
import {Header} from "@/components/Layout/Header";
import Styles from "@/components/Layout/Layout.module.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})


export const metadata: Metadata = {
    title: METADATA.title,
    description: METADATA.description,
    twitter: {
        card: "summary_large_image",
        title: METADATA.title,
        description: METADATA.description,
    },
    metadataBase: new URL(METADATA.base),
    themeColor: METADATA.themeColor,
}
export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
        <body className={inter.variable}
              suppressHydrationWarning={true}>
        <Providers>
            <Toaster/>
            <Header/>
            <Suspense fallback="Loading...">
                <AuthStatus/>
            </Suspense>
            <main className={Styles.main}>
                {children}
            </main>
        </Providers>
        </body>
        </html>
    )
}