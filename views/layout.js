module.exports = ({ content }) => {
  return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Shop</title>
          
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
          <link href="/css/main.css" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
        </head>
  
        <body>
          <header>
            <nav class="navbar navbar-bottom ">
              <div class="container navbar-container">
                <div>
                  <a href="/">
                    <h3 class="title">Snack Attack</h3>
                    <h4 class="subtitle">snacks from around the world!</h4>
                  </a>
                </div>
                <div class="navbar-item">
                  <div class="navbar-buttons">
                    <div class="navbar-item">
                      <a href="/"><i class="fa fa-star"></i> Products</a>
                    </div>
                    <div class="navbar-item">
                      <a href="/cart"><i class="fa fa-shopping-cart"></i> Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        
          ${content}
          
          <footer class="footer navbar-top">
                <div class="container navbar-container">
                  <div>
                    <ul class="social">
                      <li>
                        <a href=""><i class="fa fa-phone"></i>+1 555 987 6543</a>
                      </li>
                      <li>
                        <a href=""><i class="fa fa-envelope"></i> shop@myshop.com</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="social">
                      <li><a href=""><i class="fab fa-facebook"></i></a></li>
                      <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
          </footer>
        </body>        
      </html>
    `;
};
