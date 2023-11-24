import React, { useState } from "react";
import "./App.css";

export default function App() {
  const specializations = [
    {
      id: 1,
      point: "MBA Online In Finance"
    },
    {
      id: 2,
      point: "MBA Online In Marketing"
    },
    {
      id: 3,
      point: "MBA Online In HR Management"
    },
    {
      id: 4,
      point: "MBA Online In IT Management"
    },
    {
      id: 5,
      point: "MBA Online Banking and Finance"
    },
    {
      id: 6,
      point: "MBA Online Business Analytics"
    },
    {
      id: 7,
      point: "MBA Online Healthcare"
    },
    {
      id: 8,
      point: "MBA Online International Business"
    },
    {
      id: 9,
      point: "MBA Online Project Management"
    },
    {
      id: 10,
      point: "MBA Online Financial Markets"
    },
    {
      id: 11,
      point: "MBA Online Retail Management"
    },
    {
      id: 12,
      point: "MBA Online Banking Financial Insurance"
    },
    {
      id: 13,
      point: "MBA Online Hospital Administration"
    },
    {
      id: 14,
      point: "MBA Online International Trade Management"
    },
    {
      id: 15,
      point: "MBA Online Fintech"
    },
    {
      id: 16,
      point: "MBA Online Waste Management"
    },
    {
      id: 17,
      point: "MBA Online International Finance"
    },
    {
      id: 18,
      point: "MBA Online HR Analytics"
    },
    {
      id: 19,
      point: "MBA Online Digital entrepreneurship"
    },
    {
      id: 20,
      point: "MBA Online Infrastructure Management"
    },
    {
      id: 21,
      point: "MBA Online In Finance"
    },
    {
      id: 22,
      point: "MBA Online In Marketing"
    },
    {
      id: 23,
      point: "MBA Online In HR Management"
    },
    {
      id: 24,
      point: "MBA Online In IT Management"
    },
    {
      id: 25,
      point: "MBA Online Banking and Finance"
    },
    {
      id: 26,
      point: "MBA Online Business Analytics"
    },
    {
      id: 27,
      point: "MBA Online Healthcare"
    },
    {
      id: 28,
      point: "MBA Online International Business"
    },
    {
      id: 29,
      point: "MBA Online Project Management"
    },
    {
      id: 30,
      point: "MBA Online Financial Markets"
    },
    {
      id: 31,
      point: "MBA Online Retail Management"
    },
    {
      id: 32,
      point: "MBA Online Banking Financial Insurance"
    },
    {
      id: 33,
      point: "MBA Online Hospital Administration"
    },
    {
      id: 34,
      point: "MBA Online International Trade Management"
    },
    {
      id: 35,
      point: "MBA Online Fintech"
    },
    {
      id: 36,
      point: "MBA Online Waste Management"
    },
    {
      id: 37,
      point: "MBA Online International Finance"
    },
    {
      id: 38,
      point: "MBA Online HR Analytics"
    },
    {
      id: 39,
      point: "MBA Online Digital entrepreneurship"
    },
    {
      id: 40,
      point: "MBA Online Infrastructure Management"
    }
  ];

  const color = ["w", "w", "g", "g"];

  const rendertable = () => {
    return specializations.map((ele, id) => (
      <div className={`items ${color[id % 4]}`} key={ele.id}>
        {ele.point}
      </div>
    ));
  };

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div className="acc">
        <div className="title" onClick={() => setShow(!show)}>
          <div>In Demand Online MBA specializations 2014</div>
          <div> {show ? "-" : "+"} </div>
        </div>
        <div className={`body ${show ? "show" : "col"}`}>
          <div className="list">{rendertable()}</div>
        </div>
      </div>
    </div>
  );
}