const RestaurantCard = (props) => {
    const { resData } = props;
    const imageUrl = resData.info.image.url.split('/').join('/');
    return (
        <div className="card">
        <img src={imageUrl} alt="Avatar"/>
        <div className="card-info">
            <div className="title">
                <h4 className="name"><b>{resData.info.name}</b></h4>
                <p className="rating">{resData.info.rating.rating_text}</p>
            </div>
            <div className="cuisine-info">
                <p className="cuisine">{resData.info.cuisine.map(ele => ele.name).join(', ')}</p>
                <p className="cost">{resData.info.costText.text}</p>
            </div>
            <p className="delivery-time">{resData?.order?.deliveryTime}</p>
        </div>
        </div>
    )
  }

  export default RestaurantCard;