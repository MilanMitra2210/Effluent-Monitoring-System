import React from 'react'
import Table from './table'
import Map from './map'
import Unit from './unittable'
import Location2 from './location2'
const Container = () => {
  const url="https://www.google.com/maps/d/u/0/embed?mid=1dGZnnAhOprlG81X_c08KtRohCnmet04&ehbc=2E312F"
  const location="Knowledge Park III";
  const info={url,location};
  return (
    <div className='container-fluid'>
      <div className='row my-5'>
          <Table/>
          <Map info={info}/>
      </div>
    </div>
  )
}

export default Container