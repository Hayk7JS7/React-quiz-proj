import { useState } from "react";
import { Answer } from "./Answers";
import app from './App.css';

function App() {
  const [player, setPlayer] = useState(() => "")
  const [article, setArticle] = useState(() => "Let's start our game")
  const[show, setShow] = useState(() => false)


  const playerName = (e) => {
    setPlayer(e.target.value)
  }
  const chagesName = () => {
    setArticle(`Welcome to our game dear ${player}`)
  }
 const firstButton = () => {
    return <button onClick={() => {
        setShow(true)
        chagesName()
        }}>start</button>
  }
  return (
    <div className="App">
      <h2>{article}</h2>

      {article.includes("Let") &&  <input type="text" value={player} onChange={playerName} placeholder="enter 
       your name" />}
     {show ? <div><Answer/> </div>:  firstButton()}
     {/* {result ? result = "congrats u got 7" : null} */}
    {/* //  { : null} */}


    </div>
  );
}

export default App;