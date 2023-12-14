import React from 'react'
import Map from './map'
const Location4 = () => {
    const url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.5979676810525!2d77.48211217888813!3d28.473645365539692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea9cae68659b%3A0xc95b3bd7cf26316e!2sSharda%20Hospital!5e0!3m2!1sen!2sin!4v1675404020390!5m2!1sen!2sin";
    const location="Sharda Hospital";
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
                <td>SH</td>
              </tr>
              <tr>
                <th scope="row">pH</th>
                <td>8.0</td>
              </tr>
              <tr>
                <th scope="row">TDS</th>
                <td>350</td>
              </tr>
              <tr>
                <th scope="row">EC</th>
                <td>0.75</td>
              </tr>
              <tr>
                <th scope="row">Temperature</th>
                <td>35.3</td>
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

export default Location4