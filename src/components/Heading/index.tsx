import React from 'react'

interface headingProps {
    name :string
}

const Heading: React.FC<headingProps> = ({name}) => {
    return (
        <div className="heading">
            <p>{name}</p>
        </div>
    )
}

export default Heading;
