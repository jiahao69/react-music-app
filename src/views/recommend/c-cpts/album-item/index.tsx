import React, { memo } from "react"
import type { FC, ReactNode } from "react"

import { AlbumItemWrapper } from "./style"

interface IProps {
  children?: ReactNode
  item: any
}

const AlbumItem: FC<IProps> = ({ item }) => {
  return (
    <AlbumItemWrapper className="sprite_02" $picbg={item.picUrl}>
      <div className="album-item">
        <div className="album-pic">
          <div className="album-mask sprite_cover">
            <div className="play-icon sprite_icon"></div>
          </div>
        </div>

        <div className="album-msg">
          <div className="album-title">{item.name}</div>
          <div className="album-artist">{item.artist.name}</div>
        </div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
