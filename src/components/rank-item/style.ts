import styled from "styled-components"

export const RankItemWrapper = styled.div`
  .ranking-column {
    width: 230px;

    .ranking-top {
      display: flex;
      height: 120px;
      padding: 20px 0 0 19px;
      box-sizing: border-box;

      .ranking-cover {
        width: 80px;
        height: 80px;
        cursor: pointer;
        img {
          width: 100%;
        }
      }

      .right-layout {
        margin: 6px 0 0 10px;
      }

      .ranking-name {
        margin-bottom: 10px;
        font-size: 14px;
        cursor: pointer;
      }
    }

    .song-item {
      display: flex;
      align-items: center;
      height: 32px;
      margin-left: 15px;

      .serial-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 32px;
        font-size: 16px;
      }

      .song-name {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
    }
    .more {
      text-align: right;
      height: 32px;
      line-height: 32px;
      margin-right: 32px;

      .more-text {
        cursor: pointer;
      }
    }
  }
`
