function CardHeader(props){
          return (
            <div className="card--header">
                    <img src={props.userPhoto} className="card--img" />
            </div>
          )
}

export default CardHeader;