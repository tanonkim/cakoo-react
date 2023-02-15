import { useEffect, useState } from 'react';
import API from '../../config';
import './Main.scss';
import Banner from './Banner/Banner';
import FilterForm from './FilterForm/FilterForm';
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

  return (
    <main>
      <Banner />
      <FilterForm />
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
