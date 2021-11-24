import React from "react"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import "./sign-up.style.scss"
// import { signInWithGoogle } from "../../firebase/firebase.ultils"

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  handleOnchange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    this.setState({ email: "", password: "" })
  }

  render() {
    const { name, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2>I do have not account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="name"
            label="Name"
            name="name"
            value={name}
            handleChange={this.handleOnchange}
            required
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={this.handleOnchange}
            required
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            handleChange={this.handleOnchange}
            required
          />
          <FormInput
            type="password"
            label="ConfirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleOnchange}
          />
          <div className="button">
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
