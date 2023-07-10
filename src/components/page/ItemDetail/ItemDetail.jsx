/* eslint-disable react/prop-types */
const ItemDetail = ({itemDetail}) => {
  return (
    <div className="item-detail">
      <div>
        <h1>{itemDetail.title} </h1>
      </div>
      <div className="item-detail-body">
        <img className="item-detail-img" src={itemDetail.image} alt="Item Image" />
        <div className="item-info-container">
          <h4>{itemDetail.description}</h4>
          <h1> $ {itemDetail.price} </h1>
          <h3> Valoracion: {itemDetail.rating.rate} </h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
