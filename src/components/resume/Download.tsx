import React from 'react'
import resume from "./JayLurenceAlegria-Ai-Automation-Specialist.pdf"
export const Download = () => {
    return (
        <a href={resume} className='ms-2' target='_blank'>
            <i className="bi mb-0 bi-download text-white fs-2"></i>
        </a>
    )
}
