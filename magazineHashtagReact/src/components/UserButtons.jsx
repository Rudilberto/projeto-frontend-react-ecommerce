import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext, getAmountOfItemsInCart } from "../contexts/CartContext";

const UserButtons = () => {
  const [amountOfItems, setAmountOfItems] = useState(0);

  const { setIsCartOpen, cartItems } = useContext(
    CartContext,
    getAmountOfItemsInCart
  );

  // useEffect roda a função assim que houver uma mudança no elemento selecionado
  useEffect(() => {
    setAmountOfItems(getAmountOfItemsInCart(cartItems));
  }, [cartItems]); // cartItems sera o elemento observado há mudanças

  return (
    <div>
      <button className="px-2 relative" onClick={() => setIsCartOpen(true)}>
        <FontAwesomeIcon icon={faBagShopping} />
        {/* Maracutaia: usar !! em um valor falsy transformará esse valor em um false já que o primeiro ! inverterá o falsy para true e o segundo ! inverterá de volta para false */}
        {!!amountOfItems && (
          <div
            id="cart-amount"
            className="text-base absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 rounded-full -top-2 -right-2"
          >
            {amountOfItems}
          </div>
        )}
      </button>
      <Link to="/history" className="px-2">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default UserButtons;
