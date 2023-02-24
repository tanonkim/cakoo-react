import { useEffect, useState } from 'react';
import './ProductDetail.scss';
import API from '../../config';
import { useParams } from 'react-router-dom';
import ProductAddDetail from './ProductAddDetail/ProductAddDetail';

function ProductDetail() {
  const [product, setProduct] = useState({
    base_price: 0,
    description: '',
    discount_rate: 0,
    information_images: [],
    name: '',
    product_images: '',
    sizes: [],
  });
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [addedProduct, setAddedProduct] = useState([]);

  const params = useParams();
  const { id } = params; // params.id

  useEffect(() => {
    fetch(`${API.products}/${id}`)
      .then(res => res.json())
      .then(result => {
        setProduct(result.message);
      });
  }, []);

  useEffect(() => {
    console.log(addedProduct);
  }, [addedProduct]);

  const {
    base_price,
    description,
    discount_rate,
    information_images,
    name,
    product_images,
    sizes,
  } = product;

  const countDown = () => {
    setCount(prevState => {
      if (prevState > 1) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  const countUp = () => {
    setCount(prevState => {
      if (prevState < 10) {
        return prevState + 1;
      } else {
        return prevState;
      }
    });
  };

  const handleSize = () => {
    setToggle(!toggle);
  };

  const changeSize = event => {
    const priceBySize = event.target.innerText.split(':');
    const sizeId = event.target.id;
    const size = priceBySize[0];
    const price = priceBySize[1].split('원')[0];
    console.log(price);

    if (addedProduct.map(product => product.size === size).includes(true)) {
      alert('이미 담은 상품입니다.');
    } else {
      setAddedProduct([
        ...addedProduct,
        { sizeId: sizeId, size: size, price: price, quantity: count },
      ]);
    }
    setToggle(!toggle);
  };

  return (
    <main className="productBox">
      <div className="topBox">
        <div className="img">
          <div> Home > 케이크 > {name}</div>
          <img
            src={product_images[0]}
            alt="상품 이미지 크게 보기"
            className="mainImage"
          />
        </div>
        <div className="goCart">
          <p className="description">{description}</p>
          <div className="productInfo">
            <span className="discountRate">
              {Math.round(discount_rate * 100)}%
            </span>
            <del className="netPrice">
              {parseInt(base_price).toLocaleString('ko-KR')}
            </del>
            <span className="costPrice">
              {parseInt(base_price - base_price * discount_rate).toLocaleString(
                'ko-KR'
              )}
              원
            </span>
            <hr />
            <p className="deliveryFee">
              3만원 이상 구매 시, <span>무료배송!</span>
            </p>
            <hr />
            <form>
              <div className="quantity">
                <span className="label">수량</span>
                <span>
                  <button className="countBtn minusBtn" onClick={countDown}>
                    -
                  </button>
                  <span>{count}</span>
                  <button className="countBtn plusBtn" onClick={countUp}>
                    +
                  </button>
                </span>
              </div>
              <div className="quantity">
                <span>사이즈</span>
                <div>
                  <button className="option" type="button" onClick={handleSize}>
                    사이즈를 선택해주세요.
                  </button>
                  <div className={toggle ? 'show' : 'hide'}>
                    {sizes.map(({ size_id, size, price }) => (
                      <button
                        key={size_id}
                        id={size_id}
                        className="sizeOptions"
                        type="button"
                        onClick={changeSize}
                      >{`${size} : ${parseInt(
                        price - price * discount_rate
                      ).toLocaleString('ko-KR')}원`}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                {addedProduct.map((product, index) => (
                  <ProductAddDetail key={index} data={product} name={name} />
                ))}
                <div className="totalPrice">총 주문금액 : 1000원</div>
              </div>
              <button className="cartButton">장바구니</button>
            </form>
          </div>
        </div>
      </div>
      <div className="buttonBox">
        <img src="/images/cake.jpg" alt="상품상세" />
      </div>
    </main>
  );
}

export default ProductDetail;
