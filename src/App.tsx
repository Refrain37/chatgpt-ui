import { useState } from 'react'
import { HashRouter } from "react-router-dom";
import Router from "./routers/index";

function App(props:any) {
  return (
    <HashRouter>
        <Router />
    </HashRouter>
  )
}

export default App
