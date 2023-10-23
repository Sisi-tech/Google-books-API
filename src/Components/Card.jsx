import React from 'react';

const Card = ({ books }) => { 
    console.log(books);
    return (
        <>
        {
            books.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let title = item.volumeInfo.title;
                let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount; 
                
                if (thumbnail != undefined && price != undefined) {
                    return (
                        <div className='card' key={index}>
                            <img src={thumbnail} alt={title} />
                            <div className='bottom'>
                                <h3 className='title'>{title}</h3>
                                <p className='amount'>${price}</p>
                            </div>
                        </div>
                    )
                }
            })
        }
        </>
    )
}

export default Card; 
