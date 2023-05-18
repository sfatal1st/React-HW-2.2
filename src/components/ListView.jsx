import ShopItem from './ShopItem';

const ListView = ({ items }) => {
  return (
    <div className="list-view-container">
      {items.map((item, index) => (
        <ShopItem key={index} item={item} />
      ))}
    </div>
  );
}

export default ListView;
