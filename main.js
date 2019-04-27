(function() {

  //show cart items
  const cartButton = document.querySelector('.cart-button');
  const cart = document.querySelector('.cart');

  cartButton.addEventListener('click', () => {
    event.preventDefault();
    console.log('cart button clicked')
    cart.classList.toggle('show-cart');
  });

  //get gallery items
  const gallery = document.getElementsByClassName('gallery-item');
  const galleryItems = [...gallery];
  
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const modal = item.lastElementChild;
      modal.classList.toggle('hide');
      const shoppingCart = modal.lastElementChild;
      shoppingCart.classList.add('cart-animate');
    });
  });

  //get shopping cart icon
  const cartIcon = document.querySelectorAll('.shopping-cart-icon');
  cartIcon.forEach((icon) => {
    icon.addEventListener('click', function(ev) {
      console.log(ev.target)
      
    });
  });

  //toggle mobile nav
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');
  const mobileNav = document.querySelector('.mobile-nav');

  menuOpen.addEventListener('click', () => {
    mobileNav.classList.add('open-nav');
    mobileNav.classList.remove('toggle');
    menuOpen.classList.add('toggle');
    menuClose.classList.remove('toggle');
  });

  menuClose.addEventListener('click', () => {
    mobileNav.classList.remove('open-nav');
    mobileNav.classList.add('toggle');
    menuOpen.classList.remove('toggle');
    menuClose.classList.add('toggle');
  });

  mobileNav.addEventListener('click', () => {
    mobileNav.classList.add('toggle');
    menuClose.classList.add('toggle');
    menuOpen.classList.remove('toggle');
  });

})();