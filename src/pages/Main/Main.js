import { useEffect, useState } from 'react';
import API from '../../config';
import './Main.scss';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import FilterForm from './FilterForm/FilterForm';

function Main() {
  const [productList, setProductList] = useState([]);
  const baseUri = API.products;

  // const {
  //   id,
  //   name,
  //   price,
  //   discount_rate,
  //   discount_price,
  //   description,
  //   sizes,
  //   thumbnail,
  // } = data;

  useEffect(() => {
    fetch(baseUri)
      .then(res => res.json())
      .then(result => setProductList(result.lists));
  }, []);
  // console.log(data);

  return (
    <main>
      <Banner />
      <FilterForm />
      <div className="productContainer" />
      <button className="leadMore">더보기</button>
    </main>
  );
}

export default Main;
