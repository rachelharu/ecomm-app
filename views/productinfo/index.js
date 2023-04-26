const layout = require('../layout');

module.exports = ({ products, title }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="columns">

            <div class="column info-card">
              <figure>
                <img class="" src="data:image/png;base64, ${product.image}"/>
              </figure>
           </div>

            <div class="column info-card-two">
              product description n publishing and graphic design,
               Lorem ipsum is a placeholder text commonly used to 
               demonstrate the visual form of a document or a typeface 
               without relying on meaningful content. 
               Lorem ipsum may be used as a placeholder before final
                copy is available
            <footer class="info-add-cart">
              <div class="card-content">
                <h3 class="subtitle">${product.title}</h3>
                <h5 class="price-tag">$${product.price}</h5>
              </div>
              <form action="/cart/products" method="POST">
                <input hidden value="${product.id}" name="productId" />
                <button class="button has-icon is-inverted product-underline">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
            </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            
          </div>
        </div>
      </section>
      
      <section>
        <div class="container product-container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">${title}</h2>
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