<h1 align="center">🍔 FoodDelivery App</h1>

<p align="center">
  Um aplicativo moderno de <strong>Delivery de Comida</strong> construído com <strong>React Native</strong>, <strong>Expo</strong> e <strong>NativeWind</strong> (Tailwind CSS para React Native).
</p>

<hr />

<h2>📱 Tecnologias Utilizadas</h2>
<ul>
  <li><strong>React Native</strong> – Framework para apps nativos com React</li>
  <li><strong>Expo</strong> – Plataforma para desenvolvimento rápido de apps</li>
  <li><strong>NativeWind</strong> – Tailwind CSS adaptado para React Native</li>
  <li><strong>TypeScript</strong> – Tipagem opcional, mas recomendada</li>
</ul>

<h2>🚀 Funcionalidades</h2>
<ul>
  <li>🔍 Listagem de restaurantes e pratos</li>
  <li>🛒 Adição ao carrinho e gerenciamento de pedidos</li>
  <li>📍 Rastreamento em tempo real do pedido</li>
</ul>

<h2>⚙️ Como Rodar o Projeto</h2>

<h3>1️⃣ Pré-requisitos</h3>
<ul>
  <li>Node.js (v16 ou superior)</li>
  <li>Expo CLI instalado globalmente:</li>
</ul>

<pre><code>npm install -g expo-cli</code></pre>

<h3>2️⃣ Clonar o projeto</h3>
<pre><code>git clone [https://github.com/seu-usuario/food-delivery-app.git
cd food-delivery-app](https://github.com/NicolyKey/my-expo-app.git)</code></pre>

<h3>3️⃣ Instalar as dependências</h3>
<pre><code>npm install</code></pre>

<h3>4️⃣ Rodar o app com Expo</h3>
<pre><code>npx expo start</code></pre>
<p>Isso abrirá o Metro Bundler no navegador. Você pode:</p>
<ul>
  <li>📱 Escanear o QR Code com o app <strong>Expo Go</strong> no seu celular</li>
  <li>🖥️ Executar em emulador Android/iOS (se configurado)</li>
</ul>

<h2>🎨 Estilização com NativeWind</h2>
<p>Este projeto usa o <strong>NativeWind</strong> para estilização com Tailwind. Instalação:</p>
<pre><code>npm install nativewind</code></pre>

<p>Configure no <code>babel.config.js</code>:</p>
<pre><code>plugins: ["nativewind/babel"]</code></pre>

<p>Crie o arquivo <code>tailwind.config.js</code> com o conteúdo:</p>
<pre><code>/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>

<h2>📂 Estrutura de Pastas</h2>
<pre>
src/
├── components/      # Componentes reutilizáveis
├── screens/         # Telas principais do app
├── navigation      # Configuração de rotas
├── assets/          # Imagens e fontes
└── utils/           # Funções utilitárias
</pre>

<h2>🤝 Contribuindo</h2>
<p>Contribuições são bem-vindas! Abra uma issue ou envie um pull request com melhorias ou correções.</p>

<hr />

