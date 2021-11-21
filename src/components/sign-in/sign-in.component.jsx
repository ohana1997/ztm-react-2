import React from "react"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import "./sign-in.style.scss"
class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
