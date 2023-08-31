"use client"

import { ChangeEvent } from "react"

export const TextArea = (props: {
    value: string
    onChange: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void
    rows?: number
}) => {
    return (
        <textarea
            rows={props.rows || 3}
            className={"border-2 border-gray-300 rounded-md p-2"}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value, e)}
        />
    )
}
