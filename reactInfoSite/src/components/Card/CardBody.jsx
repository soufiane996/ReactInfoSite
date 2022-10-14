function CardBody(props){
      
        return (
            <div className="card-body-container">  
              <div className="general--info">
               <h1>{props.name}</h1>
               <h4>{props.position}</h4>
               <p>{props.email}</p>
               </div>
               <div className="button-container">
                  <button className="btn btn-light"> <i class="fa fa-envelope"></i>  Email   </button>  
                  <button className="btn btn-primary"> <i className="fa fa-linkedin">  LinkedIn  </i></button>
               </div>
               <div className="additional--info">
                <h3>About</h3>
                <p>{props.aboutSection}</p>
                <h3>Interests</h3>
                <p>{props.interestSection}</p>
               </div>
            </div>
        )


}

export default CardBody;