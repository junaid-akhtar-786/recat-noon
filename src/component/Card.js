


function Card (props){
      return(
            <div className="card" style={{width: '18rem'}}>
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.detail}</p>
              <h3>{props.price}</h3>
              
            </div>
          </div>
    
      );
};


export default Card