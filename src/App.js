import React, {Component} from 'react';
//importando a css
import './style.css'

// Importando a imagem do cronometro
import cronometro from './assets/cronometro.png'; 

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'START';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'STOP';
    }

    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'START';
    this.setState(state);

  }

  render(){
    return(
      <div className="container">
        <img src={cronometro} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>CLEAR</a>
        </div>
      </div>
    );
  }
}

export default App;