import React from "react";
import "./app.css";
import {ACCard} from "../components/molecules"
import { ACLoaderButton } from "../components/atoms";

const chips = ["wooden", "metal", "fresh", "gold", "silver", "copper"];
const colors = ["yellow", "green", "blue", "red", "pink", "orange"];
const titles = [
  "Electronic Wooden Computer",
  "Gorgeous Rubber Bacon",
  "Tasty Cotton Mouse",
  "Small Metal Bacon",
  "Fantastic Metal Chair",
  "Modern Wooden Fish"
];
const prices = [892, 167, 320, 924, 177, 787];

function getRandomInt(max) {
  const rnd = Math.floor(Math.random() * max);
  return rnd;
}

function getDataForSix() {
  const cardProps = [];

  for (let i = 0; i < 6; i++) {
    cardProps.push({
      chipTitle: chips[getRandomInt(6)],
      color: colors[getRandomInt(6)],
      title: titles[getRandomInt(6)],
      price: prices[getRandomInt(6)]
    });
  }

  return cardProps;
}

function App() {
  const [data, setData] = React.useState([]);

  // onLoad
  React.useEffect(() => {
    setData(getDataForSix());
  }, []);

  const loadMore = () => {
    setData(() => [...data, ...getDataForSix()]);
  };

  return (
    <div className="app">
      <div className="card-container">
        {data.map((dataItem, index) => (
          <ACCard
            key={`card-${index}`}
            chipTitle={dataItem?.chipTitle}
            title={dataItem?.title}
            price={dataItem?.price}
            color={dataItem?.color}
          />
        ))}
      </div>
      <div className="load-more">
        <ACLoaderButton onLoad={loadMore} text="LOAD MORE" />
      </div>
    </div>
  );
}

export default App;