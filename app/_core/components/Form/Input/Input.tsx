"use client"

import { ChangeEvent } from "react"

export const Input = (props: {
    value: string
    onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void
    type?: string
}) => {
    return (
        <input
            type={props.type || "text"}
            className={"border-2 border-gray-300 rounded-md p-2"}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value, e)}
        />
    )
}
