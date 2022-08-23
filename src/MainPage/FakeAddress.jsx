import React from 'react';
import axios from 'axios';
import { useState } from "react";

function FakeAddress() {
    const [data, setData] = useState([]);


    const axios = require("axios");

    const options = {
      method: 'POST',
    //   url: 'https://fake-custom-random-data.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1ebbd55c82msh69128f7c91831d8p145237jsn8b647a7fa9dd',
        'X-RapidAPI-Host': 'fake-custom-random-data.p.rapidapi.com'
      },
      data: '{"delay":1000,"statusCode":202,"language":"en","data":{"_repeat_":3,"repeated-object":{"product":"type=productName&repeat=2","color":"type=color"}}}'
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <>
            <div className='row'>
                {data.slice(1).map((e) => {
                    return (
                        <>
                            <div className="col-12 col-lg-3 text-center work-container-subdiv">
                                <div className="card p-3">
                                    {/* <h2 className="sub-heading">{e.buildingNumber}</h2>
                                    <p className="desc">{e.city}</p>
                                    <p>{e.last_name}</p>
                                    <p>{e.location.city}</p>
                                    <p>{e.phone_number}</p> */}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    )


}



export default FakeAddress;