import { useState } from 'react';
import axios from 'axios';

function NewResourceForm() {
    const [resourceForm, setResourceForm] = useState({
        title: "",
        description: "",
        category: "",
        resourceUrl: "",
    });


// This function should be moved to own file
    async function postResourceToDB(newResource) {
        try {
            const res = await axios.post("http://localhost:8000/newResource", newResource);
            console.log(res.data);
        }
        catch(err) {
            console.log("error in post resource: " + err);
        }
    }

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        // not sure about this ???
        setResourceForm({
            ...resourceForm,
            [name]: value
        });
    }

    function handleFormSubmit(e) {

        const newResource = {
            title: resourceForm.title,
            description: resourceForm.description,
            category: resourceForm.category,
            resourceUrl: resourceForm.resourceUrl,
        }

        console.log(newResource);
        postResourceToDB(newResource);
    } 

    return (
        <div>
            <form>
                <input name="title" type="text" onChange={handleInputChange}/>
                <input name="description" type="text" onChange={handleInputChange}/>
                <input name="category" type="text" onChange={handleInputChange}/>
                <input name="resourceUrl" type="text" onChange={handleInputChange}/>
            </form>
            <button onClick={handleFormSubmit}>Submit</button>
            {}
        </div>
    )
}

export default NewResourceForm;