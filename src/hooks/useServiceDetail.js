import { useEffect, useState } from "react";

const useServiceDetail = serviceId => {
    const [service, setservice] = useState({});

    useEffect(() => {
        // const url = `http://localhost:5000/service/${serviceId}`;
        const url = `https://mighty-wildwood-30631.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setservice(data));
    }, [serviceId]);

    return [service];
}

export default useServiceDetail;