import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 245px;
  height: 353px;
  border-radius: 24px;
  img {
    border-radius: 24px;
  }

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[100]};
    text-decoration: none;
    font-weight: 700;
    display: block;
    margin-top: 8px;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  &:hover {
    div {
      opacity: 1;
      visibility: visible;
      border-color: ${({ theme }) => theme.colors.gray[500]};
    }
  }
`;

export const Details = styled.div`
  border: 1px solid transparent;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 24px;
  padding: 32px 16px;
  transition: all 0.2s ease;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.gray[100]};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 100%;
    

    color: ${({ theme }) => theme.colors.gray[300]};
  }

  a{
    margin-top: 16px;
  }
`;

export const Label = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 100%;

  color: ${({ theme }) => theme.colors.gray[100]};

  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  padding: 4px;
  margin: 8px 0 16px;
`;
