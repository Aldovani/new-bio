import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  max-width: 1212px;
  margin: 0 auto;
  padding-top: 64px;
  display: grid;
  grid-template-columns: 312px 1fr;
  grid-gap: 104px;

  .section {
    margin: 96px 0 80px;

    h2 {
      margin-bottom: 32px;
    }
  }

  .circle {
    background: linear-gradient(
      180deg,
      rgba(36, 39, 75, 0.8) 0%,
      rgba(36, 39, 75, 0) 180.25%
    );
    filter: blur(106.308px);
    width: 577.25px;
    height: 573px;
    position: absolute;

    z-index: -1;

    &-1 {
      left: -108px;
      top: -78px;
    }
    &-2 {
      right: -300px;
      bottom: -100px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 32px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
`;

export const ContainerSocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 32px 20px;

  margin-top: 20px;
`;
