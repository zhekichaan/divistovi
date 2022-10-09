import { Box } from "components/Box"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const AppBar = () => {
    return (
        <Header>
            <Box as="nav" display="flex">
                <StyledLink to="/diana">
                        Diana
                </StyledLink>
                <StyledLink to="/sasha-masha">
                        Sasha Masha
                </StyledLink>
                <StyledLink to="/katya-dasha">
                        Katya Dasha
                </StyledLink>
                <StyledLink to="/zhenya">
                        Zhenya
                </StyledLink>
                <StyledLink to="/alex">
                        Mega Alex
                </StyledLink>
            </Box>
        </Header>
    )
}

export const Header = styled.header`
    // padding: 10px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #2a363b;
`

export const StyledLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 20px;
    font-weight: 700;
    color: #2a363b;

    &:hover {
        color: #e84a5f;
    }
    &.active {
        color: #e84a5f;
    }
`


