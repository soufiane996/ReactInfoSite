function CardHeader(props){
          return (
            <div className="card--header">
                    <img src={props.src} className="card--img" />
            </div>
          )
}

export default CardHeader;