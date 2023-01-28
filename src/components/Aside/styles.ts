import styled from "styled-components";

export const Container = styled.aside`
  .containerContent {
    position: sticky;
    top: 64px;
  }

  img {
    border-radius: 12px;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 100%;
    margin: 32px 0 16px;
  }
  P {
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    width: 306px;

    color: ${({ theme }) => theme.colors.gray[400]};
  }
  h3 {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.gray[300]};
    margin: 24px 0 56px;
    transition: color 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  span {
    font-weight: 500;
    font-size: 1rem;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.gray[500]};
  }

  @media (max-width: 900px) {
    margin-top: 64px;
    .containerContent {
      position: relative;
      inset: 0;

      display: flex;
      gap: 32px;
      h1 {
        margin-top: 0;
      }
    }
  }
  @media (max-width: 500px) {
    .containerContent {
      display: block;
      h1 {
        margin-top: 32px;
      }
    }
  }
`;
