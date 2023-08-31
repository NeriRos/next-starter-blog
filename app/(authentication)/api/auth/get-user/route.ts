import { getServerSession } from "next-auth"
import prisma from "@/lib/prisma"

type ContextWithParams = {
    params: {
        email: string
    }
}
export const GET = async (req: Request, ctx: ContextWithParams) => {
    const session = await getServerSession()

    if (session && session.user?.email === ctx.params.email) {
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        })

        return {
            status: 200,
            body: user,
        }
    }
}
