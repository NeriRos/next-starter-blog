import React from 'react';
import Styles from './Header.module.css';
import Link from "next/link";
import clsx from "clsx";
import {useRouter} from "next/router";
import {LINKS} from "@/components/Layout/Header/consts";

export const Header = (props: { className?: string }) => {
    const router = useRouter();

    return <div className={clsx([Styles.header, props.className])}>
        <nav className={Styles.menu}>
            {LINKS.map((link) =>
                <Link className={clsx([Styles.link, router.pathname === link.href && Styles.active])} href={link.href}
                      key={link.href}>{link.label}</Link>
            )}
        </nav>
    </div>;
}