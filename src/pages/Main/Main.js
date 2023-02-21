import { useEffect, useState } from 'react';
import API from '../../config';
import './Main.scss';
import Banner from './Banner/Banner';
import Product from './Product/Product';

function Main() {
  const [productList, setProductList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filterSize, setFilterSize] = useState([]);
  const [sort, setSort] = useState('');

  const baseUri = API.products;
  const uri = sort
    ? filterSize.length
      ? `${baseUri}?sort=${sort}&size=${filterSize.join()}`
      : `${baseUri}?sort=${sort}`
    : filterSize.length
    ? `${baseUri}?&size=${filterSize.join()}`
    : `${baseUri}?`;

  useEffect(() => {
    fetch(`${uri}&offset=0&limit=${(offset + 1) * 8}`)
      .then(res => res.json())
      .then(result => setProductList(result.lists));
  }, [offset, filterSize, sort]);

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
          <button type="button" onClick={() => setSort('expensive')}>
            가격 높은순
          </button>
          <button type="button" onClick={() => setSort('cheap')}>
            가격 낮은순
          </button>
          <button type="button" onClick={() => setSort('recent')}>
            신상품
          </button>
          <button type="button" onClick={() => setSort('old')}>
            오래된 순
          </button>
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
