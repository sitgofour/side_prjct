

function ResourceCardSmall(props) {

    const { title, link, description, date } = props.resource;

    return (
        <div>
            <h1>title{title}</h1>
            <p>link{link}</p>
            <p>description{description}</p>
            <p>date{date}</p>
        </div>
    )
}

export default ResourceCardSmall;