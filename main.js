const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);


function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}

/* <div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-card">
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
</div>
 */


const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Vintage TV',
  price: 200,
  image: 'https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Mechanical Keyboard',
  price: 300,
  image: 'https://preview.redd.it/zzoxvy7puy131.jpg?auto=webp&s=a9132841a3ff076e13e97503d6568180e3628fa7',
});

for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');

  const productAddtoCartImg = document.createElement('img');
  productAddtoCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');


  productInfoFigure.appendChild(productAddtoCartImg);
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);
  productCard.appendChild(productImg);
  productCard.append(productInfo);
  cardsContainer.appendChild(productCard);
}
