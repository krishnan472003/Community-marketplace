import React from 'react'
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Search from "../../components/Search"
import Card from "../../components/Card"
import {cards} from '../../data/cards';
import Grid from "@mui/material/Grid"
import { Paper } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <Paper sx ={{padding: 10}}>
      <Grid container justify="center" spacing={4}>
        {
        cards.map((card) => {
          return(
          <Grid item justify="space-around"  >
            <Card name={card.name} content={card.content} image={card.image} price={card.price} />
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
