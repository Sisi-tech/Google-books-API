import React, { useState } from 'react'
import bookImg from '../assets/bookCoffee.jpg';
import Card from './Card';
import axios from 'axios';

const Books = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchBook = (e) => {
        if (e.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyD-3SFw2xjldGvckv7-a73r_la2dA_vB90&maxResults=40`)
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
        <>
        <div className='header'>
            <div className='row1'>
                <h1>A room without books is like<br/> a body without a soul.</h1>
            </div>
            <div className='row2'>
                <h2>Find Your Book</h2>
                <div className='search'>
                    <input 
                        type='text' 
                        placeholder='Enter Your Book Name'
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        onKeyDown={searchBook} />
                    <button className='search-btn'>Search</button>
                </div>
                <img src={bookImg} alt='book-Img' className='bookCoffee'/>
            </div>
        </div>
        <div className='container'>
            {
                 <Card books={bookData} />
            }
        </div>
        </>
    )
}

export default Books; 