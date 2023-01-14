import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  background-color: rgb(255, 255, 255);

  border-bottom: 0.01rem solid
    ${({ theme }) => theme.colors['brand-primary-light-opacity']};

  img {
    width: 18rem;
    cursor: pointer;
  }
`
