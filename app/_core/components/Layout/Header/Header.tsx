import React from "react"
import Styles from "./Header.module.css"
import Link from "next/link"
import clsx from "clsx"
import { LINKS } from "@/components/Layout/Header/consts"
import SignOut from "@/app/(authentication)/components/SignOut"

export const Header = () => {
    const pathname = "disabled"

    return (
        <div className={Styles.header}>
            <nav className={Styles.menu}>
                {LINKS.map((link) => (
                    <Link
                        className={clsx([
                            Styles.link,
                            pathname === link.href && Styles.active,
                        ])}
                        href={link.href}
                        key={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div>
                <SignOut />
            </div>
        </div>
    )
}
