import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { catalogIndelexedById } from "../../utils/catalog";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({ id, amount }) => {
  const { addToCart, decreaseProduct, removeFromCart } =
    useContext(CartContext);
  const { brand, price, name, image } = catalogIndelexedById[id];

  return (
    <article className="flex bg-stone-100 p-1 border rounded-mg relative">
      <img src={image} alt={`Imagem do produto: ${name}`} className="h-24" />
      <button
        onClick={() => removeFromCart(id)}
        className="text-right text-2xl fixed absolute top-0 right-5 text-red-600"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="flex flex-col justify-around mx-2">
        <p className="text-slate-950 text-sm">
          {name} {brand}
        </p>
        <p className="text-slate-400 text-xs">Tamanho M</p>
        <p className="text-green-700 text-lg">{price}</p>
        <div className="flex text-slate-950 absolute right-2 bottom-0 mb-2">
          <button
            onClick={() => decreaseProduct(id)}
            className="border border-slate-400 hover:border-slate-900 mb-2"
          >
            <FontAwesomeIcon icon={faMinus} className="p-1" />
          </button>
          <p className="p-2 w-8 mx-auto">{amount}</p>
          <button
            onClick={() => addToCart(id)}
            className="border border-slate-400 hover:border-slate-900 mb-2"
          >
            <FontAwesomeIcon icon={faPlus} className="p-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
