import React from "react";
import "./carousel.scss";
import { CarouselSlideItem } from "./CarouselSlideItem";

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Carousel = ({ _items }) => {
  const length = _items.length;
  const keys = Array.from(Array(_items.length).keys());
  const [items, setItems] = React.useState(keys);
  const [updatedItemList, setUpdatedItemList] = React.useState([]);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  React.useEffect(() => {
    const double = [..._items, ..._items];
    const keys = Array.from(Array(double.length).keys());
    setUpdatedItemList(double);
    setItems(keys);
  }, []);

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  if(!_items.length) {
    return
  }

  return (
    <div data-testid="test-carousel_list" className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {updatedItemList.length &&
              items.map((pos, i) => (
                <CarouselSlideItem
                  id={pos.id}
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                  _items={updatedItemList}
                  length={length}
                />
              ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
      </div>
    </div>
  );
};
