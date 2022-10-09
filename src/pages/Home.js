import { Box } from "components/Box"
import styled from "styled-components"
import { images } from "images/images"
import { nanoid } from "@reduxjs/toolkit"

export default function Home() {
    return (
        <Box width="1200px" margin="auto" display="flex" flexDirection="column" alignItems="center" marginTop="50px">
            <h2>
                divistova is the best
            </h2> 
            <Container>
            {images.map(image => 
                <Image key={nanoid()} src={image.href} alt="di"></Image>
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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 30px;
`

const Credit = styled.p`
    margin: 40px;
`