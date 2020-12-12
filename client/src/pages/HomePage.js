import styled from 'styled-components';
import Header from '../components/Header';


function HomePage() {

    const HomeLayout = styled.div`
        background-color: green
    `

    const H1 = styled.h1`
        color: grey
    `

    return (
        <HomeLayout>
            <Header/>
        </HomeLayout>
    )
}


export default HomePage;