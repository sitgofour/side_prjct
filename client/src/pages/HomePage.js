import styled from 'styled-components';
import Header from '../components/Header';
import spyGlassIcon from '../images/spyglass-icon.png';


function HomePage() {

    const HomeLayout = styled.div`
        height: 100vh;
        background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), conic-gradient(from 180deg at 50% 50%, #8C52FF 0deg, rgba(140, 82, 255, 0) 176.25deg, #8C52FF 360deg);
    `
    const ContainerDiv = styled.div`
        display: flex;
        justify-content: center;
    `
    const ContentDiv = styled.div`
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Roboto, sans-serif;
    `

    const PageText = styled.p`
        font-size: 36px;
        font-weigth: 500;
        color: rgba(48, 9, 131, 1);
    `

    const BoldSpan = styled.span`
        font-size: 48px;
        font-weight: 900;
        color: rgba(250, 155, 20, 1);
    `

    const InputWrapper = styled.div`
        width: 500px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #000000;
    `

    const SearchInput = styled.input`
        width: 100%;
        background: none;
        height: 24px;
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        border: none;

        &:focus {
            outline: none;
        }
    `

    const SearchButton = styled.button`
        background: rgba(255, 193, 105, 0.8);
        color: rgba(48, 9, 131, 1);
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        width: 358px;
        height: 58px;
        border: none;
        margin-top: 3em;

        &
    `

    return (
        <HomeLayout>
            <Header/>
            <ContainerDiv>
                <ContentDiv>
                    <PageText>
                        Discover and Add the <BoldSpan>Best Resources</BoldSpan>
                        <br/>
                        to Increase Engagement in the Classroom
                    </PageText>
                    <InputWrapper>
                    <img src={spyGlassIcon}/>
                    <SearchInput type="text" placeholder="What kind of tool are you looking for?"/>
                    </InputWrapper>
                    <SearchButton>Explore</SearchButton>
                </ContentDiv>
            </ContainerDiv>
        </HomeLayout>
    )
}


export default HomePage;