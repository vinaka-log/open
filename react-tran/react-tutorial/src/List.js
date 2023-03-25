import React from "react"

const LANGUAGES = [
    'JavaScript',
    'C++',
    'Java',
    'PHP',
    'Go'
]

export const List = () => {
    return (
        <div>
            {
                LANGUAGES.map((lang, index) => {
                    return <div key={index}> {lang}</div>
                })
            }
        </div >
    )
}