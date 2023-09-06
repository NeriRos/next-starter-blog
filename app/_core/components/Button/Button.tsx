"use client"

import { ReactNode } from "react"
import clsx from "clsx"
import { LoadingDots } from "@/components/LoadingDots"

type ButtonProps = {
    loading?: boolean
    children: ReactNode | ReactNode[]
    type?: "primary" | "ghost"
    className?: string
    onClick?: () => void
}

export const Button = ({
    loading,
    children,
    type,
    className,
    onClick,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className={clsx([
                className,
                loading && "cursor-not-allowed border-gray-200 bg-gray-100",
                "flex h-10 px-1 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none",
                type === "primary" &&
                    "border-black bg-black text-white hover:bg-white hover:text-black",
                type === "ghost" &&
                    "border-transparent bg-transparent text-black hover:bg-black hover:text-white",
            ])}>
            {loading ? <LoadingDots color="#808080" /> : children}
        </button>
    )
}
