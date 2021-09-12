import { CartButton } from "../cartButton";

export const ProductCard = ({product}) => {
  return (
    <>
      <div className="card" style={{margin:'2rem'}}>
        <div className="except-btn">
          <div className="prod-img-dib">
            <img
              className="prod-img"
              src={product.imageURL}
              alt=""
            />
          </div>
          <p className="brand-name">{product.brand}</p>
          <h3 className="product-name">{product.name}</h3>
          <div className="price">
            <p>Rs {product.price}</p>
            <p className="price-orig">{product.mrp}</p>
            <p>{product.discount}%</p>
          </div>
        </div>
        <div className="prod-btns">
          <CartButton product={product} />
        </div>
      </div>
    </>
  );
};
