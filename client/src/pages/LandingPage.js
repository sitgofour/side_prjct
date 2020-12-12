import landingMainImage from '../images/landingPageMain.png';


function LandingPage() {

    const pageWrapperStyle = {
        "height": "100vh",
        "display": "flex",
        "backgroundColor": "lavender",
        "justifyContent": "space-evenly"
    }

    const promptWrapperStyle = {
        "minWidth": "50vw",
        // "backgroundColor": "purple",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
    }

    const imageWrapper = {
        "minWidth": "50vw",
        "backgroundColor": "yellow",
        "alignSelf": "center"
        // "display": "flex",
        // "justifyContent": "center",
    }


    return (
        <div style={pageWrapperStyle}>
            <div style={promptWrapperStyle}>
                <h1>Engage</h1>
                <p>is your one stop shop<br/>
                 for highly rated tools <br/>
                  and resources
                    <span> to enhance <br/>
                    online teaching</span>
                </p>
                <button>Learn More</button>
            </div>
            <div style={imageWrapper}>
                <img src={landingMainImage}/>
            </div>
        </div>
    )
}


export default LandingPage;