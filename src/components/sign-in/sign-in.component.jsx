import React from "react"
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { SignInWithGoogle } from "../firebase/firebase.utils"

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: "", password: "" })
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>J'ai déjà un compte</h2>
        <span>Entrer avec votre email/mot de passe </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            required
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            required
            label="mot de passe"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit" value="Envoyer">
              Sign In
            </CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={SignInWithGoogle}
              value="Envoyer"
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn
