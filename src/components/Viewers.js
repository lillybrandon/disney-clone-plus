import React from 'react'
import styled from 'styled-components'


function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1564676115-marvel.mp4" type="video/mp4" preLoad="auto" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
            </video>
            
        </Wrap>
    </Container>
  )
}

export default Viewers


const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0 26px;
    grid-gap : 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(.25, .45, .45, .94) 0s;
    position: relative;
    //overflow: hidden;

    img {
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    video {
        width: 100%;
        height: 100%;
        top: 0;
        position: absolute;
        z-index: 0;
        opacity: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
        rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video { 
            opacity: 1;
        }
    }
`