import styled from "styled-components"
export const CarouseWrapper = styled.div<{ $blurbg?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.$blurbg});
  background-size: 6000px;
  background-position: center;
  .change-arrow {
    font-size: 42px;
    color: #fff;
    cursor: pointer;
  }
  .carousel-content {
    width: 982px;

    .carousel-item img {
      width: 100%;
    }
    .slick-active button {
      background: red !important;
    }
  }
`
