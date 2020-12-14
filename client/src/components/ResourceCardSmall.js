

function ResourceCardSmall(props) {

    const { title, description, category, resourceUrl, _id } = props.resource;

    return (
        <div>
            <h1>title{title}</h1>
            <p>link{resourceUrl}</p>
            <p>category{category}</p>
            <p>description{description}</p>
            <p>id{_id}</p>
        </div>
    )
}

export default ResourceCardSmall;