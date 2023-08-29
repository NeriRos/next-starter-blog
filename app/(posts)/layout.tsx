import {Metadata} from "next"
import React from "react"
import {METADATA} from "@/app/(posts)/consts";
import {Header} from "@/components/Layout";
import {getServerSession} from "next-auth";
import {FloatingQuickActions} from "@/app/(posts)/components/FloatingQuickActions";
import {CreatePostButton} from "@/app/(posts)/components/CreatePostButton";

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
    const session = await getServerSession()

    return <>
        <Header/>
        {children}
        {session ? <FloatingQuickActions>
            <CreatePostButton/>
        </FloatingQuickActions> : null}
    </>
}
