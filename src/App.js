import React from "react"

import Header from "./Header"

import logo from "./logo.svg"
import "./App.css"

// import en from '../data/en'

const App = React.createClass({
  getInitialState () {
    return { title: "" }
  },

  componentDidMount () {
    fetch("/api/en")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ title:json.title })
      })
  },
  
  render () {
    return (
      <div className="App">
        <Header 
          logo={logo}
          title={this.state.title}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
})

export default App;
