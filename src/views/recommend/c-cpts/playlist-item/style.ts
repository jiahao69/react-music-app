import styled from "styled-components"

export const PlaylistItemWrapper = styled.div<{ $bg: string }>`
  .playlist-item {
    width: 140px;
    cursor: pointer;
    .playlist-pic {
      width: 100%;
      height: 140px;
      background-image: url(${(props) => props.$bg});
      background-size: cover;

      .mask {
        position: relative;
        width: 140px;
        height: 140px;
        background-position: 0 0;

        .playlist-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 27px;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
          background-position: 0 -537px;
          color: #ccc;
          cursor: auto;

          .listen-count {
            display: flex;
            align-items: center;
            .listen-icon {
              width: 14px;
              height: 11px;
              background-position: 0 -24px;
              margin-right: 5px;
            }
          }

          .play-icon {
            width: 16px;
            height: 17px;
            background-position: 0 0;
            cursor: pointer;

            &:hover {
              background-position: 0 -60px;
            }
          }
        }
      }
    }
    .playlist-title {
      width: 100%;
      margin-top: 8px;
      font-size: 14px;
      line-height: 1.4;
    }
  }
`
