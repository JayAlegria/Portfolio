import React from 'react'
import resume from "./JayAlegriaResume.pdf"
export const Download = () => {
    return (
        <a href={resume} target='_blank'>
            <i className="bi mb-0 bi-download text-white"></i>
        </a>
    )
}
