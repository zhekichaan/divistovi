import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const AppBar = () => {
    return (
        <Header>
            <nav>
                <NavLink to="/">
                    <StyledLink>
                        Home
                    </StyledLink>
                </NavLink>
                <NavLink to="/products">
                    <StyledLink>
                        Products
                    </StyledLink>
                </NavLink>
            </nav>
        </Header>
    )
}

export const Header = styled.header`
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #2a363b;
`

export const StyledLink = styled.div`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;

    &:hover {
        color: #e84a5f;
    }
`


