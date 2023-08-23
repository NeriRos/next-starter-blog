import {Metadata} from "next"
import React from "react"
import {METADATA} from "@/app/(posts)/consts";

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
export default async function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return <>{children}</>
}
