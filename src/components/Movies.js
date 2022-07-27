import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTxC261ys_cZ_O3evc1_jQfwVQuPw_bCBJw&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTxC261ys_cZ_ O3evc1_jQfwVQuPw_bCBJw&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTxC261ys_cZ_O3evc1_jQfwVQuPw_bCBJw&usqp=CAU" />
            </Wrap>
            <Wrap>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTxC261ys_cZ_O3evc1_jQfwVQuPw_bCBJw&usqp=CAU" />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94 ) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 72%) 0 40px 58px -16px,
        rgb(0 0 0 / 72%) 0 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`