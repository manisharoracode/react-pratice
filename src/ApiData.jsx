import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
// import image from React;


const ApiData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setData(res.data);
        })
    });

    // console.log("data->>>>>>>", data);
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center my-5">How does it Work</h1>
                    <div className="row">
                        {data.map((e) => {
                            return (
                                <>
                                    <div className="col-12 col-lg-3 text-center work-container-subdiv">
                                        <div className="card p-3">
                                        <h2 className="sub-heading">{e.category}</h2>
                                        <p className="desc">{e.description}</p>
                                        <p>{e.id}</p>
                                        <img src={e.image} className="img-fluid" />
                                        <p>{e.price}</p>
                                        <p>{e.rating.rate} {e.rating.count}</p>
                                        <p>{e.title}</p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
};



export default ApiData;