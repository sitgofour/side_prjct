import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Category() {
    const [ resourcesInCategory, setResourcesInCategory ] = useState(null);
    // const [ category, setCategory ] = useState(null);
    let { categoryName } = useParams();

    useEffect(() => {
        async function getResourcesInCategory(categoryName) {
            const { data } = await Axios.get(`http://localhost:8000/api/categories/${categoryName}`);
            console.log(data);
        }
        getResourcesInCategory(categoryName)
        .then(resources => setResourcesInCategory(resources))
        .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <h1>Category Name</h1>
            <h2>{categoryName}</h2>
            <h3>{resourcesInCategory}</h3>
        </div>

    )
}

export default Category;