import React, { memo } from "react"
import type { FC, ReactNode } from "react"

import { RankItemWrapper } from "./style"

interface IProps {
  children?: ReactNode
  item: any
}

const RankItem: FC<IProps> = ({ item }) => {
  return (
    <RankItemWrapper>
      <div className="ranking-column">
        <div className="ranking-top">
          <div className="ranking-cover">
            <img src={item.coverImgUrl} alt="" />
          </div>

          <div className="right-layout">
            <h3 className="ranking-name">{item.name}</h3>
          </div>
        </div>

        <div className="song-list">
          {item.tracks.map((v: any, index: number) => (
            <div className="song-item" key={v.id}>
              <div
                className="serial-number"
                style={{ color: index >= 3 ? "#666" : "#c10d0c" }}
              >
                {index + 1}
              </div>
              <div className="song-name">{v.name}</div>
            </div>
          ))}
          <div className="more">
            <span className="more-text"> {`查看全部>`}</span>
          </div>
        </div>
      </div>
    </RankItemWrapper>
  )
}

export default memo(RankItem)
