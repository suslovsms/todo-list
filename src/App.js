import React from 'react';
import "./index.css"
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import {PicturesList} from './components/pictureslist/PicturesList';


function App() {
  return (
    <div>
      <Header/>
      <PicturesList/>
      <Banner text="текст акции">
      </Banner>      
      <Footer/>
    </div>
  );        
}

export default App;

// Задание 1
// Добавить возможность отображать детальное описание задачи
// только по нажатию на карточку с задачей и скрывать при
// повторном клике.

// Задание 2
// Реализовать возможность поиска задач по меткам.