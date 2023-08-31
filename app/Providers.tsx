"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import axios from "axios"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"
import { UserProvider } from "@/app/(authentication)/context/UserProvider"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

type ProvidersProps = {
    children: React.ReactNode
    session: Session | null
}

export const Providers = ({ children, session }: ProvidersProps) => {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                <UserProvider>{children}</UserProvider>
            </QueryClientProvider>
        </SessionProvider>
    )
}
