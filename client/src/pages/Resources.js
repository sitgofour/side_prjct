import { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import ResourceCardSmall from '../components/ResourceCardSmall.js';
import axios from 'axios';


function Resources() {

    const [allResources, setAllResources] = useState([]);

    // move to .env
    const ServerURl = "http://localhost:8000";

    async function getAllResources() {
        const resources = await axios.get(`${ServerURl}/getAllResources`);
        return resources.data;
    }

    useEffect(() => {
        getAllResources()
        .then(resources => setAllResources(resources))
        .catch(e => console.log(e));
    }, [])

    return (
        <div>
            <Header />
            {allResources.map(r => {
                return <ResourceCardSmall resource={r}/>
            })}
        </div>
    )
}

export default Resources;