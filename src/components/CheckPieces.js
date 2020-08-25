import React from 'react'
import check1 from '../images/check.png'
import check2 from '../images/check2.png'

const CheckPieces = ({piece}) => {

    const handleCheck = (e)=>{
        if(e.target.src===check2){
            e.target.src=check1
            e.target.nextElementSibling.classList.add('sub')
        }else if(e.target.src===check1){
            e.target.src=check2
            e.target.nextElementSibling.classList.remove('sub')
        }
    }

    return (
        <div className='checkPieces'>
            <img onClick={handleCheck} alt='' src={check2}/>
            <h4>{piece}</h4>
        </div>
    )
}

export default CheckPieces
