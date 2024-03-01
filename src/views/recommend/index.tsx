import React, { memo, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"

import {
  getRecommendPlaylist,
  getRecommendAlbumList,
  getRankingLlist,
  getPlaylistSongId
} from "@/service/modules"

// cpts
import CarouselCpt from "./c-cpts/carouse-cpt"
import RecommendPart from "./c-cpts/recommend-part"
import PlaylistItem from "@/components/playlist-item"
import AlbumItem from "@/components/album-item"

import {
  RecommendPlaylistWrapper,
  RecommendAlbumWrapper,
  RecommendRankingWrapper
} from "./style"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [playlist, setPlaylist] = useState<any[]>([])
  const [albumList, setAlbumList] = useState<any[]>([])
  const [rankingList, setRankingList] = useState<any[]>([])

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

  const _getRankingList = async () => {
    const { list } = await getRankingLlist()
    const rankingIds = list.slice(0, 4).map((item: any) => item.id)

    const rankingPromiseList = rankingIds.map((id: number) =>
      getPlaylistSongId(id)
    )
    Promise.all(rankingPromiseList).then((res: any) => {
      const list = res.map((item: any) => item.playlist)
      console.log("getRankingLlist", list)

      setRankingList(list)
    })
  }

  const handleMoreClick = () => {
    console.log("more")
  }

  useEffect(() => {
    _getRecommendPlaylist()
    _getRecommendAlbumList()
    _getRankingList()
  }, [])
  return (
    <>
      {/* 轮播图 */}
      <CarouselCpt />

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
          <RecommendRankingWrapper>
            {rankingList.map((item) => (
              <div className="ranking-column">
                <div className="ranking-top">
                  <div className="ranking-cover">
                    <img src={item.coverImgUrl} alt="" />
                  </div>

                  <div className="right-layout">
                    <div className="ranking-name">{item.name}</div>
                    <div>12323</div>
                  </div>
                </div>
              </div>
            ))}
          </RecommendRankingWrapper>
        </RecommendPart>
      </div>
    </>
  )
}

export default memo(Recommend)
