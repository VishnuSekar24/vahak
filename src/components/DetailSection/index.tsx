import React from 'react'



interface detailSectionInterface{
    title:string
    children:any,
    handleEdit:any
}




const DetailSection: React.FC<detailSectionInterface> = ({title, children, handleEdit}) => {
    return (
        <>
        <div className="detailSection">

        
        <div className="detailSectionHeader">
            
            <div className="title">{title}</div>
            <div className="edit" onClick={(e)=> handleEdit(e)}>Edit</div>
        </div>
        <div className="detailsSectionBody">{children}</div>
        </div>
        </>
    )
}

export default DetailSection;
