import styled from "styled-components"

export const RecommendPlaylistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`

export const RecommendAlbumWrapper = styled.div`
  height: 184px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  padding: 0 28px;
  box-sizing: border-box;

  .album-gruop {
    display: flex;
    gap: 44px;
    margin-top: 20.5px;
  }
`
export const RecommendRankingWrapper = styled.div`
  display: flex;
  height: 472px;
  width: 920px;
  margin: 0 auto;
  background-image: url(${require("@/assets/images/recommend-top-bg.png")});
`
