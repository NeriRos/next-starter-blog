"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const Providers = ({children}: { children: React.ReactNode }) => {
    const [queryClient] = React.useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}