import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ data }) {
  const {
    id,
    name,
    description,
    thumbnail,
    sizes,
    discount_rate,
    price,
    discount_price,
  } = data;

  return (
    <article className="product">
      <Link to={`/product/${id}`}>
        <img alt="상품 미리보기" className="thumbnail" src={thumbnail} />
      </Link>
      <span className="productInfo"> {description}</span>
      <span className="productName"> {name}</span>
      <span className="productPriceInfo">
        <span> {discount_rate * 100}% </span>
        <span> {price} </span>
        <span> {price - discount_price} 원 </span>
      </span>
      <div className="productOtherInfo">
        <span className="productSizes">
          {sizes.map((size, index) => (
            <span key={index}> {size} </span>
          ))}
        </span>
        <span>무료배송</span>
      </div>
    </article>
  );
}

export default Product;
