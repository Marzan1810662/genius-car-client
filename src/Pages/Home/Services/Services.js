import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    /*     const services = [
            {id:1,  name: 'oil change',description: '', img: 'https://i.ibb.co/8s0ntw7/kate-ibragimova-b-EGTs-OCn-Hro-unsplash.jpg'},
            {id:1,  name: 'oil change',description: '', img: 'https://i.ibb.co/8s0ntw7/kate-ibragimova-b-EGTs-OCn-Hro-unsplash.jpg'}
        ] */
    /*     const [services, setServices] = useState([]);
        useEffect(() => {
            fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
        },[]) */
    const [services, setServices] = useState([]);
    useEffect(() => {
        /*         fetch('http://localhost:5000/service')
                    .then(res => res.json())
                    .then(data => setServices(data)); */
        fetch('https://mighty-wildwood-30631.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <h1 className='text-primary text-center mt-5'>Our services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;