import React from 'react'

interface headingProps {
    title :string,
    subTitle:string
}

const Heading: React.FC<headingProps> = ({title, subTitle}) => {
    return (
        <div className="heading">
            <p>{title}</p>
            <p>{subTitle}</p>
        </div>
    )
}

export default Heading;
