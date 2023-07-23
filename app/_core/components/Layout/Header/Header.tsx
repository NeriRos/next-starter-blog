import React from 'react';
import Styles from './Header.module.css';
import Link from "next/link";
import clsx from "clsx";
import {LINKS} from "@/components/Layout/Header/consts";

export const Header = (props: { className?: string }) => {
    const pathname = "test"
    console.log(props)

    return <div className={clsx([Styles.header, props.className])}>
        <nav className={Styles.menu}>
            {LINKS.map((link) =>
                <Link className={clsx([Styles.link, pathname === link.href && Styles.active])} href={link.href}
                      key={link.href}>{link.label}</Link>
            )}
        </nav>
    </div>;
}