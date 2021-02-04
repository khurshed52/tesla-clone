import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import solar from './assets/solar.jpg';
import modaly from './assets/modaly.jpg'
import SolarPanels from './assets/SolarPanels.jpg'
import ModelS from './assets/ModelS.jpg';
import Model3 from './assets/Model3.jpg';
import ModelX from './assets/ModelX.jpg';
import Accessories from './assets/Accessories.jpg';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="items_container">
      <Items
           background={SolarPanels}
           title="Lowest Cost Solar Panels in America"
           desc="Money-back guarantee"
           leftBtnName="Order Now"
           rightBtnName="Learn More"
           twoBtn={true}
           first
          />
          <Items
           background={ModelS}
           title="Model S"
           desc="Starting at $69,420"
           leftBtnName="Order Now"
           rightBtnName="Learn More"
           twoBtn={true}
           first
          />
           <Items
           background={Model3}
           title="Model 3"
           desc="Order Online for Touchless Delivery"
           leftBtnName="Order Now"
           rightBtnName="Learn More"
           twoBtn={true}
           first
          />
           <Items
           background={ModelX}
           title="Model X"
           desc="Order Online for Touchless Delivery"
           leftBtnName="Order Now"
           rightBtnName="Learn More"
           twoBtn={true}
           first
          />
          <Items
           background={modaly}
           title="Model Y"
           desc="Order Online for Touchless Delivery"
           leftBtnName="Order Now"
           rightBtnName="Learn More"
           twoBtn={true}
           first
          />
           <Items
           background={solar}
           title="Solar for New Roofs"
           desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
           leftBtnName="Order Now"
           rightBtnName="Learn More"
           twoBtn={true}
           first
          />
           <Items
           background={Accessories}
           title="Accessories "
           leftBtnName="Order Now"
           rightBtnName="Learn More"
           twoBtn={false}
           footer={true}
          />
      </div>
    </div>
  );
}

export default App;
