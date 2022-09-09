import React from "react";
import "./styles.css";
import { useState } from "react";

const FoodPedia = {
  Indian: [
    { name: "Chole bhatoore" },
    { name: "Shahi Paneer" },
    { name: "Biryani" },
    { name: "Paal Payasam" },
    { name: "Undhiyu" },
    { name: "Sambar" },
    { name: "Pulao" }
  ],

  Chinese: [
    { name: "momos" },
    { name: "Dim sums" },
    { name: "Shitake Fried Rice with Water Chestnuts" },
    { name: "Spring Rolls" }
  ],

  Continental: [
    { name: "Baked Pesto Pasta" },
    { name: "Sticky Toffee Pudding" },
    { name: "Sizzling Potatoes in Cheese Sauce" },
    { name: "Baked Alaska" }
  ],

  Thai: [
    { name: "Khao Soi (Thai Coconut Curry Noodle Soup)" },
    { name: "Pad Thai (Stir-Fried Noodles)" },
    { name: "Tom Yum Goong (Hot & Sour Shrimp Soup)" },
    { name: "Gaeng Daeng (Red Curry)" }
  ],
  Italian: [
    { name: "Pizza" },
    { name: "Lasagna" },
    { name: "Risotto" },
    { name: "Arancini" }
  ]
};

const foodTypeList = Object.keys(FoodPedia);

export default function App() {
  const [selectedFoodType, setFoodType] = useState("Indian");
  function foodTypeButtonHandler(foodType) {
    setFoodType(foodType);
  }
  const mystyle = {
    listStyleType: "none"
  };

  return (
    <div className="App">
      <h1>🍽 Welcome to FoodPedia 🍽</h1>

      <p>Life is short, Let's eat </p>

      {foodTypeList.map((foodType) => {
        return (
          <button
            onClick={() => foodTypeButtonHandler(foodType)}
            keys={foodType}
          >
            {foodType}
          </button>
        );
      })}

      <hr />

      <div>
        <ul style={mystyle}>
          {FoodPedia[selectedFoodType].map((foodType) => {
            return (
              <li>
                <div>{foodType.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
