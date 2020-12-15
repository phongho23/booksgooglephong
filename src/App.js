import React, { Component } from 'react';
import Search from './Search/Search';
import './App.css';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  state = {
    items: [],
    error: null,
    filterPrintType: '',
    filterBookType: ''
  }

  apiAddress = (userInput, filter, printType) => {
    console.log(userInput);
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const newInput = encodeURIComponent(userInput);
    const key = 'HIDDENKEY';
    let filterin = '';
    if (filter !== 'all') {
      filterin = `&filter=${filter}`
    }
    const options = {
      method: 'GET',
    }
    fetch(url + newInput + filterin + '&printType=' + printType + '&key=' + key, options)
      .then(retResults => {
        if (!retResults.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return retResults;
      })
      .then(retResults => retResults.json())
      //set state 
      .then(data => {
        let returnedBooks = data.items
          .map(a => {
            a.show = false
            return a
          })
        this.setState({
          items: returnedBooks,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };
  
  toggleHandler = (id) => {
    const items = [...this.state.items];
    const item = items.find(x => x.id === id);
    item.show = !item.show
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <Search apiAddress={this.apiAddress} />
        <ResultsList books={this.state.items}
          toggleHandler={this.toggleHandler} />
      </div>
    );
  }
}
export default App;