import { useEffect } from "react"
import { createPortal } from "react-dom"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { openMenuModal } from "redux/rootSlice"
import styled from "styled-components"

const modalRoot = document.querySelector('#modal-root')

export const MenuModal = () => {
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(openMenuModal())
    }

    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown)
    //     };
    // });

    // const handleKeyDown = (e) => {
    //     if(e.code === 'Escape') {
    //         onClose()
    //     }
    // }

    return createPortal(
        <Overlay>
            <BackLink onClick={onClose}>nazad</BackLink>
            <LinksWrapper>
            <StyledLink to="/diana" onClick={onClose}>
                        Diana
                </StyledLink>
                <StyledLink to="/sasha-masha" onClick={onClose}>
                        Sasha Masha
                </StyledLink>
                <StyledLink to="/katya-dasha" onClick={onClose}>
                        Katya Dasha
                </StyledLink>
                <StyledLink to="/zhenya" onClick={onClose}>
                        Zhenya
                </StyledLink>
                <StyledLink to="/alex" onClick={onClose}>
                        Mega Alex
                </StyledLink>
            </LinksWrapper>
        </Overlay>, 
        modalRoot
    )
}

const BackLink = styled.button`
    padding: 8px;
    position: absolute;
    top: 310px;
    right: 55px;
    
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-bottom: 15px;
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

&:hover,
&:active {
  background-color: initial;
  background-position: 0 0;
  color: #FF4742;
}

&:active {
  opacity: .5;
}
    
`

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
    max-width: 60%;
    object-fit: contain;
    @media (min-width: 1280px) {
        max-width: 1200px;
        max-height: 900px;
        object-fit: contain;
    }
    

`

