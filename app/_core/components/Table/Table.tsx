import React, { ReactNode } from "react"
import Styles from "./Table.module.css"
import clsx from "clsx"
import { TEXTS } from "@/components/Table/consts"

export type TableProps = {
    className?: string
    rows: ReactNode[]
    isLoading?: boolean
    headers: { props?: any; content: ReactNode }[]
    pagination?: ReactNode
}

export const Table = (props: TableProps) => {
    const columnsCount = props.headers.length

    return (
        <div className={Styles.tableContainer}>
            <table className={clsx([Styles.table, props.className])}>
                <thead>
                    <tr>
                        {props.headers.map((header, index) => (
                            <th
                                key={index}
                                {...header.props}>
                                {header.content}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {!props.isLoading ? (
                        props.rows
                    ) : (
                        <tr>
                            <td colSpan={columnsCount}>{TEXTS.loading}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={columnsCount}>
                            <div className={Styles.pagination}>
                                {props.pagination}
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
