import styled from "styled-components"

export const RecommendPlaylistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`

export const RecommendAlbumWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 184px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  padding: 0 26px;
  box-sizing: border-box;
  overflow: scroll;
  .album-list {
    display: flex;
    gap: 40px;
  }
`
export const RecommendRankingWrapper = styled.div`
  display: flex;

  height: 472px;
  width: 920px;
  margin: 0 auto;
  background-image: url(${require("@/assets/images/recommend-top-bg.png")});

  .ranking-column {
    width: 230px;

    .ranking-top {
      display: flex;
      height: 100px;
      padding: 20px 0 0 19px;

      .ranking-cover {
        width: 80px;
        height: 80px;
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
        color: #333;
      }
    }
  }
`
