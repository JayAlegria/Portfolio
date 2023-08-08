import React, { FC, ReactNode, } from "react"

interface Details {
    position: string,
    year: string,
    company?: string,
}
interface Props {
    details: Details,
    children: ReactNode
}

export const Experience: FC<Props> = ({ details, children }) => {
    return (
        <div className="resume__group mb-5">
            <div className="resume__content ps-5">
                <p className="title mb-2 h3">{details.position}</p>
                <span className="company d-block">{details.company}</span>
                <span className="year">{details.year}</span>
                {children}
            </div>
        </div>
    )
}
