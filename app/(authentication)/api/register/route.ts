import { NextResponse } from "next/server"
import { createAuthenticationService } from "@/app/(authentication)/lib/services/AuthenticationService"
import { createUsersDbRepository } from "@/app/(authentication)/lib/repositories/UsersDbRepository"
import { UserAlreadyExists } from "@/app/(authentication)/lib/errors/UserAlreadyExists"
import { RegisterArgs } from "@/app/(authentication)/lib/types/AuthenticationTypes"

const authenticationService = createAuthenticationService({
    dbRepository: createUsersDbRepository(),
})

export async function POST(req: Request) {
    const registerData: RegisterArgs = await req.json()

    try {
        const user = await authenticationService.register(registerData)

        return NextResponse.json(user)
    } catch (e) {
        if (e instanceof UserAlreadyExists) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            )
        }

        console.error(e)

        return NextResponse.json({ error: "Unhandled error" }, { status: 500 })
    }
}
