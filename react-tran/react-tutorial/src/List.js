import React from "react"

const LANGUAGE = [
    'JavaScript',
    'C++',
    'Ruby',
    'Java',
    'PHP'
]

export class List extends React.Component {
    render() {
        return (
            <div>
                {
                    LANGUAGE.map((lang, index) => {
                        return <div key={index}>{lang}</div>
                    })}
            </div>
        )
    }
}