const products = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderProductItem = (title ='product', price = 0) => {
 /* return   `<div class="cellProduct"> 
    <a href="#"><img src="img/product-1.png" alt="product image" class="fetured_img"></img></a>
  <div class="fetured_text"> <a href="#" class="fetured_description">${title}</a>
    <p class="fetured_price"><span class="pink_text">$${price}</span></p>
  </div><a href="#" class="product_add_2">Add to Cart</a> 
  <a href="#" class="product_refresh"></a> 
  <a href="#" class="product_like"></a>
  </div>;*/

     return `<div class="cartProduct__Position">
                <div class="cellProduct">
                <a href="#"><img src="img/ShoppingCart/layers3.jpg" alt="layers3"></a>
            </div>
            <div class="cellProduct cellProduct_super">
                <a href="#" class="link-mango"><p class="mango">${title}</p></a>
                <br>
                <p class="dimension"> <span class="size">Color:</span>  Red</p>  <p class="dimension"> <span class="size">Size:</span> Xll</p>
            </div>
            <div class="cellProduct"><p class="cart-text">$${price}</p></div>
            <div class="cellProduct "><div class="quantity"><p class="cart-text">2</p></div></div>
            <div class="cellProduct"><p class="cart-text">FREE</p></div>
            <div class="cellProduct"><p class="cart-text">$300</p></div>
            <div class="cellProduct"><a href="#"><img src="img/ShoppingCart/knopka.jpg" alt="knopka"></a></div>
            </div>`;
   
  
};

const renderProductList = (list = [{title: 'product', price: 0}]) => {
  let ProductList = list.map(item => renderProductItem(item.title, item.price));
  document.querySelector('.cartProduct').innerHTML = ProductList.join('');
}

renderProductList(products);