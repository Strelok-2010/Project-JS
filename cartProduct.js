const goods = [
    { title: 'MANGO PEOPLE T-SHIRT', price: 150 },
    { title: 'MANGO PEOPLE T-SHIRT', price: 150 },
    { title: 'MANGO PEOPLE T-SHIRT', price: 150 },
    { title: 'MANGO PEOPLE T-SHIRT', price: 150 },
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><p class="mango">${title}<p><p class="cart-text">${price}</p></div>`;
  };
  
  const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);