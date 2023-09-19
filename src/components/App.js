import './App.css';
import Navbar from "./Navbar";
import Card from "./Card"
import cards from '../cards';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='cards-container'>
      {cards.map((card)=>{
        
        return(<Card
        

          name={card.name}
          content={card.content}
          image={card.image}

        />);
      })}
      </div>
     
      
    </div>
  );
}

export default App;
