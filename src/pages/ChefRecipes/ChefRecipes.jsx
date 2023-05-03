import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ChefRecipes.css'
import { useState } from 'react';
import ChefBanner from '../../components/ChefBanner/ChefBanner';

const ChefRecipes = () => {
    const { id } = useParams();
    const [chef, setChef] = useState(null);
    const [recipes, setRecipes] = useState([]);

    console.log(id)


    useEffect(() => {
        fetch(`http://localhost:5000/chefs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setChef(data);
            });
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${id}}`)
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, [id]);


    return (
        <div className='container'>
            <ChefBanner chef={chef}></ChefBanner>
        </div>
    );
};

export default ChefRecipes;