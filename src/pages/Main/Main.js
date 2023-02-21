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
  const [filterSize, setFilterSize] = useState([]);

  const baseUri = API.products;

  useEffect(() => {
    fetch(
      `${baseUri}?size=${filterSize.join()}&offset=0&limit=${(offset + 1) * 8}`
    )
      .then(res => res.json())
      .then(result => setProductList(result.lists));
  }, [offset, filterSize]);

  function leadMore() {
    setOffset(prev => prev + 1);
  }

  function handleCheck(event) {
    const size = event.target.name;
    if (filterSize.includes(size)) {
      setFilterSize(filterSize.filter(element => element !== size));
    } else {
      setFilterSize([...filterSize, size]);
    }
  }

  // useEffect(() => {
  //   console.log(filterSize.join());
  // });

  return (
    <main>
      <Banner />
      <div className="filterBar">
        <form className="filterForm">
          <label>
            <input type="checkbox" name="1" onChange={handleCheck} />
            mini
          </label>
          <label>
            <input type="checkbox" name="2" onChange={handleCheck} />
            1호
          </label>
          <label>
            <input type="checkbox" name="3" onChange={handleCheck} />
            2호
          </label>
          <label>
            <input type="checkbox" name="4" onChange={handleCheck} />
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
