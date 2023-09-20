import './App.css';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Search from './components/Search';
import Card from "./components/Card"
import cards from './data/cards';
import Grid from "@mui/material/Grid"
function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <div >
      <Grid container spacing={2}>
        {cards.map((card) => {
          return(
          <Grid>
            <Card name={card.name} content={card.content} image={card.image} />
          </Grid>
            )
        })}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
