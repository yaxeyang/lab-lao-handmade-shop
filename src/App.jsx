import { useState } from "react";
import { products } from "./data.js";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartPanel from "./components/CartPanel.jsx";

function App() {
  const [cart, setCart] = useState([]);
  // 1. ເພີ່ມ State ສຳລັບເກັບໝວດໝູ່ທີ່ກຳລັງຖືກເລືອກ
  const [selectedCategory, setSelectedCategory] = useState("all");

  function addToCart(product) {
    const existing = cart.find((i) => i.id === product.id);
    if (existing) {
      // ແກ້ໄຂ: ສ້າງ Object ໃໝ່ໂດຍການ Map ເພື່ອຮັກສາ Immutable State
      setCart(
        cart.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      );
    } else {
      // ແກ້ໄຂ: ໃຊ້ Spread Operator ເພີ່ມສິນຄ້າໃໝ່ເຂົ້າ Array ໂດຍບໍ່ mutation ຂອງເດີມ
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function increase(id) {
    // 2. ແກ້ໄຂ: ເພີ່ມ { ...i } ເພື່ອກະຈາຍ property ເດີມໄວ້ຄືເກົ່າ
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  }

  function decrease(id) {
    setCart(
      cart
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((i) => i.id !== id));
  }

  // 3. กອງສິນຄ້າຕາມໝວດໝູ່ທີ່ຜູ້ໃຊ້ເລືອກຈາກ FilterBar
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="wrap">
      <Header shopName="ຮ້ານ Lao Handmade" itemCount={itemCount} />
      <div className="layout">
        <div>
          {/* ສົ່ງ Callback ໄປຮັບຄ່າ Filter */}
          <FilterBar onChange={(category) => setSelectedCategory(category)} />
          {/* ส่งສິນຄ້າທີ່ກອງແລ້ວໄປສະແດງ */}
          <ProductGrid products={filteredProducts} onAdd={addToCart} />
        </div>
        <CartPanel
          cart={cart}
          total={total}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;