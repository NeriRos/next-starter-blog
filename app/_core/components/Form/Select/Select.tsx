"use client"

import clsx from "clsx"
import { useMemo } from "react"

export const Select = (props: {
    name: string
    className?: string
    defaultValue?: string | number
    options: { label: string; value: string | number | undefined }[]
}) => {
    const selectedOption = useMemo(() => {
        return props.options.find(
            (option) => option.value === props.defaultValue
        )
    }, [props.defaultValue, props.options])

    return (
        <>
            <select
                name={props.name}
                defaultValue={selectedOption?.value}
                className={clsx([
                    props.className,
                    "w-full",
                    "border-2",
                    "border-gray-300",
                    "rounded-md",
                    "focus:outline-none",
                    "focus:ring-2",
                    "focus:ring-blue-400",
                    "focus:border-transparent",
                    "p-2",
                ])}>
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    )
}
