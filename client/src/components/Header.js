import styled from 'styled-components';


function Header() {

    const HeaderLayout = styled.div`
        display: flex;
        justify-content: space-between;
        background: lavender;
    `

    const NavLayout = styled.nav`
        background-color: grey;
    `

    const NavLink = styled.a`
        margin: 2em;
        color: white;
        text-decoration: none;
    `

    const HeaderLogo = styled.a`
        color: rgba(255,197,115,1);

    `

    return (
        <div>
            <HeaderLayout>
                <HeaderLogo>
                    Engage
                </HeaderLogo>
                <NavLayout>
                    <NavLink href="">Home</NavLink>
                    <NavLink href="">Resources</NavLink>
                    <NavLink href="">Share Resource</NavLink>
                </NavLayout>
            </HeaderLayout>
        </div>    
    )
}

export default Header;