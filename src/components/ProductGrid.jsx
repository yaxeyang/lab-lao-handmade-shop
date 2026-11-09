import ProductCard from "./ProductCard.jsx";

function ProductGrid({ products = [], onAdd }) {
  // ກວດສອບວ່າ products ວ່າງ ຫຼື ບໍ່ມີຂໍ້ມູນ ໃຫ້ສະແດງຂໍ້ຄວາມບອກ
  if (!products || products.length === 0) {
    return (
      <div className="empty-grid">
        <p>ບໍ່ພົບສິນຄ້າ · No products found</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default ProductGrid;