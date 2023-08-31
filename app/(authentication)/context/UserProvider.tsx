"use client"

import { UserContext } from "@/app/(authentication)/context/UserContext"
import { useSession } from "next-auth/react"
import { ReactNode, useEffect, useState } from "react"
import { LoadingDots } from "@/components/LoadingDots"
import { IUser } from "@/app/(authentication)/lib/interfaces/IUser"

export const UserProvider = (props: { children: ReactNode }) => {
    const { data } = useSession()

    const [user, setUser] = useState<IUser>()

    // useEffect(() => {
    //     if (!data?.user) return
    //
    //     setUser({})
    // }, [data?.user])

    if (!user) {
        return <LoadingDots />
    }

    return (
        <UserContext.Provider value={{ user }}>
            {props.children}
        </UserContext.Provider>
    )
}
