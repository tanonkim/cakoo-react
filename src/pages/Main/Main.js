import { useEffect, useState } from 'react';
import API from '../../config';
import './Main.scss';
import Banner from './Banner/Banner';
import FilterForm from './FilterForm/FilterForm';
import Product from './Product/Product';

function Main() {
  const [productList, setProductList] = useState([]);
  const baseUri = API.products;

  useEffect(() => {
    fetch(baseUri)
      .then(res => res.json())
      .then(result => setProductList(result.lists));
  }, []);

  return (
    <main>
      <Banner />
      <FilterForm />
      <div className="productContainer">
        {productList.map(data => (
          <Product key={data.id} data={data} />
        ))}
      </div>
      <button className="leadMore">더보기</button>
    </main>
  );
}

export default Main;
