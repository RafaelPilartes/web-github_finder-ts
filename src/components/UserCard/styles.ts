import styled, { css } from 'styled-components'

export const UserCardContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors['base-black']};
  background-color: ${({ theme }) => theme.colors['base-white']};
  padding: 1.4rem 0.9rem;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: 0.4s ease;
  border: 0.1rem solid ${({ theme }) => theme.colors['brand-primary-light']};
  border-bottom: 0.8rem solid
    ${({ theme }) => theme.colors['brand-primary-light']};
  border-radius: 0.8rem;

  /* :hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.04);
  } */

  :hover .seeMore {
    background-color: ${({ theme }) => theme.colors['brand-primary-light']};
    border: 0;
    box-shadow: 0px 2px 5px
      ${({ theme }) => theme.colors['brand-primary-light-opacity']};
    color: #fff;
  }

  img {
    width: 10rem;
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  h4 {
    font-size: 1.4rem;
    margin: 0.8rem 0;
  }

  small {
    font-size: 1rem;
    color: #777;
    display: block;
    margin-bottom: 1rem;
  }

  .containerOtherInfos {
    width: 100%;
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.6rem;

    > .containerInfo {
      width: 100%;
      background-color: transparent;
      border: none;
      padding: 0.6rem;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-transform: uppercase();
      gap: 0.2rem;

      transition: 0.4s ease;

      span {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 800;
        gap: 0.2rem;
        padding: 0.2rem 1rem;
        /* background-color: ${({ theme }) =>
          theme.colors['brand-primary-light']}; */
      }
    }

    .divider {
      height: 3.9rem;
      width: 0.1rem;
      background-color: ${({ theme }) => theme.colors['brand-primary']};
      margin-bottom: 1-------------------------------------------------------------------------------------------qqqqqqqqqq;
    }
  }

  .seeMore {
    width: 100%;
    background-color: ${({ theme }) => theme.colors['base-white']};
    border: 0.1rem solid #ccc;
    border-radius: 0.4rem;
    color: #999;
    padding: 0.6rem 25px;
    margin-top: 1rem;
    transition: 0.4s ease;

    :active {
      background-color: ${({ theme }) =>
        theme.colors['brand-primary-light-opacity']};
    }
  }
`
