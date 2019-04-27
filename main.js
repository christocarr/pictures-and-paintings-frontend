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

