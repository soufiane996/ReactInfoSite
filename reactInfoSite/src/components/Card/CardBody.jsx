function CardBody(props){
      
        return (
            <>  
              <div>
               <h1>{props.name}</h1>
               <h4>{props.position}</h4>
               <p>{props.email}</p>
               </div>
               <div>
                  <button> Email </button>  
                  <button> LinkedIn</button>
               </div>
               <div>
                <h3>About</h3>
                <p>{props.aboutSection}</p>
                <h3>Interests</h3>
                <p>{props.interestSection}</p>
               </div>
            </>
        )


}

export default CardBody;