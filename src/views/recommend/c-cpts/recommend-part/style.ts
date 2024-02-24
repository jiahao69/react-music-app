import styled from "styled-components"

export const RecommendPartWrapper = styled.div`
  .top-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    border-bottom: 2px solid #c10d0c;
    .part-left {
      display: flex;
      align-items: center;
      .part-left-icon {
        width: 33px;
        height: 33px;
        background-position: -225px -156px;
      }
      .part-title {
        font-size: 20px;
      }
    }

    .part-right {
      display: flex;
      align-items: center;
      cursor: pointer;
      .part-right-tetx {
        margin-right: 4px;
        color: #666666;
      }
      .part-right-icon {
        width: 12px;
        height: 12px;
        background-position: 0px -240px;
      }
    }
  }
`
