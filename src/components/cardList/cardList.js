import React, { useState } from 'react';
import Card from "../ui-lib/card/card";
import cards from "./cardsData";
import cardsStyle from "./cardList.module.css";
import { SearchInput } from '../ui-lib/inputs/input';
import ToggleButton from '../ui-lib/toggleButton/ToggleButton';


export function SearchInputBlock({ onSearch }) {
  const [inputValue, setInputValue] = useState(""); // Храним значение инпута

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Обновляем состояние при изменении инпута
  };

  const handleSearchClick = () => {
    onSearch(inputValue); // Передаем введенное значение вверх при клике на кнопку "Найти"
  };

  return (
    <>
      <div className={cardsStyle.title}>Введите что-нибудь</div>
      <div className={cardsStyle.block}>
        <SearchInput 
          placeholder="like Kavkaz,Mountains,Hike,Russia, Georgia" 
          className={cardsStyle.searchInput}
          value={inputValue} // Передаем текущее значение
          onChange={handleInputChange} // Обрабатываем изменение текста
        />
        <ToggleButton
          text="Найти"
          className={cardsStyle.searchButton}
          onClick={handleSearchClick} // Обрабатываем клик на кнопку
        />
      </div>
    </>
  );
}

export function Cards() {
  const [openCardId, setOpenCardId] = useState(null);
  const [filteredCards, setFilteredCards] = useState(cards); 


  const handleSearch = (input) => {
    const trimmedInput = input.trim().toLowerCase(); 
    if (trimmedInput === "") {

      setFilteredCards(cards);
    } else {

      const cardsWithTag = cards.filter(card =>
        card.tags.some(tag => tag.toLowerCase().includes(trimmedInput))
      );
      setFilteredCards(cardsWithTag); 
    }
  };

  const handleCardClick = (cardId) => {
    setOpenCardId(prevId => (prevId === cardId ? null : cardId)); 
  };

  const cardsElements = filteredCards.map((item) => (
    <Card 
      key={item.id}
      title={item.title}
      price={`Цена: ${item.price}`}
      instructor={`Instructor: ${item.instructor}`}
      date={`Start date: ${item.date}`}
      end_date={`End date: ${item.end_date}`}
      description={item.description}
      src={item.path} 
      isFull={openCardId === item.id} 
      onClick={() => handleCardClick(item.id)} 
    />
  ));

  return (
    <div className={cardsStyle.container}>
      <SearchInputBlock onSearch={handleSearch} /> 
      {cardsElements.length > 0 ? cardsElements : <p>Ничего не найдено</p>}
    </div>
  );
}