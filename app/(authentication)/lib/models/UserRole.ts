export const USER_ROLES = {
    admin: "ADMIN",
    user: "USER",
    guest: "GUEST",
    banned: "BANNED",
}

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]
