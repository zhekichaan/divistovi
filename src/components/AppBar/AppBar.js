import { Box } from "components/Box"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { openMenuModal } from "redux/rootSlice"
import styled from "styled-components"

export const AppBar = () => {
    const dispatch = useDispatch()

    return (
        <Header>
            <Box as="nav" display="flex" paddingTop="30px">
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
            <Button onClick={() => {dispatch(openMenuModal())}}>другие (ненужные)</Button>
        </Header>
    )
}

const Button = styled.button`
    padding: 8px;
    position: absolute;
    top: 15px;
    right: 15px;

    @media (min-width: 1280px) {
        display: none;
    }
`

export const Header = styled.header`
display: block;
margin-bottom: 30px;
@media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #2a363b;
}
    
`

export const StyledLink = styled(NavLink)`
    display: none;

    @media (min-width: 1280px) {
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
    }
    
`


