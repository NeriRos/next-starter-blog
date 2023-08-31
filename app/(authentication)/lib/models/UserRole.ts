export const USER_ROLES = {
    admin: "admin",
    user: "user",
    guest: "guest",
    banned: "banned",
}

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]
