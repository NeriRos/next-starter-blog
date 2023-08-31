import { createContext, useContext } from "react"
import { IUser } from "@/app/(authentication)/lib/interfaces/IUser"

export type UserContextType = {
    user: IUser
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const useUser = () => {
    const { user } = useContext(UserContext)

    return user
}
