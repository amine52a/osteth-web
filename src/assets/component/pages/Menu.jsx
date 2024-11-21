import { foodItems } from "./Foodlist"
import './Menu.css';

export default function Menu() {
  return (
    <div>
      <h1>Food Menu</h1>
      
      <ul>
        {foodItems.map((food) => (
          <li key={food.id} style={{ marginBottom: "20px" }}>
            <h2>{food.name}</h2>
            <img
              src={food.image}
              alt={food.name}
              style={{ width: "200px", height: "150px", objectFit: "cover" }}
            />
            <p> {food.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
