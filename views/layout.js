module.exports = ({ content }) => {
  return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>snack attack</title>
          <link rel="preload" as="image" href="/images/snack-attack-logo.png" />
          <link rel="icon" type="image/x-icon" href="/images/candyfavicon.jpg">
          <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
          <link href="/css/main.css" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600&display=swap" rel="stylesheet">
        </head>
  
        <body>
        <header>
          <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <h3 class="title">Snack Attack</h3>
              </a>
            </div>

          <div id="navbar-content" class="navbar-menu is-centered ">
            <div class="navbar-end ">
              <div class="navbar-item">
                <div class="buttons">
                    <a  href="/cart">
                      <i class="ri-shopping-bag-line"></i>
                    </a>
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
                        <a href=""><i class="fa fa-envelope"></i> snackattack@snackattack.com</a>
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
