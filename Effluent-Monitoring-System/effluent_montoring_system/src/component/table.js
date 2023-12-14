import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import song from "../media/alarm.mp3";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Table = () => {
  const [info, setinfo] = useState({});
  const [state, setState] = useState(400);
  const [voilated, setVoilated] = useState({ active: false, class: "" });
  const alaram = () => {
    const s = new Audio(song);
    s.play();
  };
  const showStatus = () => {
    console.log(state);
    if (state === 200) {
      return <div className="text-success">online</div>;
    } else {
      return <div className="text-danger">offline</div>;
    }
  };
  const checkState = async () => {
    const now = await fetch(
      "https://blynk.cloud/external/api/isHardwareConnected?token=KT18NX3br8X5QG2c2valLHDZnLcvI7kp"
    );
    // console.log(now.status);
    setState(now.status);
  };
  const sendAlert = () => {
    var templateParams = {
      fac_id: "SET",
      time: `${new Date().toLocaleString()}`,
    };

    emailjs
      .send(
        "service_i7zgn3n",
        "template_usom0y9",
        templateParams,
        "Z5jxsI9Am0nUjFoPD"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const pushVoilation = () => {
    const ph = info.v0;
    const tds = info.v1;
    const temperature = info.v2;
    const ec = info.v3;
    // const longitude=newData.v5;
    // const latitude=newData.v6;
    console.log("info");
    console.log(info);
    const fac_id = "SET";
    const data = { ph, tds, temperature, ec, fac_id };
    axios
      .post("https://aeygo.in//post-data.php", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alaram();
  };

  const cal1 = async () => {
    try {
      let url =
        "https://blynk.cloud/external/api/get?token=KT18NX3br8X5QG2c2valLHDZnLcvI7kp&v0&v1&v2&v3&v4&v5&v6";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { v0, v1, v2, v3 } = data;
      const newData = { v0, v1, v2, v3 };
      setinfo(newData);
      checkState();
      if (v0 > 8.5) {
        pushVoilation();
        setVoilated({ active: true, class: "bg-danger text-white" });
        sendAlert();
      } else if (v1 > 2100) {
        pushVoilation();
        setVoilated({ active: true, class: "bg-danger text-white" });
        sendAlert();
      } else if (v2 > 30) {
        pushVoilation();
        setVoilated({ active: true, class: "bg-danger text-white" });
        sendAlert();
      } else {
        setVoilated({ active: false, class: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cal1();
  }, [info]);
  const { v0, v1, v2, v3 } = info;
  const ecv = Math.round(v3 * 100) / 100;
  const tdv = Math.round(v1 * 100) / 100;
  return (
    <div className="col mx-4 left table">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Factory ID</th>
            <th scope="col">pH</th>
            <th scope="col">TDS</th>
            <th scope="col">EC</th>
            <th scope="col">Temperature</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className={voilated.class}>
            <th scope="row">SET</th>
            <td>{v0}</td>
            {/* <td>7</td> */}
            <td>{tdv}</td>
            <td>{ecv}</td>
            <td>{v2}</td>
            <td>{new Date().toLocaleString()}</td>
            <td>{showStatus()}</td>
          </tr>
          <tr>
            <th scope="row">SMSR</th>
            <td>6.5</td>
            <td>170</td>
            <td>0.3</td>
            <td>32.5</td>
            <td>{new Date().toLocaleString()}</td>
            <td className="text-danger">offline</td>
          </tr>
          <tr>
            <th scope="row">SSBS</th>
            <td>7</td>
            <td>200</td>
            <td>0.45</td>
            <td>30.0</td>
            <td>{new Date().toLocaleString()}</td>
            <td className="text-danger">offline</td>
          </tr>
          <tr>
            <th scope="row">SNSR</th>
            <td>5</td>
            <td>170</td>
            <td>0.30</td>
            <td>32.3</td>
            <td>{new Date().toLocaleString()}</td>
            <td className="text-danger">offline</td>
          </tr>
          <tr>
            <th scope="row">SDS</th>
            <td>6.4</td>
            <td>120</td>
            <td>0.23</td>
            <td>27.0</td>
            <td>{new Date().toLocaleString()}</td>
            <td className="text-danger">offline</td>
          </tr>
          <tr>
            <th scope="row">SH</th>
            <td>8</td>
            <td>350</td>
            <td>0.75</td>
            <td>35.3</td>
            <td>{new Date().toLocaleString()}</td>
            <td className="text-danger">offline</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
