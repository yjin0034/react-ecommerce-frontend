import data from "./data";

function App() {
  return (
    <div className='App'>
      <header>
        <a href='/'>Mancity Goods Shop</a>
      </header>
      <main>
        <h1>추천 상품</h1>
        <div className='products'>
          {data.products.map((product) => (
            <div className='product' key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className='product-info'>
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>{product.price}원</strong>
                </p>
                <button>장바구니 담기</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
