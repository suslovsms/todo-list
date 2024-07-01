import React from 'react';
import Banner from "./components/banner/banner";

function Footer() {
  return (
    <footer>
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
