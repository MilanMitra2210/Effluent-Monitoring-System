import React,{useEffect,setInterval} from 'react'
import Map from './map'
const Location2 = () => {
    const url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.7999219777637!2d77.48354079150586!3d28.47353233341501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0fa1f2de01%3A0xd9966000b2f97683!2sSharda%20School%20of%20Dental%20Science!5e0!3m2!1sen!2sin!4v1675403326991!5m2!1sen!2sin";
    const location="School Of Dental Science";
    const myinfo={url,location};
  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col mx-4 left unit">
          <table className="table table-striped">
            <thead className="">
              <tr>
                <th scope="col" colspan="2" className="text-center bg-danger text-white">
                  Offline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Factory ID</th>
                <td>SDS</td>
              </tr>
              <tr>
                <th scope="row">pH</th>
                <td>4.4</td>
              </tr>
              <tr>
                <th scope="row">TDS</th>
                <td>188</td>
              </tr>
              <tr>
                <th scope="row">EC</th>
                <td>0.03</td>
              </tr>
              <tr>
                <th scope="row">Temperature</th>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">Time</th>
                <td>{new Date().toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
         
        </div>
        <Map info={myinfo}/>
      </div>
    </div>
  );
}

export default Location2