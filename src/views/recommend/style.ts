import styled from "styled-components"

export const RecommendPlaylistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`
export const RecommendAlbumWrapper = styled.div`
  position: relative;
  height: 186px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  padding: 0 28px;
  box-sizing: border-box;

  .album-gruop {
    display: flex;
    gap: 38px;
    margin-top: 28px;
  }

  .arrow-wrapper {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    cursor: pointer;

    &:hover.arrow-left {
      background-position: -280px -75px;
    }

    &:hover.arrow-right {
      background-position: -320px -75px;
    }
  }

  .arrow-left {
    left: 4px;
    background-position: -260px -75px;
  }

  .arrow-right {
    right: 4px;
    background-position: -300px -75px;
  }
`
export const RecommendRankingWrapper = styled.div`
  display: flex;
  height: 472px;
  width: 920px;
  margin: 0 auto;
  background-image: url(${require("@/assets/images/recommend-top-bg.png")});
`
