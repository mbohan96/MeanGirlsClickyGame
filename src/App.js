import React, { Component }  from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Characters from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

function shuffle(array) {
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



class App extends Component {

  state = {
    characters,
    score: 0,
    clickedCharacters: []
  };

  clickedImage = id => {
    
    let clickedCharacters = this.state.clickedCharacters;
    let score = this.state.score;
 

    
    if (clickedCharacters.indexOf(id) === -1) {
      
      clickedCharacters.push(id);
      console.log(clickedCharacters);
   
      this.handleIncrement();
    
  
      this.setState({
        score: 0,
        clickedCharacters: []
      });
      console.log("double")
      alert("You picked doubles!")
    }

   
    
  }

 
  handleIncrement = () => {
   
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ characters: shuffle(characters) })
  }

  
  

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
       
        />
        <Header />
        
        <Wrapper>

          {this.state.characters.map(character => (
            <Characters 
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              clickedImage={this.clickedImage}
            />
          ))}
       
        </Wrapper>
      
      </div>
    )
  }
}

export default App;