import React from 'react'
import { useEffect,useState} from 'react';
import axios from 'axios';
export const Voilations = () => {
    const [trigger, setTrigger] = useState([]);
    const loadTriggers = async () => {
        const result = await axios.get("https://aeygo.in//getdata.php");
        //  console.log(result);
        setTrigger(result.data);
    }
    useEffect(() => {
      loadTriggers();
    }, [trigger]);
    const displayData=trigger.map((curr)=>{
        return(
            
            <tr>
                            <th scope="row">{curr.fac_id}</th>
                            <td>{curr.ph}</td>
                            <td>{curr.tds}</td>
                            <td>{curr.ec}</td>
                            <td>{curr.temperature}</td>
                            <td>{curr.reading_time}</td>
            </tr>
        )
    })
    
    
    return(
            <div className="container">
                <table className="table table-striped bg-warning my-5">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center bg-danger text-white" colSpan="6">List of Voilations</th>
                        </tr>
                        <tr className='bg-danger text-white'>
                            <th scope="col">Factory ID</th>
                            <th scope="col">PH</th>
                            <th scope="col">TDS</th>
                            <th scope="col">EC</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData}
                    </tbody>
                </table>
            </div>
        )
    
}
