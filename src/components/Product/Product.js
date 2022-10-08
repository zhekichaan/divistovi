import styled from "styled-components"

export const Product = ({name, price, description, image}) => {
    return (
        <ProductItem>
            <img src={image} width="250px" alt="" />
            <h3>{name}</h3>
            <p>{price} griven</p>
            <p>Opisanie: {description}</p>
        </ProductItem>
    )
}

const ProductItem = styled.li`
    width: 300px;
`