import styled, { css } from 'styled-components'

type ReposContainerProps = {
  colorTopic: string
}

export const ReposContainer = styled.button<ReposContainerProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;

  padding: 1rem 1rem;
  border: none;
  background-color: transparent;
  border-bottom: 0.04rem solid
    ${({ theme }) => theme.colors['brand-primary-light-opacity']};

  cursor: pointer;
  transition: 0.4s ease;

  :hover {
    background-color: #f1f1f183;
  }

  .name {
    color: ${({ theme }) => theme.colors['brand-primary']};
  }

  .description {
    font-size: 1rem;
  }

  .language {
    color: ${({ theme }) => theme.colors['base-white']};
    font-size: 0.9rem;
    font-weight: 600;

    max-width: 6rem;

    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    background-color: ${({ theme }) => theme.colors['brand-primary-light']};
  }

  .stargazers_count {
    font-size: 1rem;
    font-weight: 500;

    span {
      color: ${({ theme }) => theme.colors['brand-secondary-light']};
      font-weight: 600;
    }
  }

  .updated_at {
    font-size: 1rem;
    font-weight: 500;

    span {
      color: ${({ theme }) => theme.colors['brand-primary']};
      font-weight: 600;
    }
  }

  .topic {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      font-size: 0.9rem;
      padding: 0.4rem;
      border-radius: 0.4rem;

      ${({ colorTopic }) =>
        css`
          border: 0.06rem solid ${colorTopic};
        `}
    }
  }
`
