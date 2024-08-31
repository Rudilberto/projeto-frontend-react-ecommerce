import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Aqui criamos a lógica de adicionar produtos ao carrinho
  // primeiro desmontamos o objeto cartItems e criamos ele de novo para o resultado não ser somente o valor novo
  // o productId está dentro de '[]' para o javascript entender que o productId será uma variavel dinamica e não productId literalmente
  const addToCart = (productId) => {
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    });
  };

  const decreaseProduct = (productId) => {
    if (cartItems[productId] > 1) {
      setCartItems({
        ...cartItems,
        [productId]: cartItems[productId] - 1,
      });
    } else {
      removeFromCart(productId);
    }
  };

  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  };

  return (
    // Para usar o context usaremos o componente desejado junto ao Provider e um parametro value='' que encapsulará os componentes que usarão o contexto
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addToCart,
        removeFromCart,
        decreaseProduct,
      }}
    >
      <Header />
      {/* Importando o Routes e Route, podemos configurar as rotas onde componentes só serão renderizados caso o usuario estiver na rota especificada */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
