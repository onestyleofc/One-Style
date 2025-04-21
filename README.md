# One-Style
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OneStyle - Loja de Roupas</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>OneStyle</h1>
    <nav>
      <a href="#produtos">Produtos</a>
      <a href="#contato">Contato</a>
      <button onclick="toggleCart()">Carrinho (<span id="cart-count">0</span>)</button>
    </nav>
  </header>

  <section id="hero">
    <h2>Moda urbana, confortável e acessível.</h2>
    <p>Descubra os lançamentos da OneStyle</p>
    <a href="#produtos" class="btn">Ver Produtos</a>
  </section>

  <section id="produtos">
    <h2>Produtos</h2>
    <div class="produtos-grid">
      <div class="produto">
        <img src="https://via.placeholder.com/200" alt="Camiseta Básica" />
        <h3>Camiseta Básica</h3>
        <p>R$ 59,90</p>
        <button onclick="addToCart('Camiseta Básica', 59.90)">Comprar</button>
      </div>
      <div class="produto">
        <img src="https://via.placeholder.com/200" alt="Moletom Oversized" />
        <h3>Moletom Oversized</h3>
        <p>R$ 129,90</p>
        <button onclick="addToCart('Moletom Oversized', 129.90)">Comprar</button>
      </div>
      <div class="produto">
        <img src="https://via.placeholder.com/200" alt="Calça Cargo" />
        <h3>Calça Cargo</h3>
        <p>R$ 99,90</p>
        <button onclick="addToCart('Calça Cargo', 99.90)">Comprar</button>
      </div>
    </div>
  </section>

  <section id="contato">
    <h2>Fale com a gente</h2>
    <form>
      <input type="text" placeholder="Seu nome" required />
      <input type="email" placeholder="Seu e-mail" required />
      <textarea placeholder="Mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>

  <div id="cart" class="hidden">
    <h3>Seu Carrinho</h3>
    <ul id="cart-items"></ul>
    <p>Total: R$ <span id="total">0.00</span></p>
    <button onclick="checkout()">Finalizar Compra</button>
  </div>

  <footer>
    <p>&copy; 2025 OneStyle. Todos os direitos reservados.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
