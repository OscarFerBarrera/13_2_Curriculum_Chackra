import "./ImageCard.css";


const ImageCard = ({ imageUrl, children }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={imageUrl} className="card__img" alt=""></img>
      </div>
          
      {children}
    </div>

  )
}


export default ImageCard;