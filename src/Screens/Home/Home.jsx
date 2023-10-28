import React, { useEffect } from 'react'
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import { cards } from '../../data/cards';
import Grid from "@mui/material/Grid"
import { Paper } from '@mui/material'
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  const [search, setSearch] = useState("");
  const [cardData, setCardData] = useState(null);
  
  useEffect(() => {
    // login status
    handleSearch()
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    const accessToken = params.get('accessToken')
    const uId = params.get('uId')
    if (accessToken) {
      localStorage.setItem('token', accessToken)
      localStorage.setItem('uId', uId)
    }
  }, []);

  // useEffect(() => {
  //   handleSearch()
  // }, [search])
  
  const handleSearch = async () => {
    setCardData(await axios.get(`http://localhost:5000/api/product/search/?query=${search}`))
    console.log(cardData)


  }
  return (
    <div>
      <Navbar />
      <div className='search'>
        <input type="text" placeholder='search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
        <button onClick={handleSearch}> 
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <i class="fa fa-search"></i>
          {/* <img src="search-icon.png" alt="Search" /> */}
        </button>
      </div>
      <Paper sx={{ padding: 10 }}>
        <Grid container justify="center" spacing={4}>
          {
            cardData?.data?.productDetails.map((card) => {
              return (
                <Grid item justify="space-around"  >
                  <Link state = {card} to ='/buyproduct'>
                  <Card name={card.name} content={card.description} image={cards[0].image} price={card.price} />
                  </Link>
                </Grid>
              )
            })
          }
        </Grid>
      </Paper>
      <Footer />
    </div>
  )
}
