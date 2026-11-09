import { formatKip } from "../data.js";

function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      {/* 1. ແກ້ໄຂໃຫ້ສະແດງປ້າຍ ເມື່ອສິນຄ້າໝົດ (!product.inStock) */}
      {!product.inStock && <span className="badge-out">ສິນຄ້າໝົດ</span>}
      
      <div className="thumb">{product.emoji}</div>
      <div className="cat">{product.category}</div>
      <div className="name">{product.name}</div>
      <div className="price">{formatKip(product.price)}</div>
      
      <div className="btn-row">
        {/* 2. ປິດການໃຊ້ງານປຸ່ມ ເມື່ອສິນຄ້າໝົດ (!product.inStock) */}
        <button 
          className="btn add" 
          disabled={!product.inStock} 
          onClick={() => onAdd(product)}
        >
          ເພີ່ມໃສ່ກະຕ່າ
        </button>
        
        <button
          className="btn two"
          disabled={!product.inStock}
          onClick={() => {
            onAdd(product);
            onAdd(product);
          }}
        >
          +2
        </button>
      </div>
    </div>
  );
}

export default ProductCard;