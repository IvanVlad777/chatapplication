import './App.css';
import { Component } from 'react';
import ChatRoom from './ChatRoom';
import Login from './Login';

class App extends Component {
  state = {
    token: null,
  };

  setToken = () => {
    this.setState({
      token: 'sher155ezwrw5ahzer%$#/fsfdsh33g',
    });
  };

  render() {
    const { token } = this.state;
    return (
      <div className="App">
        {!token && <Login setToken={this.setToken} />}
        {token && <ChatRoom />}
      </div>
    );
  }
}

export default App;
