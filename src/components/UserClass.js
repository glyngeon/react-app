import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        location: 'Bangalore',
        avatar_url: '',
        email: 'gauravgangwar@gmail.com'
      }
    };
  }
  async componentDidMount() {
    console.log('child componentDidMount');
    const res = await fetch('https://api.github.com/users/glyngeon');
    const resJson = await res.json();
    console.log(resJson);
    this.setState({
      userInfo: resJson
    });
  }
  componentDidUpdate() {
    console.log('child componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  render() {
    const { name, location, avatar_url, email } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-container">
        <img src={avatar_url} alt="John" />
        <h1>{name}</h1>
        <p className="user-title">CEO & Founder, Example</p>
        <p>{location || 'Bangalore'}</p>
        <p><button>{email || 'gauravgangwar@gmail.com'}</button></p>
    </div>
    );
  }
}

export default UserClass;
