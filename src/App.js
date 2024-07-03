import React from 'react';
import Banner from "./components/banner/banner";

const footetStyle= {
  padding: "20px",
  backgroundColor: "#464046",
  color: "#A2A1A9"
}

function Footer() {
  return (
    <footer style = {footetStyle}>
      Подвал сайта
    </footer>
  );
}


function App() {
  return (
    <div>
      Picture shop
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
