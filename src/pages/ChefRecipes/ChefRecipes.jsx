import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ChefRecipes.css'
import { useState } from 'react';
import ChefBanner from '../../components/ChefBanner/ChefBanner';
import Recipe from '../../components/Recipe/Recipe';

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
            <h1 className='mt-5 pt-5 text-center mb-5'>{chef?.name}&apos;s Main recipes: </h1>
            <div className='recipes mb-5 pb-5'>
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} className="recipe"></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;