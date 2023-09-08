import React, { ReactNode } from "react"
import Styles from "./Card.module.css"
import clsx from "clsx"

export const Card = (props: {
    title: string
    description: string
    children?: ReactNode
    actions?: ReactNode[]
    style?: React.CSSProperties
    className?: string
}) => {
    return (
        <div className={clsx([Styles.card, props.style, props.className])}>
            <div>
                {props.title ? <h3>{props.title}</h3> : null}
                {props.description ? <p>{props.description}</p> : null}
            </div>
            <div>{props.children}</div>
            {props.actions ? (
                <div className={Styles.actions}>{props.actions}</div>
            ) : null}
        </div>
    )
}
