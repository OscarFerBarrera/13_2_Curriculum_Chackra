import "./ImageCard.css";


const ImageCard = ({imageUrl, children}) => {
  return (
    <div className="Card">
      <img src={imageUrl} className="Card__img" alt=""></img>
      {children}
    </div>

  )
}


export default ImageCard;