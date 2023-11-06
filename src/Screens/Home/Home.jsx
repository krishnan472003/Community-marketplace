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
  const [subCat, setSubCat] = useState("");
  const [Cat, setCat] = useState("");
  const [cardData, setCardData] = useState(null);
  
  useEffect(() => {
    // login status
    handleSearch()
    handleFilter()
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
    // handleSearch()
  // }, [search])
  
  const handleSearch = async () => {
    setCardData(await axios.get(`http://localhost:5000/api/product/search/?query=${search}`))
    console.log(cardData)


  }

  const handleFilter = async () => {
      console.log(subCat)
      console.log(Cat)
      setCardData(await axios.get(`http://localhost:5000/api/product/filter/?category=${Cat}&subCategory=${subCat}`));
      console.log(cardData)
  };
  return (
    <div>
      <Navbar />
      <div className="search">
          <input type="text" placeholder="What product are you looking for?" value={search} onChange={(e) => { setSearch(e.target.value) }}/>
          <button type="submit" className="searchButton" onClick={handleSearch}>
            <i className="fa fa-search"></i>
        </button>
      </div>

      <div className='navbar1'>
      <div className='dropdown'>
      <button className='dropbtn'>Categories<i className='fa fa-caret-down'></i></button>
      <div className='dropdown-content'>
          <div className='row'>
            <div className='column'>
              <a onMouseEnter={() => setCat("properties")}  data-value="properties">Properties</a>
                <a onMouseEnter={() => setSubCat("for-sale-houses-apartments")} onClick={handleFilter} data-value="for-sale-houses-apartments">For Sale: Houses & Apartments</a>
            </div>
          </div>
      </div>
      </div>
      </div>


      <Paper sx={{ padding: 10 }}>
        <Grid container justify="center" spacing={4}>
          {
            cardData?.data?.productDetails.map((card) => {
              return (
                <Grid item justify="space-around"  >
                  <Link state = {card} to ='/buyproduct'>
                  <Card name={card.name} content={card.description} image={card.image} price={card.price} />
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
