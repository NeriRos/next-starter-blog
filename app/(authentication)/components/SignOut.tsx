"use client"
import {signOut, useSession} from "next-auth/react"
import {TEXTS} from "@/app/(authentication)/components/consts"
import {useEffect} from "react";
import {redirect} from "next/navigation";

export default function SignOut() {
    const session = useSession();

    useEffect(() => {
        if (!session)
            redirect("/");
    }, [session])

    return (
        <button
            className="text-stone-400 hover:text-stone-200 transition-all"
            onClick={() => signOut({callbackUrl: "/"})}
        >
            {TEXTS.signOut}
        </button>
    )
}
