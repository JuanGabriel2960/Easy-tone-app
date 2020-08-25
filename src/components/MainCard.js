import React from 'react'
import {Link} from 'react-router-dom'

const MainCard = ({title,info,img,color}) => {
    return (
        <div className={`cardMain ${color}`}>
            <h2 className='titleCard'>{title}</h2>
            <div className='infoCard'>
                <p className='textInfo'>{info}</p>
                <Link to={title}><img alt='' src={img}/></Link>
            </div>
        </div>
    )
}

export default MainCard
