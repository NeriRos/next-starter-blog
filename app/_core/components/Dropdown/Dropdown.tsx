export type DropdownProps = {
    options: { value: string, label: string }[],
    onChange: (value: string) => void,
    value: string
}

export const Dropdown = (props: DropdownProps) => {
    return <select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
        {props.options.map((option) => <option value={option.value}>{option.label}</option>)}
    </select>
}