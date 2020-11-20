import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: "",
        password: "",
      };
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      };
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
      };
            
    render() {
        const {email,password} = this.state
        return (
            <>
                        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            {" "}
            <h4>Sign In</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SignIn
          </button>
        </form>

            </>
        )
    }
}
