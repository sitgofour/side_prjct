import { Link } from 'react-router-dom';
import styled from 'styled-components';
import landingMainImage from '../images/landing-hero.png';


function LandingPage() {

    const PageDiv = styled.div`
        display: flex;
        height: 100vh;
        width: 100vw;
        background-color: rgba(140, 82, 255, 0.8);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

    const DescContainer = styled.div` 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 50vw;
        text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    `

    const ContentDiv = styled.div`
        font-family: Roboto, sans-serif;
    `

    const HeroDiv = styled.div`
        background-image: url(${landingMainImage});
        background-size: contain;
        background-repeat: no-repeat;
        min-width: 50vw;
    `

    const Title = styled.h1`
        color: #FFC573;
        font-weigth: 900;
        font-size: 64px;
        line-height: 60px;
    `

    const Paragraph = styled.p`
        color: #ffffff;
        line-height: 60px;
        font-size: 36px;
    `

    const BoldSpan = styled.span`
        font-size: 48px;
        font-weight: 900;
    `

    const Button = styled.button`
        background-color: rgba(255, 193, 105, 0.8);
        color: #300983;
        width: 364px;
        height: 73px;
        border-radius: 15px;
        font-size: 36px;
        font-weight: 900;
        line-height: 50px;
        border: none;
    `
    return (
        <PageDiv>
            <DescContainer>
                <ContentDiv>
                    <Title>Engage</Title>
                    <Paragraph>is your one stop shop<br/>
                    for highly rated tools <br/>
                    and resources <BoldSpan> to enhance <br/>
                        online teaching</BoldSpan>
                    </Paragraph>
                    <Link to="/home">
                        <Button>
                            Learn more
                        </Button>
                    </Link>
                </ContentDiv>
            </DescContainer>
            <HeroDiv>
            </HeroDiv>
        </PageDiv>
    )
}


export default LandingPage;