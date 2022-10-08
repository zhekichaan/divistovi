import { Product } from "components/Product/Product"
import { items } from "items"
import styled from "styled-components"

export const ProductList = () => {
    return (
        <List>
            {items.map(item => 
                <Product key={item.id} name={item.name} price={item.price} description={item.description} image={item.scr} />
            )}
        </List>
    )
}

const List = styled.ul`
    margin-top: 40px;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`
