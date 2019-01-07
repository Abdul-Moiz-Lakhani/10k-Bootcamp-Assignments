import React, { Component, Fragment } from 'react';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of people alongside their books they like.

Fazal Deen's likes a Imran Series book.

For detailed instructions, refer to instructions.md.
*/

const chart = [
  {
    id: 1,
    peepsID: '1',
    bookLikedID: '1',
  },
  {
    id: 2,
    peepsID: '2',
    bookLikedID: '1',
  },
  {
    id: 3,
    peepsID: '4',
    bookLikedID: '5',
  },
  {
    id: 4,
    peepsID: '5',
    bookLikedID: '2',
  },
  {
    id: 5,
    peepsID: '3',
    bookLikedID: '5',
  },
  {
    id: 6,
    peepsID: '6',
    bookLikedID: '4',
  },
];

const peeps = {
  1: {
    id: 1,
    name: 'Fazal Deen',
    readerCategory: 'champ',
  },
  2: {
    id: 2,
    name: 'Irfan',
    readerCategory: 'rising-star',
  },
  3: {
    id: 3,
    name: 'Muneeb',
    readerCategory: 'beginner',
  },
  4: {
    id: 4,
    name: 'Osama',
    readerCategory: 'champ',
  },
  5: {
    id: 5,
    name: 'Najam',
    readerCategory: 'champ',
  },
  6: {
    id: 6,
    name: 'Aamir',
    readerCategory: 'beginner',
  },
};

const books = {
  1: {
    id: 1,
    name: 'Imran Series',
  },
  2: {
    id: 2,
    name: 'Harry Potter',
  },
  3: {
    id: 3,
    name: 'I Am Malala',
  },
  4: {
    id: 4,
    name: 'Bang-e-Dara by Allama Iqbal',
  },
  5: {
    id: 5,
    name: 'Jokes 101',
  },
};

const LikesList = (props) => {
  return (
    <li>{props.name}</li>
  )
}

const BookLikes = (props) => {

  const likes = chart.filter(v => parseInt(v.bookLikedID, 10) === props.bookDetail.id).map(x => peeps[parseInt(x.peepsID, 10)].name);

  return (
    <Fragment>

      <h2>{props.bookDetail.name}</h2>
      
      {
        likes.length > 0 ? (
          <div>
            
            <p>Liked By:</p>
            
            <ul>
              {
                likes.map(x => <LikesList key={x} name={x} />)
              }
            </ul>
          
          </div>
        ) : <p>None of the peeps in the chart liked this book</p>
      }

    </Fragment>
  )
}

class App extends Component {
  render() {

    const bookLikes = Object.values(books);

    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>
        </header>

        {
          bookLikes.map(x => <BookLikes key={x.id} bookDetail={x} />)
        }

      </div>
    );
  }
}

export default App;
