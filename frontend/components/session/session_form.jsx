import React from 'react';
import { Link } from 'react-router-dom';

// NOTE in a real app this component would have a container mapping state
// and dispatch actions from the store

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      school: ""
    };
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    // const user = this.state;
    // this.props.processForm({user});
  }

  render() {
    return (
      <div className={`session-form-container`}>
        <form onSubmit={this.handleSubmit}
          className={`session-form-box`}>
          <p>Interested Student?</p>
          <div className="session-form">
            <br />

            <input required type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className={`session-form-input`}
              placeholder="Name" />

            <input required type="text"
              value={this.state.school}
              onChange={this.update('school')}
              className={`session-form-input`}
              placeholder="School" />
            <br />

             <input required type="email"
               value={this.state.email}
               onChange={this.update('email')}
               className="email-input"
               placeholder="Email Address"
             />
            <br/>
            <input className='signup-submit' type="submit" value="Interested Student" />
          </div>
        </form>
        <Link className="login-link" to='/'>Interested Company?</Link>
      </div>
    );
  }

}

export default SessionForm;
