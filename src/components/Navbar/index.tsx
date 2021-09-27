import React from 'react'

interface navbarProps {
    brandName :string
}

const Navbar: React.FC<navbarProps> = ({brandName}) => {
    return (
        <nav>
            <img className="logo" src="" alt=""/> {brandName}
        </nav>
    )
}

export default Navbar;
