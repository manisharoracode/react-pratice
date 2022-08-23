import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';



const ApiData = () => {
    const [data, setData] = useState([]);
    const [selectedBrandCategories, setSelectedBrandCategories] = useState("");
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            // console.log(res);
            setData(res.data);
        })
    });
    // const filterbyBrand = (filterBrandData) =>{
    //     if(!selectedBrandCategories) {
    //         return filterBrandData;
    //     }
    // }

    // console.log("data->>>>>>>", data);
    return (
        <>
            <section>
                <div className="work-container container my-5">
                <h1 className="text-center">Products Services</h1>
                    <Nav fill variant="tabs" defaultActiveKey="/home" className="my-5">
                        <Nav.Item>
                            <Nav.Link eventKey="mens">Men's Clothing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="jewellery">Jewellery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="electronics">Electronics</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="women" >
                                Women's clothing
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="row gy-3">
                        {data.slice(1,5).map((e) => {
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
                                            <p className="work-title">{e.title}</p>
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