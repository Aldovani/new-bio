import styled, { css } from "styled-components";

interface SocialLink {
  socialBorderColor?: string;
  socialFillColor?: string;
}
interface ContainerIcon {
  iconFill: string;
}

export const SocialLink = styled.a<SocialLink>`
  display: flex;
  text-decoration: none;
  gap: 16px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  background: transparent;
  transition: all 0.2s ease;

  span {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 30px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  &:hover {
    ${({ socialFillColor, socialBorderColor }) => css`
      background: linear-gradient(
        180deg,
        ${socialFillColor} 0%,
        rgba(5, 62, 255, 0) 100%
      );
      border-color: ${socialBorderColor};
    `}
  }

  &:hover {
    ${({ socialFillColor, socialBorderColor }) => css`
      background: ${socialFillColor};
      border-color: ${socialBorderColor};
    `}
  }
`;

export const ContainerIcon = styled.div<ContainerIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  border-radius: 8px;

  background: ${({ iconFill }) => css`
  linear-gradient(
    180deg,${iconFill} 0%,
    rgba(5, 62, 255, 0) 100%
  );

`};
`;
