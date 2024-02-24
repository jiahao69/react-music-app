import React, { memo, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"

import { getRecommendPlaylist, getRecommendAlbumList } from "@/service/modules"

// cpts
import CarouselCpt from "./c-cpts/carouse-cpt"
import RecommendPart from "./c-cpts/recommend-part"
import PlaylistItem from "@/components/playlist-item"
import AlbumItem from "@/components/album-item"

import { RecommendPlaylistWrapper, RecommendAlbumWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [playlist, setPlaylist] = useState<any[]>([])
  const [albumList, setAlbumList] = useState<any[]>([])

  const _getRecommendPlaylist = async () => {
    const { result } = await getRecommendPlaylist()
    console.log("getRecommendPlaylist", result)
    setPlaylist(result.slice(0, 10))
  }

  const _getRecommendAlbumList = async () => {
    const { albums } = await getRecommendAlbumList()
    console.log("getRecommendAlbumList", albums)
    setAlbumList(albums)
  }

  const handleMoreClick = () => {
    console.log("more")
  }

  useEffect(() => {
    _getRecommendPlaylist()
    _getRecommendAlbumList()
  }, [])
  return (
    <>
      {/* 轮播图 */}
      {/* <CarouselCpt /> */}

      <div className="content-bg">
        <RecommendPart title="热门推荐" moreFn={handleMoreClick}>
          <RecommendPlaylistWrapper>
            {playlist.map((item) => (
              <PlaylistItem item={item} key={item.id} />
            ))}
          </RecommendPlaylistWrapper>
        </RecommendPart>

        <RecommendPart title="新碟上架" moreFn={handleMoreClick}>
          <RecommendAlbumWrapper>
            <div className="album-list">
              {albumList.map((item) => (
                <AlbumItem item={item} key={item.id} />
              ))}
            </div>
          </RecommendAlbumWrapper>
        </RecommendPart>

        <RecommendPart title="榜单" moreFn={handleMoreClick}>
          榜单
        </RecommendPart>
      </div>
    </>
  )
}

export default memo(Recommend)
