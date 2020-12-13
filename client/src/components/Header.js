import styled from 'styled-components';


function Header() {

    const StyledHeader = styled.header`
        display: flex;
        height: 170px;
        background-color: rgba(140, 82, 255, 0.8);
        align-items: center;
        justify-content: center;
    `

    const HeaderDiv = styled.div`
        width: 85%;
        font-family: Roboto, sans-serif;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const NavLayout = styled.nav`
        font-size: 28px;
        font-weight: 700;
    `

    const NavLink = styled.a`
        margin: 1.5em;
        color: white;
        text-decoration: none;
    `

    const HeaderLogo = styled.a`
        color: rgba(255,197,115,1);
        font-size: 48px;
        font-weight: 900;
        text-decoration: none;
    `

    return (
        <StyledHeader>
            <HeaderDiv>
                <HeaderLogo href="">
                    Engage
                </HeaderLogo>
                <NavLayout>
                    <NavLink href="">Home</NavLink>
                    <NavLink href="">Resources</NavLink>
                    <NavLink href="">Sign In</NavLink>
                    <NavLink href="">Join</NavLink>
                </NavLayout>
            </HeaderDiv>
        </StyledHeader>    
    )
}

export default Header;