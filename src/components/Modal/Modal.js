import { useEffect } from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { openModal } from "redux/rootSlice"
import { selectImageUrl } from "redux/selectors"
import styled from "styled-components"

const modalRoot = document.querySelector('#modal-root')

export const Modal = () => {
    const dispatch = useDispatch()
    const imageUrl = useSelector(selectImageUrl)

    const onClose = () => {
        dispatch(openModal())
        document.body.style.overflow = 'auto' 
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        };
    });

    const handleKeyDown = (e) => {
        if(e.code === 'Escape') {
            onClose()
        }
    }

    return createPortal(
        <Overlay onClick={onClose}>
                <ImageWrapper src={imageUrl} alt="" />
        </Overlay>, 
        modalRoot
    )
}

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
`

export const ImageWrapper = styled.img`
    max-width: 70%;
    object-fit: contain;
    @media (min-width: 1280px) {
        max-width: 1200px;
        max-height: 900px;
        object-fit: contain;
    }
    

`

