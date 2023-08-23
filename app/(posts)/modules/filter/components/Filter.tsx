"use client"

import {Dropdown} from "@/components/Dropdown";

export const Filter = () => {
    const onFilterChange = (value: string) => {
        console.log(value)
    }

    return <Dropdown onChange={onFilterChange} options={[
        {value: "all", label: "All"},
        {value: "active", label: "Active"},
        {value: "completed", label: "Completed"}
    ]}/>
}