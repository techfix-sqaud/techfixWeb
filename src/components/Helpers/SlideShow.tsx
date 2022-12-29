import React from 'react'
import styled from 'styled-components';

const SlideShow = () => {
 
    

    return (
        <SlideShowStyled>
          <img src='https://parade.com/.image/t_share/MTkzNzk5NDEyNzA1NjY2NTQ0/happy-new-year-2023.jpg' />
        </SlideShowStyled>
        
    );
  
}


const SlideShowStyled = styled.div`
    img{
        width: 100%;
        height: 20%;
    }
`
export default SlideShow