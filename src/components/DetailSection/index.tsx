import React from 'react'



interface detailSectionInterface{
    title:string
    children:any,
    handleEdit:any,
    isEdit:boolean
}




const DetailSection: React.FC<detailSectionInterface> = ({title, children, handleEdit, isEdit}) => {
    return (
        <>
        <div className="detailSection">

        
        <div className="detailSectionHeader">
            
            <div className="title">{title}</div>
            {isEdit && <div className="edit" onClick={(e)=> handleEdit(e)}>Edit</div>}
        </div>
        <div className="detailsSectionBody">{children}</div>
        </div>
        </>
    )
}

export default DetailSection;
