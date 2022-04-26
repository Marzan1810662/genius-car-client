import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    // const {id, name, img, description, price} = service;
    const { _id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='img-fluid w-100' src={img} alt={name} />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            {/* <button onClick={() =>navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button> */}
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;