function ProductDetail() {
  return (
    <main className="productBox">
      <div className="topBox">
        <div className="img">
          <div> `Home > 케이크 > name`</div>
          <img
            src="temp-url"
            alt="상품 이미지 크게 보기"
            className="mainImage"
          />
        </div>
        <div className="goCart">
          <p className="description">testDescription</p>

          <h1 className="productName">80% 10000원 2000원</h1>

          <div className="productInfo">
            <span className="discountRate">20%</span>
            <del className="netPrice">10000원</del>
            <span className="costPrice">8000원</span>
            <hr />
            <p className="deliveryFee">
              3만원 이상 구매 시, <span>무료배송!</span>
            </p>
            <hr />
            <form>
              <div className="quantity">
                <span className="label">수량</span>
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
              <div className="size">
                <span>사이즈</span>
                <div>
                  <button className="option" type="button">
                    사이즈를 선택해주세요.
                  </button>
                </div>
              </div>
              <button className="cartButton">장바구니</button>
            </form>
          </div>
        </div>
      </div>
      <div className="buttonBox">
        <img src="/images/cake.jpg" alt="상품상세" />
      </div>
    </main>
  );
}

export default ProductDetail;
