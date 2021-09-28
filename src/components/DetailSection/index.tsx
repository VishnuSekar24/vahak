import React from 'react'
import edit from "../../assets/icons/edit.png";



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
            {isEdit && <div className="edit" onClick={(e)=> handleEdit(e)}><img src={edit} alt="edit"/>Edit</div>}
        </div>
        <div className="detailsSectionBody">{children}</div>
        </div>
        </>
    )
}

export default DetailSection;
