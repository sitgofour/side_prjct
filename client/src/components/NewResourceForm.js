import { useState } from 'react';
import axios from 'axios';

function NewResourceForm() {

    const [resourceTitle, setResourceTitle] = useState("");
    const [resourceLink, setResourceLink] = useState("");
    const [resourceDesc, setResourceDesc] = useState("");

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
        const target = e.target.name;
        const val = e.target.value;

        if(target === "title") setResourceTitle(val);
        if(target === "link") setResourceLink(val);
        if(target === "description") setResourceDesc(val);
    }

    function handleFormSubmit() {
        const newResource = {
            newTitle: resourceTitle,
            newLink: resourceLink,
            newDescription: resourceDesc
        }
        postResourceToDB(newResource);
    } 

    return (
        <div>
            <form>
                <input name="title" type="text" onChange={handleInputChange}/>
                <input name="link" type="text" onChange={handleInputChange}/>
                <input name="description" type="text" onChange={handleInputChange}/>
            </form>
            <button onClick={handleFormSubmit}>Submit</button>
            <p>{resourceTitle}</p>
            <p>{resourceLink}</p>
            <p>{resourceDesc}</p>
        </div>
    )
}

export default NewResourceForm;