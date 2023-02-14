import './FilterForm.scss';

function FilterForm() {
  return (
    <div className="filterBar">
      <form className="filterForm">
        <label>
          <input type="checkbox" name="mini" />
          mini
        </label>
        <label>
          <input type="checkbox" name="one" />
          1호
        </label>
        <label>
          <input type="checkbox" name="two" />
          2호
        </label>
        <label>
          <input type="checkbox" name="three" />
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
