import React,{useState,useEffect,setInterval} from 'react'
import Map from './map';
import axios from 'axios';
import song from "../media/alarm.mp3"
const Unit = () => {
    const [info, setinfo] = useState({});
    let date=new Date();
    let timeStr=`${date.getHours()}:${date.getMinutes()}`;
    // const url="https://www.google.com/maps/d/u/0/embed?mid=1OxXwz_qtYJR_QMRqn6ATBfDLnY-IdfI&ehbc=2E312F";
    const url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.8105406243305!2d77.48436847216604!3d28.472252909657655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0ee3bb0c51%3A0xbedf4c07c2ee3!2sSharda%20Engineering%20College!5e0!3m2!1sen!2sin!4v1675403154000!5m2!1sen!2sin";
    const location="School Of Enginnering And Technology";
    const myinfo={url,location};
    const alaram=()=>{
      const s=new Audio(song);
      s.play();
    }
    const pushVoilation=()=>{
        const ph=info.v0;
        const tds=info.v1;
        const temperature=info.v2;
        const ec=info.v3;
        // const longitude=newData.v5;
        // const latitude=newData.v6;
        console.log("info");
        console.log(info);
        const fac_id="SET";
        const data={ph,tds,temperature,ec,fac_id};
        axios.post("https://aeygo.in//post-data.php",data).then(response=>{console.log(response)}).catch(error=>{console.log(error)});
        alaram(); 
    }

  const cal1=async()=>{
    try {
        let url='https://blynk.cloud/external/api/get?token=KT18NX3br8X5QG2c2valLHDZnLcvI7kp&v0&v1&v2&v3&v4&v5&v6';
        const res=await fetch(url);
        const data=await res.json();
        // console.log(data);
        const{v0,v1,v2,v3,v5,v6}=data;
        const newData={v0,v1,v2,v3,v5,v6};
        setinfo(newData);
        if(v0>8.5){
          pushVoilation();
        }
        else if(v1>2100){
            pushVoilation();
        }
        else if(v2>35){
            pushVoilation();
        }
    } catch (error) {
      console.log(error);
    }
  }  
    useEffect(() => {
          cal1();
    },[info])
    const{v0,v1,v2,v3}=info;
    const ecv=Math.round(v3*100)/100;
  return (
    <div className='container-fluid'>
      <div className='row my-5'>
          <div className="col mx-4 left unit">
          <table className="table table-striped">
            <thead className="">
              <tr>
                <th scope="col" colSpan="2" className="text-center bg-success text-white">Online</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Factory ID</th>
                <td>SET</td>
              </tr>
              <tr>
                <th scope="row">pH</th>
                {/* <td>{v0}</td> */}
                <td>7</td>
              </tr>
              <tr>
                <th scope="row">TDS</th>
                <td>{v1}</td>
              </tr>
              <tr>
                <th scope="row">EC</th>
                <td>{ecv}</td>
              </tr>
              <tr>
                <th scope="row">Temperature</th>
                <td>{v2}</td>
              </tr>
              <tr>
                <th scope="row">Time</th>
                <td>{new Date().toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
          <Map info={myinfo} />
      </div>
    </div>
  )
}

export default Unit