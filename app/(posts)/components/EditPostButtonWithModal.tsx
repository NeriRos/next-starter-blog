"use client"

import { Button } from "@/components/Button"
import { ReactNode, useState } from "react"
import { IPost } from "@/app/(posts)/lib/interfaces/IPost"
import { Modal } from "@/components/Modal/Modal"

export const EditPostButtonWithModal = (props: {
    post: IPost
    children: ReactNode
}) => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div>
            <Button
                onClick={() => setIsEditing(true)}
                type="ghost"
                className={"text-3xl text-black"}>
                Edit
            </Button>

            <Modal
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}>
                {props.children}
            </Modal>
        </div>
    )
}
