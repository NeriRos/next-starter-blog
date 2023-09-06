import { Post } from "@/app/(posts)/lib/models/Post"
import { Card } from "@/components/Card"
import { DeletePostButton } from "@/app/(posts)/components/DeletePostButton"
import { EditPostButtonWithModal } from "@/app/(posts)/components/EditPostButtonWithModal"
import { getServerSession } from "next-auth"
import { usersService } from "@/app/(authentication)/lib/services/UsersService"
import { USER_ROLES } from "@/app/(authentication)/lib/models/UserRole"
import { PostComments } from "@/app/(posts)/(modules)/comments/components/PostComments"
import { CreateCommentForm } from "@/app/(posts)/(modules)/comments/components/CreateCommentForm"
import { PostEditForm } from "@/app/(posts)/components/PostEditForm"
import { categoriesService } from "@/app/(posts)/(modules)/categories/lib/services/CategoriesService"

export const PostFeedItem = async ({ post }: { post: Post }) => {
    const session = await getServerSession()

    if (!session?.user) return null
    const user = await usersService.getUserByEmail(session.user.email!)
    if (!user) return null

    const category = await categoriesService.getCategory(post.categoryId)

    return (
        <Card
            className={"w-full max-w-lg"}
            title={post.title}
            description={post.content}
            actions={
                user.role === USER_ROLES.admin
                    ? [
                          <DeletePostButton
                              key={"delete"}
                              postId={post.id}
                          />,
                          <EditPostButtonWithModal
                              key={"edit"}
                              post={{
                                  ...post,
                              }}>
                              <PostEditForm post={post} />
                          </EditPostButtonWithModal>,
                      ]
                    : []
            }>
            <span className="absolute top-4 right-4">{category?.name}</span>
            <hr className="mt-4" />
            <PostComments post={post} />
            <div className="flex flex-col justify-center mt-4">
                <CreateCommentForm post={post} />
            </div>
        </Card>
    )
}
