import React from 'react';
import "./index.css"
import NavBar from "./components/navBar/NavBar.js";
import Banner from "./components/banner/banner.js"
import Questions from "./components/questions/questions.js"
import SocialMedia from "./components/socialMedia/socialMedia.js"
import Form from "./components/form/form.js"
import Footer from "./components/footer/footer.js"
import Card from "./components/ui-lib/card/card";


function App() {
  return ( 
    <div>
      <NavBar/>
      <Banner/>
      <Card cardsData = "Kazbegi"/>
      <Questions/>
      <SocialMedia/>
      <Form/>
      <Footer/>
    </div>
  );        
}

export default App;
