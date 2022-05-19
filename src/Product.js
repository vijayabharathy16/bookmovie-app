import React from "react";
function Product(props) {
    return (
        <div className='col-lg-3 mb-3'>
            <div className='card' style={{ width: '18rem' }}>
                <img src='https://static.moviecrow.com/marquee/movies-in-april-2022-how-theyve-fared--where-to-watch/196508_thumb_665.jpg' className='card-img-top'></img>
                <div className='card-body'>
                    <h5 className='card-tittle'>{props.data.pName}</h5>
                    {
                        props.data.stock==true?<span>TicketAvailable</span> : <span>Housefull</span>
                    }
                    <p className='card-text'>Price : {props.data.pPrice}</p>
                    <button disabled={!props.data.stock} onClick={()=> props.sp(props.data)} className='btn btn-primary'>Ticket</button>
                </div>
            </div>
        </div>

    )
}

export default Product;