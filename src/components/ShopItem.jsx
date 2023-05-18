const ShopItem = ({ item }) => {
    const { name, price, color, img } = item;
  
    return (
        <div className="list-item-container">
          <img src={img} alt={name} />
          <h3>{name}</h3>
          <p>{color}</p>
          <p className="list-item__price">${price}</p>
          <button>Add to cart</button>
        </div>
    );
  }
  
  export default ShopItem;