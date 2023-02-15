import { useEffect, useState } from 'react';
import API from '../../config';
import './Main.scss';
import Banner from './Banner/Banner';
import Product from './Product/Product';

// http://0.0.0.0:8000/products?sort=recent&limit=8&offset=10
// products: `${BASE_URL}/products`,

function Main() {
  const [productList, setProductList] = useState([]);
  const [offset, setOffset] = useState(0);

  const baseUri = API.products;

  useEffect(() => {
    fetch(`${baseUri}?offset=0&limit=${(offset + 1) * 8}`)
      .then(res => res.json())
      .then(result => setProductList(result.lists));
  }, [offset]);

  function leadMore() {
    setOffset(prev => prev + 1);
  }

  function handleCheck(event) {
    console.log(event);
  }

  return (
    <main>
      <Banner />
      <div className="filterBar">
        <form className="filterForm">
          <label>
            <input type="checkbox" name="mini" onChange={handleCheck} />
            mini
          </label>
          <label>
            <input type="checkbox" name="one" onChange={handleCheck} />
            1호
          </label>
          <label>
            <input type="checkbox" name="two" onChange={handleCheck} />
            2호
          </label>
          <label>
            <input type="checkbox" name="three" onChange={handleCheck} />
            3호
          </label>
        </form>
        <div>
          <button type="button">가격 높은순</button>
          <button type="button">가격 낮은순</button>
          <button type="button">신상품</button>
          <button type="button">오래된 순</button>
        </div>
      </div>
      <div className="productContainer">
        {productList.map(data => (
          <Product key={data.id} data={data} />
        ))}
      </div>
      <div className="buttonBox">
        <button className="leadMore" onClick={leadMore}>
          더보기
        </button>
      </div>
    </main>
  );
}

export default Main;
