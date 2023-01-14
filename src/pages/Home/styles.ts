import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes searchAnim {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(6px, -6px);
    }

    40% {
      transform: translate(6px, 6px);
    }

    60% {
      transform: translate(-6px, 6px);
    }

    80% {
      transform: translate(-6px, -6px);
    }

    100% {
      transform: translate(0);
    }
  }

  .container {
    width: 100%;
    max-width: 36rem;
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 2rem 0;

    display: flex;
    flex-direction: column;

    .containerTitle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.4rem;

      margin-bottom: 2rem;

      h1 {
        color: ${({ theme }) => theme.colors['brand-primary']};
        font-size: 1.5rem;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;

        svg {
        }
      }
      p {
        color: ${({ theme }) => theme.colors['brand-primary-light']};
        font-size: 1.06rem;
        font-weight: 400;
      }
    }

    .containerListCards {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .illustrationImg {
      animation: searchAnim 4s ease 0s infinite alternate none;
    }
  }
`
