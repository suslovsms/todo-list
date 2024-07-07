import React from 'react';
import "./index.css"
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Bubble from "./components/bubble/bubble";
import PicturesList from './components/pictureslist/PicturesList';


function App() {
  return (
    <div>
      <Header/>
      <PicturesList/>
      <Banner text="текст акции">
        <Bubble/>
      </Banner>      
      <Footer/>
    </div>
  );        
}

export default App;
