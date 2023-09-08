import {FaTrash} from "react-icons/fa";
import {IconButton, IconProps} from "@/components/Icons/IconButton";

export const DeleteIcon = (props: IconProps) => (
    <IconButton  {...props}>
        <FaTrash/>
    </IconButton>
);