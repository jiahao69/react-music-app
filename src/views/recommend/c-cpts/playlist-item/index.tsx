import React, { memo } from "react"
import type { FC, ReactNode } from "react"

import { PlaylistItemWrapper } from "./style"

interface IProps {
  children?: ReactNode
  item: any
}

const PlaylistItem: FC<IProps> = ({ item }) => {
  const parsePlayCount = (count: number) => {
    return count / 10000 >= 1 ? `${Math.ceil(count / 10000)}万` : count
  }

  return (
    <PlaylistItemWrapper $bg={item.picUrl}>
      <div className="playlist-item">
        <div className="playlist-pic">
          <div className="mask sprite_cover">
            <div className="playlist-bottom sprite_cover">
              <div className="listen-count">
                <div className="listen-icon sprite_icon"></div>
                <div>{parsePlayCount(item.playCount)}</div>
              </div>
              <div className="play-icon sprite_icon"></div>
            </div>
          </div>
        </div>
        <div className="playlist-title">{item.name}</div>
        <div></div>
      </div>
    </PlaylistItemWrapper>
  )
}

export default memo(PlaylistItem)
