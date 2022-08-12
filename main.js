const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-secondary');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


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
  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isproductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isproductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}

function openProductDetailAside() {
  aside.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Vintage TV',
  price: 200,
  image: 'https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.addEventListener('click', openProductDetailAside);

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
