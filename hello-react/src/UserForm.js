import React, { Component } from "react";

class UserForm extends Component {
  state = {
    name: "Romain",
    email: "",
    phone: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    return (
      <form className="UserForm" onSubmit={this.handleSubmit}>
        <div>
          Name : <input name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div>
          Email : <input name="email" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div>
          Phone : <input name="phone" value={this.state.phone} onChange={this.handleChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
