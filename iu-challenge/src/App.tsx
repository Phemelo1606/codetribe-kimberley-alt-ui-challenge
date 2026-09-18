import Olipop from './assets/Olipop-Refreshing-Beverage-Logo-PNG.png'
import Can from './assets/olipop_can.png'
import Circle from './assets/hero-circle.png'
import Button from './components/buttons'

import './App.css'

function App() {


  return (
    <>
      <header>
        <nav className="navBar">
          <img src={Olipop} className="logo" alt="Olipop logo" width="80" height="80" />

          <p className="nav-title">OLIPOP</p>
          <ul className="nav-links">

            <li><a>Shop Online</a></li>
            <li><a>Find Store</a></li>
            <li><a>Learn More</a></li>

          </ul>
          <Button label="Subscribe" />
      </nav>
      </header>

      <section className="hero">

        <div className="hero-content">
        <p className="hero-text">
          A New Kind<br/> Of Soda<sup>TM</sup>
        </p>
          <Button label="Shop OLIPOP" />
        </div>

        <div className="hero-img">
          <img src={Can} className="hero-can" alt="OLIPOP Strawberry Vanilla can" />
          <img src={ Circle} className="hero-circle" alt="circle"/>
        </div>


      </section>

    </>
  )
}

export default App
