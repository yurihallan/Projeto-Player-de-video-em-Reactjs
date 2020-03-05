import React, {Component} from 'react';

import './App.css';
import MeuComponente from './components/MeuComponete';
import Time from './components/Time';
import MyButton from './components/MyButton';

class App extends Component {
  render(){
    const dados = {
      nome: "Maria",
      sobrenome: "Souza",
      idade: 24
    }
    return (
      <div className="App">
        <MyButton/>
        <Time/>
        <MeuComponente {...dados} />
      </div>
    );
  }
}

export default App;
