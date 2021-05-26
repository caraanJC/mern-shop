import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

// Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

// Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'

function App() {
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <Navbar clickHandler={() => setSideToggle(true)} />

      <SideDrawer show={sideToggle} clickHandler={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} clickHandler={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
