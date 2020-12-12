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

    return (
        <div>
            <HeaderLayout>
                <a>
                    Engage
                </a>
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