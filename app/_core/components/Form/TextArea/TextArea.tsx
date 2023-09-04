"use client"

import { ChangeEvent } from "react"
import clsx from "clsx"

export const TextArea = (props: {
    value?: string
    defaultValue?: string
    name?: string
    placeholder?: string
    className?: string
    onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void
    rows?: number
}) => {
    return (
        <textarea
            defaultValue={props.defaultValue}
            name={props.name}
            rows={props.rows || 3}
            className={clsx([
                "border-2 border-gray-300 rounded-md p-2",
                props.className,
            ])}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange?.(e.target.value, e)}
        />
    )
}
