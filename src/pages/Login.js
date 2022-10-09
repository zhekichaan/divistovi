// import { Box } from "components/Box"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { openModal } from "redux/rootSlice"
import styled from "styled-components"

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState('')

    const changeHandler = (e) => {
        setInput(e.currentTarget.value)
    }

    const submitHandler = (e) => {
        if(input === "putinhuilo") {
            navigate(`/diana`)
        } else {
            alert("pishov nahuy")
        }
        setInput('')
    }

    const imageClickHandler = () => {
        console.log(123);
        dispatch(openModal("https://iili.io/Qr1CyG.jpg"))
    }

    return (
        <Form onSubmit={submitHandler}>
            <h2>Введите парол</h2>
            <Input 
            type="text" 
            onChange={changeHandler}
            value={input}
            />
            <button type="submit">вопрос.. как ти тма оказалас</button>
            <Image src="https://iili.io/QrlTN4.jpg" width="250px" alt="" onClick={imageClickHandler} />
        </Form> 
    )
}

const Form = styled.form`
    display: flex;
    margin: 160px auto;
    width: 300px;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    padding: 5px 15px;
    margin-bottom: 15px;
    margin-top: 10px;
`

const Image = styled.img`
    margin-top: 30px;
`



