

module.exports = ({ content }) => {
  return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>snack attack</title>
          <link rel="preload" as="image" href="/images/snack-attack-logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600&display=swap" rel="stylesheet">
          <link rel="icon" type="image/x-icon" href="/images/candyfavicon.jpg">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
          <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
          <link href="/css/main.css" rel="stylesheet"> 

          <script>
            window.addEventListener('DOMContentLoaded', () => {
              const navbarBurger = document.querySelector('.navbar-burger');
              const navbarMenu = document.querySelector('.navbar-menu');

              navbarBurger.addEventListener('click', () => {
                navbarBurger.classList.toggle('is-active');
                navbarMenu.classList.toggle('is-active');
              });
            });
            </script>
          <\head>

      <body>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <h3 class="title">snack attack</h3>
          </a>

         <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start reveal-background">
          <a class="navbar-item" href="/categories/candy">
            Candy
          </a>

          <a class="navbar-item" href="/categories/drink">
            Drinks
          </a>

          <a class="navbar-item" href="/categories/snack">
            Snacks
          </a>

        </div>
        </div>

        <div class="navbar-end">
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

        
      ${content}
          
      <footer class="footer navbar-top">
                <div class="container navbar-container">
                  <div>
                    <ul class="social">
                      <li>
                        <a href="">About</a>
                      </li>
                      <li>
                      <a href="">Careers</a>
                    </li>
                      <li>
                        <a href="">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="social">
                      <li><a href="">Order Status</li>
                      <li><a href="">Returns</a></li>
                      <li><a href="">Customer Support</a></li>
                    </ul>
                  </div>
                </div>
      </footer>
      </body>        
      </html>
    `;
};


