import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ books }) => { 
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    return (
        <>
        {
            books.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let title = item.volumeInfo.title;
                let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount; 
                
                if (thumbnail != undefined && price != undefined) {
                    return (
                        <>
                         <div className='card' key={index} onClick={()=>{setShow(true), setItem(item)}}>
                            <img src={thumbnail} alt={title} />
                            <div className='bottom'>
                                <h3 className='title'>{title}</h3>
                                <p className='amount'>${price}</p>
                            </div>
                        </div>
                        <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                        </>
                    )
                }
            })
        }
        </>
    )
}

export default Card; 
