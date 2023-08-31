import {getServerSession} from "next-auth"
import { TEXTS } from "@/app/(authentication)/components/consts"

export default async function AuthStatus() {
    const session = await getServerSession()

    return <p className="text-stone-200 text-sm">
        {session ? `${TEXTS.signedInAs} ${session.user?.email}` : "Not signed in"}
    </p>
}
