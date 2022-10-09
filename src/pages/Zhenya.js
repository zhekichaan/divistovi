import styled from "styled-components"
import { Box } from "components/Box"

export default function Zhenya() {
    return (
        <Box width="1200px" margin="auto" display="flex" flexDirection="column" alignItems="center" marginTop="50px">
            <h2>
                zhekichaan (author)
            </h2>
            <Credit>Made with ❤️ by zhekichaan</Credit>
        </Box>
    )
}

const Credit = styled.p`
    margin: 40px;
`