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
import RankItem from "@/components/rank-item"

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
      const list = res.map((item: any) => ({
        ...item.playlist,
        tracks: item.playlist.tracks.slice(0, 10)
      }))
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

      {/* 热门推荐 */}
      <div className="content-bg">
        <RecommendPart title="热门推荐" moreFn={handleMoreClick}>
          <RecommendPlaylistWrapper>
            {playlist.map((item) => (
              <PlaylistItem item={item} key={item.id} />
            ))}
          </RecommendPlaylistWrapper>
        </RecommendPart>

        {/* 新碟上架 */}
        <RecommendPart title="新碟上架" moreFn={handleMoreClick}>
          <RecommendAlbumWrapper>
            <div className="album-list">
              {albumList.map((item) => (
                <AlbumItem item={item} key={item.id} />
              ))}
            </div>
          </RecommendAlbumWrapper>
        </RecommendPart>

        {/* 榜单 */}
        <RecommendPart title="榜单" moreFn={handleMoreClick}>
          <RecommendRankingWrapper>
            {rankingList.map((item) => (
              <RankItem item={item} key={item.id} />
            ))}
          </RecommendRankingWrapper>
        </RecommendPart>
      </div>
    </>
  )
}

export default memo(Recommend)
