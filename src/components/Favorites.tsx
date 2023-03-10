import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Card from "./Card";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <ul>
        {favorites.map((item) => (
          <Card movie={item.movie} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
