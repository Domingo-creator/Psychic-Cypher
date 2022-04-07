import React from 'react';


import './signup.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: ''
    }
    this.props.state.errors = {}

    this.handleSubmit = this.handleSubmit.bind(this);

  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };
    let userLog = {
      email: this.state.email,
      password: this.state.password

    }
    // this.props.openModal('login')
    // this.props.signup(user).then(this.props.login(userLog))
    this.props.signup(user)



  }

  renderErrors() {
    return(
      <div className='errors-div'>
        {Object.keys(this.props.state.errors).map((error, i) => (
           ( <ul className='errors' key={`error-${i}`}>
           {this.props.state.errors[error]}
          </ul> )
        ))}
      </div>
    );
  }

  render() {
    console.log(this.renderErrors())
    return (
      <div className="signup-form-container">

        <form onSubmit={this.handleSubmit}>
        <br/>
          <div className="signup-form">
            
            <br/>
              <input 
              className='signup-input'
              type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br/>
         
              <input type="text"
              className='signup-input'
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
              <br/>
         
              <input type="password"
              className='signup-input'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
           
          
              <input type="password"
              className='signup-input'
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input className='signup-submit-button' type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm