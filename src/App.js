import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class App extends React.Component {

  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((state, props) => ({ profiles: [...state.profiles, profileData] }));
  }

  render() {
    return (
      <div className='Main'>
        <div className="App">
          <div className="App-header">
            <HeaderTitle />
          </div>
          <Form className='form' onSubmit={this.addNewProfile} />
          <div className='cardArea'>
            <CardList profileList={this.state.profiles} />
          </div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  userNameInput = React.createRef();

  handleApi = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${this.userNameInput.current.value}`);
    const data = await response.json();
    this.props.onSubmit(data);
  }

  render() {
    return (
      <form onSubmit={this.handleApi}>
        <input placeholder='Enter Github Username..??'
          style={{ width:  "13rem" , fontSize: "0.9rem" }}
          ref={this.userNameInput}
          required
        />
        <button style={{ width:  "5rem", marginLeft: "1.2rem" }}>Add Card</button>
      </form>
    )
  }
}


function HeaderTitle() {
  return <div>Github Cards Project</div>
}

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.profileList.map((profile) => <Card key={profile.id} {...profile} />)}
      </div>
    )
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.profile = props;
  }
  render() {
    return (
      <div className='github-profile'>
        <img src={this.profile.avatar_url} alt='Good Vibes' />
        <div className='info'>
          <div className='name'> Name : {this.profile.name}</div>
          <div className='company'> Company : {this.profile.company}</div>
        </div>
      </div>
    )
  }
}

export default App;
