import Olipop from './assets/Olipop-Refreshing-Beverage-Logo-PNG.png';
import Can from './assets/olipop_can.png';
import Circle from './assets/hero-circle.png';
import Button from './components/buttons';
import Many from './assets/olipop-many.jpg';
import InfoCard from './components/InfoCard';
import BananaCream from './assets/Banana-Cream.png';
import CreamSoda from './assets/cream-soda.png';
import GingerAle from './assets/Ginger-Ale.png';
import WaterMalon from './assets/WaterMelon-Lime.png';
import TropicalPunch from './assets/Tropical-Punch.png';
import OrangeSqueeze from './assets/Orange-Squeeze.png';
import LastImage from './assets/last-img.jpg';
import { ProductCarousel, type Product } from './components/carousel-component';
import IconText from './components/icon-with-text';
import { CircleDollarSign, GlassWater, Truck, CircleX } from 'lucide-react';
import './App.css'

const products: Product[] = [
  { id: 1, name: 'Ginger Ale', price: '$34.99', imageUrl: GingerAle, category: 'Sparkling Tonic', bgColor: '#d4e07b', pillColor: '#e6b71c' },
  { id: 2, name: 'Cream Soda', price: '$34.99', imageUrl: CreamSoda, category: 'Sparkling Tonic', bgColor: '#d3d3c0', pillColor: '#8a3fc2' },
  { id: 3, name: 'Orange Squeeze', price: '$34.99', imageUrl: OrangeSqueeze, category: 'Sparkling Tonic', bgColor: '#e9cfb6', pillColor: '#e8712a' },
  { id: 4, name: 'Tropical Punch', price: '$34.99', imageUrl: TropicalPunch, category: 'Sparkling Tonic', bgColor: '#b8dcdc', pillColor: '#69a2f1' },
  { id: 5, name: 'Watermelon Lime', price: '$34.99', imageUrl: WaterMalon, category: 'Sparkling Tonic', bgColor: '#f6cfc6', pillColor: '#e83a3a' },
  { id: 6, name: 'Banana Cream', price: '$34.99', imageUrl: BananaCream, category: 'Sparkling Tonic', bgColor: '#f7e05d', pillColor: '#cbce17' },
];

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


      <section className="ingredients-card">
        <InfoCard
          title="Our Foundational Ingredients"
          description="For over a decade, Ben and David have shared a vision of a healthier, tastier future. Their quest for a product that could undermine the old guard of soda behemoths led them to OLIPOP: a thoughtfully crafted tonic that found its taste in wholesome, hardworking ingredients instead of spoonfuls of sugar."
          image={Many}
          imageAlt="Product flavors"
          backgroundColor="white"
        >
          <Button label="Read More" />
        </InfoCard>
      </section>


      <section className="carousel">
        <ProductCarousel
          products={products}
          title="Taste Your Favourite"
          subtitle="Enjoy our take on the classic flavors you know and love."
        />
      </section>


       <section className="benefits">
              <div className="benefits_column">
                  <IconText icon={CircleDollarSign} text="Save 15% on every order" />
                  <IconText icon={GlassWater} text="Early access to new flavors." />
              </div>

              <img className="benefits_image" src={ LastImage} alt="" />

              <div className="benefits_column">
                  <IconText icon={Truck} text="Free Shipping, Always." />
                  <IconText icon={CircleX} text="Swap, skip or cancel any time" />
              </div>
          </section>



      <section className="ingredients-card">
        <InfoCard
          title="Save 15% with Endless Olipop."
          description="For over a decade, Ben and David have shared a vision of a healthier, tastier future. Their quest for a product that could undermine the old guard of soda behemoths led them to OLIPOP: a thoughtfully crafted tonic that found its taste in wholesome, hardworking ingredients instead of spoonfuls of sugar."
          backgroundColor="#efd3e0"
        >
          <Button label="Subscribe & Save" />
        </InfoCard>
      </section>

      <footer>
        
      </footer>

    </>
  )
}

export default App
