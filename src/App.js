import React from "react"
import HomePage from "./pages/homepage/homepage.component"
import { Switch, Route } from "react-router-dom"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import signInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth } from "./components/firebase/firebase.utils"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribrFromAuth = null

  componentDidMount() {
    this.unsubscribrFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribrFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={signInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
