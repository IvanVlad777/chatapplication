import { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';

class Login extends Component {
  state = {
    username: null,
    password: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    if (!username || !password) {
      alert('Type username and/or password!');
      return;
    }

    this.props.setToken();
  };

  handleChange = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case 'username':
        this.setState({
          username: e.target.value,
        });
        break;
      case 'password':
        this.setState({
          password: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <h1>User Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Label forEl="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label forEl="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
