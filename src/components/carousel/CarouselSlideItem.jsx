import React from "react";
import { useNavigate } from "react-router-dom";


const slideWidth = 30;

const createItem = (position, idx, _items, length) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };
  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};



export const CarouselSlideItem = ({ id, pos, idx, activeIdx, _items, length }) => {
  let navigate = useNavigate();
  const item = createItem(pos, idx, _items, length);
  const handleClick = () => {
    navigate(`/details/${_items[idx].player.id}`)
  }
  return (
    <li data-testid="test-carousel_item" className="carousel__slide-item" style={item.styles} onClick={handleClick}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4 data-testid="test-movie_title">{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};
