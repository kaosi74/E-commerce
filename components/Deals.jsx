// import React from 'react'
// import image1 from "../src/assets/1 (1).jpg";
// import image2 from "../src/assets/1 (3).jpg";
// import image3 from "../src/assets/1 (3).jpg";
// import image4 from "../src/assets/1 (4).jpg";
// import image5 from "../src/assets/1 (5).jpg";
// import image6 from "../src/assets/1 (6).jpg";
// import image7 from "../src/assets/1 (7).jpg";
// import image8 from "../src/assets/1 (8).jpg";
// import image9 from "../src/assets/1 (9).jpg";

import { card } from "./card.js";
export default function Deals() {
  const listItem = card.map((item) => (
    <div className="container" key={item.id}>
      <div className="list-group">
        <div className="list-group-item d-flex justify-content-between align-items-start">
          <div className="list-group-item">{item.name}</div>
          <div className="list-group-item">{item.name}</div>
          <div className="list-group-item">
            <img width={200} src={item.img} />
          </div>
        </div>
      </div>
    </div>
  ));
  return <div>{listItem}</div>;
}
