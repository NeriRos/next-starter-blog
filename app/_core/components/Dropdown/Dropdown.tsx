"use client";


import {ChangeEvent} from "react";

export type DropdownProps = {
    options: { value: string, label: string }[],
    onChange: (value: string) => void,
    value?: string
}

export const Dropdown = (props: DropdownProps) => {
    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value);
    }

    return <select value={props.value} onChange={onSelectChange}>
        {props.options.map((option) => <option value={option.value}>{option.label}</option>)}
    </select>
}