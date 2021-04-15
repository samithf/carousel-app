import React, { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

const slides = [
  {
    title: "Nature",
    images: [
      "https://i.picsum.photos/id/10/1366/768.jpg?hmac=h_HoAyK5KE4SqI41nma7x9UsEfD_8s-StyGPvYY4xSg",
      "https://i.picsum.photos/id/1018/1366/768.jpg?hmac=xJ4hlUVxA_2hijRxcmgibcCbO5SwEFtnDn-xGx60UJo",
      "https://i.picsum.photos/id/1015/1366/768.jpg?hmac=8WHItp2Yj5BPR1EEVdxX7Sc9fn20NtSI8SSJRQhp-Oc",
    ],
  },
  {
    title: "Animals",
    images: [
      "https://i.picsum.photos/id/1003/1366/768.jpg?hmac=ft_gDc9rbZdlFUskDub_vmJketU_cf3mTgIktHPO3ho",
      "https://i.picsum.photos/id/1020/1366/768.jpg?hmac=YiDt98tkj-YhlysquuOaSBwtoOI05CfnKA3rm_BxXpo",
      "https://i.picsum.photos/id/1024/1366/768.jpg?hmac=-sI_5SEcKODjL4wOJQIn0rltFh0wqm44hX64U7vnIAk",
    ],
  },
  {
    title: "Human",
    images: [
      "https://i.picsum.photos/id/1001/1366/768.jpg?hmac=iG8USxD3tJ7sV7IL47oGFJfguIAa7L-o_D83zlX0KRE",
      "https://i.picsum.photos/id/1005/1366/768.jpg?hmac=DvldsacA1Lsk4ettkEbZEgHkYuhhPcvK-e4oSZQDl00",
      "https://i.picsum.photos/id/1027/1366/768.jpg?hmac=VDr4VXPiEwwCibIi7VJyQIj6mgzRSYcSWkjEZfUN0uo",
    ],
  },
  {
    title: "City",
    images: [
      "https://i.picsum.photos/id/1047/1366/768.jpg?hmac=sTr9cjL2vyjbkRNR9ZbeKOVnduqAglOeiTZew7r7O3k",
      "https://i.picsum.photos/id/1033/1366/768.jpg?hmac=LPtvhoMS4ZO6w7cBOpSSVt2J9PVDhYJ4osOEd9RwAbg",
      "https://i.picsum.photos/id/1067/1366/768.jpg?hmac=eYcesYBHmtW2cLX8x3OHGS8LPYLug4XX6SD-7JQ3JMw",
    ],
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="App">
      <Carousel
        slides={slides}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      ></Carousel>
    </div>
  );
}

export default App;
