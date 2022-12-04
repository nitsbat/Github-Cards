import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <HeaderTitle />
        </div>
        <div className='cardArea'>
          <CardList profileList={testData} />
        </div>
      </div>
    );
  }
}


function HeaderTitle() {
  return <div>Github Cards Project</div>
}

class CardList extends React.Component {
  state = [];
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.profileList.map((profile) => <Card key={profile.id} {...profile} />)}
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} alt='Good Vibes' />
        <div className='info'>
          <div className='name'> Name : {profile.name}</div>
          <div className='company'> Company : {profile.company}</div>
        </div>
      </div>
    )
  }
}

export default App;
