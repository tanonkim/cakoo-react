import { Link } from 'react-router-dom';

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
    </article>
  );
}

export default Product;
