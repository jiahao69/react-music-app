import styled from "styled-components"

export const AlbumItemWrapper = styled.div<{ $picbg: string }>`
  display: flex;
  width: 118px;
  height: 150px;
  background-position: -260px 100px;
  .album-item {
    width: 100px;
    cursor: pointer;

    .album-pic {
      position: relative;
      width: 100%;
      height: 100px;
      background-image: url(${(props) => props.$picbg});
      background-size: cover;
      margin-bottom: 7px;
      &:hover .play-icon {
        position: absolute;
        bottom: 5px;
        right: 10px;
        width: 22px;
        height: 22px;
        background-position: 0 -85px;
      }
      .album-mask {
        width: 118px;
        height: 100px;
        background-position: 0 -570px;
      }
    }

    .album-msg {
      width: 100%;
      .album-title,
      .album-artist {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 18px;
      }

      .album-artist {
        color: #666666;
      }
    }
  }
`
