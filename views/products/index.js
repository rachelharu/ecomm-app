const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="column is-one-quarter">
        <a href="/productinfo/${product.title}">
          <div class="card product-card product-grow">
            <figure>
              <img class="mobile-image" src="data:image/png;base64, ${product.image}"/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">${product.title}</h3>
              <h5 class="price-tag">$${product.price}</h5>
            </div>
            <footer class="card-footer">
              <form action="/cart/products" method="POST">
                <input hidden value="${product.id}" name="productId" />
                <button class="button has-icon is-inverted product-underline">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
          </div>
          </a>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            <img class="big-logo" src="/images/snack-attack-logo.png" />
          </div>
        </div>
      </section>
      
      <section>
        <div class="container product-container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Discover our products</h2>
                <div class="columns products product-img">
                  ${renderedProducts}  
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `
  });
};