import { useEffect, useState } from 'react';
import './Chef.css'
import Chef from '../Chef/Chef';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);
    return (
        <div className='my-5 py-5'>
            <h1 className='text-center'>Meet Our Chefs</h1>
            <div className='chef-container my-5'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;