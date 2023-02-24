import './ProductAddDetail.scss';
import { useEffect, useState } from 'react';

function ProductAddDetail({ data, changeQuantity }) {
  const { sizeId, size, price, quantity } = data;
  console.log('quan : ' + quantity);
  const [newCount, setNewCount] = useState(quantity);

  useEffect(() => {
    changeQuantity(sizeId, size, price, newCount);
    console.log('newCount : ' + newCount);
  }, [newCount]);

  return (
    <div className="optionBox">
      <div className="optionName">
        <div>TestName : {size}</div>
        <div>X</div>
      </div>
      <div className="optionNumber">
        <div>
          <button className="newCountBtn" type="button">
            -
          </button>
          <span className="newCount">{newCount}</span>
          <button className="newCountBtn" type="button">
            +
          </button>
        </div>
        <div> {`${(price * newCount).toLocaleString('ko-KR')}원`}</div>
      </div>
    </div>
  );
}

export default ProductAddDetail;
