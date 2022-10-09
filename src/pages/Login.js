// import { Box } from "components/Box"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setInput(e.currentTarget.value)
    }

    const submitHandler = (e) => {
        if(input === "putinhuilo") {
            navigate(`/home`)
        } else {
            alert("pishov nahuy")
        }
        setInput('')
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
