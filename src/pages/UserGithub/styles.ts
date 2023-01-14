import styled from 'styled-components'

export const UserGithubContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;

  .container {
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;

    .backgroundImage {
      width: 100%;
      height: 16rem;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;
      background-image: url('https://www.teahub.io/photos/full/16-167748_mac-aurora-cool-backgrounds-designs-wallpapers-hd-cover.jpg');
      z-index: 1;
    }

    .containerInfos {
      display: flex;
      justify-content: center;
      gap: 1.4rem;
      margin: 1rem 4rem;
      z-index: 10;

      .containerInfoUser {
        max-width: 24rem;
        margin-top: 6rem;
        background-color: ${({ theme }) => theme.colors['base-white']};
        border: 0.04rem solid
          ${({ theme }) => theme.colors['brand-primary-light-opacity']};

        .infoUser {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          padding: 0.6rem 0.4rem;
          border-bottom: 0.04rem solid
            ${({ theme }) => theme.colors['brand-primary-light-opacity']};

          img {
            width: 10rem;
            border-radius: 50%;
          }

          h1 {
            color: ${({ theme }) => theme.colors['base-black']};
            font-size: 1.4rem;
            margin: 0.8rem 0;
          }

          p {
            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.1rem;
            color: #777;
            display: block;
            margin-bottom: 1rem;

            svg {
              font-size: 1.2rem;
            }
          }

          span {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.6rem 1rem;
          }
        }

        .baseInfo {
          list-style: none;

          li {
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            border-bottom: 0.04rem solid
              ${({ theme }) => theme.colors['brand-primary-light-opacity']};
            padding: 1rem 1.4rem;
          }

          span {
            font-size: 1.2rem;
            font-weight: 600;
          }
          span.followers {
            color: ${({ theme }) => theme.colors['brand-primary-light']};
          }
          span.following {
            color: ${({ theme }) => theme.colors['brand-secondary']};
          }
        }

        .buttons {
          width: 100%;
          padding: 2rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;

          a,
          .url {
            width: 100%;
            border: 0.04rem solid
              ${({ theme }) => theme.colors['brand-primary-light-opacity']};
          }

          a {
            color: ${({ theme }) => theme.colors['brand-primary-light']};
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.6rem 2rem;
          }

          .url {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;

            span {
              padding: 0.5rem 1rem;
            }

            button {
              padding: 0.5rem 0rem;
              width: 4rem;
              height: 100%;
              border: none;
              border-left: 0.04rem solid
                ${({ theme }) => theme.colors['brand-primary-light-opacity']};
              background-color: transparent;

              svg {
                font-size: 1.2rem;
                color: ${({ theme }) => theme.colors['brand-primary-light']};
              }
            }
          }
        }
      }

      .containerInfoRepos {
        width: 100%;
        margin-top: 6rem;
        flex: 1;
        background-color: ${({ theme }) => theme.colors['base-white']};
        border: 0.04rem solid
          ${({ theme }) => theme.colors['brand-primary-light-opacity']};

        .containerRepos {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      }

      .containerTitle {
        width: 100%;
        padding: 1.2rem;
        border-bottom: 0.04rem solid
          ${({ theme }) => theme.colors['brand-primary-light-opacity']};
      }
    }
  }
`
