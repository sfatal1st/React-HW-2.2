const ShopCard = ({ card }) => {
    const { name, price, color, img } = card;
  
    return (
        <div className="card-container">
          <h3>{name}</h3>
          <p>{color}</p>
          <img src={img} alt={name} />
          <div className="card-footer">
            <p>${price}</p>
            <button>Add to cart</button>
          </div>
        </div>
    );
  }
  
  export default ShopCard;