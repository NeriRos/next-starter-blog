"use client"

import {ChangeEvent} from "react"

export const Input = (props: {
    value?: string
    name?: string
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
    type?: string
}) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(event.target.value, event)
        }
    }

    return (
        <input
            name={props.name}
            type={props.type || "text"}
            className={"border-2 border-gray-300 rounded-md p-2"}
            value={props.value}
            onChange={onChange}
        />
    )
}
