import './ProductAddDetail.scss';

function ProductAddDetail({ data }) {
  const { sizeId, size, price, quantity } = data;

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
          <span className="newCount">1</span>
          <button className="newCountBtn" type="button">
            +
          </button>
        </div>
        <div> {price}</div>
      </div>
    </div>
  );
}

export default ProductAddDetail;
