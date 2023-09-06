import { Button } from "@/components/Button"
import { ICategory } from "@/app/(posts)/(modules)/categories/lib/interfaces/ICategory"
import { revalidatePath } from "next/cache"
import clsx from "clsx"
import { Input } from "@/components/Form/Input"
import { categoriesService } from "@/app/(posts)/(modules)/categories/lib/services/CategoriesService"

type CreateCategoryButtonProps = {
    className?: string
}

export const CreateCategoryForm = async (props: CreateCategoryButtonProps) => {
    async function createCategory(formData: FormData) {
        "use server"
        const name = formData.get("name") as string

        if (!name) {
            // TODO: show error
            console.log("no name", name)
            return
        }

        const newCategory: ICategory = {
            name,
        }

        await categoriesService.createCategory(newCategory)

        revalidatePath("/categories")
    }

    return (
        <form
            action={createCategory}
            className={clsx(["flex flex-col space-y-2", props.className])}>
            <Input
                name="name"
                className="w-full"
                placeholder={"Category on the post"}
            />
            <Button
                type="ghost"
                className={"text-3xl text-black"}>
                Create Category
            </Button>
        </form>
    )
}
