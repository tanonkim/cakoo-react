import './FilterForm.scss';

function FilterForm() {
  function handleCheck(event) {
    const sizeName = event.target.name;
  }

  return (
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
  );
}

export default FilterForm;
