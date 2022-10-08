import { Box } from "components/Box"
import styled from "styled-components"

export default function Home() {
    return (
        <Box width="1200px" margin="auto" display="flex" flexDirection="column" alignItems="center" marginTop="50px">
            <h2>
                Hey evrivan my name ist Alex, I am proffesional furnitue maker
            </h2> 
            <HomeImage 
                src="https://scontent.cdninstagram.com/v/t1.15752-9/311141542_468920431857889_7958166673357056258_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5a057b&_nc_ohc=YhJWHzXEh_QAX8JPF-x&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVLovLgDlqdSoHYmIhKPf9HQlt5wgh1oG9n2Clanh_rqjQ&oe=6365AEDE"
                alt="" 
                width="300px"
            />
        </Box>
    )
}

export const HomeImage = styled.img`
    margin-top: 20px;
`