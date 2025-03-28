import React from "react"

import "./App.css"

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer";

export default function App () {
  return(
    <div id="app">
      <Header/>
      <Content />
      <Footer/>
    </div>
  )
}
