"use client"

import { useSession } from "next-auth/react"
import { ReactNode, useEffect, useState } from "react"
import { IUser } from "@/app/(authentication)/lib/interfaces/IUser"
import axios from "axios"
import { LoadingDots } from "@/components/LoadingDots"

export const UserProvider = (props: { children: ReactNode }) => {
    const { data } = useSession()

    const [user, setUser] = useState<IUser>()

    const getUser = async () => {
        if (!data?.user) return

        const res = await axios.get(`/api/get-user?email=${data.user.email}`)
        console.log(res)
        setUser(res.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    if (!user) {
        return <LoadingDots />
    }

    return (
        <>
            {/*<UserContext.Provider value={{ user }}>*/}
            {props.children}
            {/*</UserContext.Provider>*/}
        </>
    )
}
