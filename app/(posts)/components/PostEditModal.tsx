"use client"

import { Button } from "@/components/Button"
import axios from "axios"
import { useState } from "react"
import { Post } from "@/app/(posts)/lib/models/Post"
import { Modal } from "@/components/Modal/Modal"
import { Input } from "@/components/Form/Input/Input"
import { TextArea } from "@/components/Form/TextArea"
import { IPost } from "@/app/(posts)/lib/interfaces/IPost"

export const PostEditModal = (props: {
    post: IPost
    isEditing: boolean
    onClose: () => void
}) => {
    const [title, setTitle] = useState(props.post.title)
    const [content, setContent] = useState(props.post.content)
    const [loading, setLoading] = useState(false)

    const editPost = async () => {
        setLoading(true)

        try {
            await axios.patch(`/posts/${props.post.id}`, {
                title,
                content,
            })
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal
            isOpen={props.isEditing}
            onClose={props.onClose}>
            <div className="flex flex-col space-y-2 p-3">
                <Input
                    type="text"
                    value={title}
                    onChange={(value) => setTitle(value)}
                />
                <TextArea
                    value={content}
                    onChange={(value) => setContent(value)}
                    rows={5}
                />
                <Button
                    loading={loading}
                    onClick={editPost}
                    type="ghost"
                    className={"text-3xl text-black"}>
                    Save
                </Button>
            </div>
        </Modal>
    )
}
