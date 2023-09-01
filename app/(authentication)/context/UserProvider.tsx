"use client"

import { useSession } from "next-auth/react"
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import axios from "axios"
import { LoadingDotsOverlay } from "@/components/LoadingDots"
import { useRouter } from "next/navigation"
import { UserContext } from "@/app/(authentication)/context/UserContext"
import { IUser } from "@/app/(authentication)/lib/interfaces/IUser"
import { USER_ROLES } from "@/app/(authentication)/lib/models/UserRole"

export const UserProvider = (props: { children: ReactNode }) => {
    const { data } = useSession()

    const [user, setUser] = useState<IUser>()
    const router = useRouter()

    const getUser = useCallback(async () => {
        if (!data?.user) return

        const res = await axios.get(`/auth/get-user?email=${data.user.email}`)

        if (res.data === null) return router.push("/auth/register")

        setUser(res.data)
    }, [data?.user, router])

    useEffect(() => {
        getUser()
    }, [getUser])

    const isAdmin = useMemo(() => user?.role === USER_ROLES.admin, [user?.role])
    const isUser = useMemo(() => user?.role === USER_ROLES.user, [user?.role])
    const isGuest = useMemo(() => user?.role === USER_ROLES.guest, [user?.role])

    if (!user) {
        return <LoadingDotsOverlay />
    }

    return (
        <>
            <UserContext.Provider
                value={{
                    user,
                    isAdmin,
                    isUser,
                    isGuest,
                }}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}
