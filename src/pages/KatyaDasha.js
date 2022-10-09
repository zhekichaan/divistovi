import styled from "styled-components"
import { Box } from "components/Box"
import { images } from "images/diana"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { openModal } from "redux/rootSlice"

export default function Alex() {
    const dispatch = useDispatch()

    return (
        <Box margin="auto" display="flex" flexDirection="column" alignItems="center" marginTop="50px">
            <h2>
                katya i dasha
            </h2> 
            <Container>
            {images.map(image => 
                <Image key={nanoid()} src={image.href} onClick={() => {dispatch(openModal(image.href))}} alt="di"></Image>
            )}
            </Container>
            <Credit>Made with ❤️ by zhekichaan</Credit>
        </Box>
    )
}
export const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`

const Container = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;

    @media (min-width: 1280px) {
        width: 1200px;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 50px;
        grid-row-gap: 30px;
    }
`

const Credit = styled.p`
    margin: 40px;
`