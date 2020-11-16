import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'

const TitleStyles = styled.div`
  opacity: 0;
  text-align: left;
  margin-top: 4em;
  margin-bottom: 2em;
  .word--container p {
    margin: 0;
    font-size: clamp(16px, 6vw, 6rem);
  }
  .word--1 {
    margin-left: 10%;
  }
  .word--2 {
    margin-left: 20%;
  }
  .word--3 {
    margin-left: 30%;
  }
`
const Title = () => {
  const title = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(title.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      stagger: 2,
    })
  }, [])

  return (
    <TitleStyles ref={title}>
      <div className="word--container word--1">
        <p>Profesjonalizm</p>
      </div>
      <div className="word--container word--2">
        <p>Jakość</p>
      </div>
      <div className="word--container word--3">
        <p>Pasja</p>
      </div>
    </TitleStyles>
  )
}
export default Title