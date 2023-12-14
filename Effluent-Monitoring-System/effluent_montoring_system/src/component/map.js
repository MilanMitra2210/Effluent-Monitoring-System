import React from 'react'

const Map = ({info}) => {
  const {url,location}=info;
  return (
    <div className="col mx-4">
        
          <div className="embed-responsive embed-responsive-16by9">
          {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1dGZnnAhOprlG81X_c08KtRohCnmet04&ehbc=2E312F" width="640" height="480"></iframe> */}
          <iframe src={url} width="640" height="480"></iframe>
          </div>
          <div>
            <h4 className="my-2 text-center">{location}</h4>
          </div> 
    </div>  
  )
}

export default Map