import React from "react";
import Map from "./map";
const Location3 = () => {
  const url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.6177687355396!2d77.48299630307078!3d28.472452472831954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0f69e71ca7%3A0x1715124b657ddf3a!2sSchool%20of%20Nursing%20Sciences%20%26%20Research%20(SNSR)%2C%20Sharda%20University!5e0!3m2!1sen!2sin!4v1675403700433!5m2!1sen!2sin";
    const location="School Of Nursing Science";
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
                <td>SNSR</td>
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
};

export default Location3;
