import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/quotes/random')
        .then(response => response.json())
        .then(data => this.setState({
          quote: data.quoteText,
          author: data.quoteAuthor
        }))
  }

  generateQuoteHandler = () => {
    fetch('https://quote-garden.herokuapp.com/quotes/random')
        .then(response => response.json())
        .then(data => this.setState({
          quote: data.quoteText,
          author: data.quoteAuthor
        }))
  }

  render() {
    return(
        <div className='mainContent'>
            <div className='quoteContent'>
                <p>{this.state.quote}</p>
                <p>{this.state.author}</p>
                <Button onClick={this.generateQuoteHandler}>Generate Quote</Button>
            </div>
        </div>
    )
  }
}


export default App;
