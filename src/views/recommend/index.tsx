import React, { memo, useEffect, useState, useRef } from "react"
import type { FC, ReactNode } from "react"
import { Carousel } from "antd"
import type { CarouselRef } from "antd/lib/carousel"

import {
  getRecommendPlaylist,
  getRecommendAlbumList,
  getRankingLlist,
  getPlaylistSongId
} from "@/service/modules"

// cpts
import CarouselCpt from "./c-cpts/carouse-cpt"
import RecommendPart from "./c-cpts/recommend-part"
import PlaylistItem from "./c-cpts/playlist-item"
import AlbumItem from "./c-cpts/album-item"
import RankItem from "./c-cpts/rank-item"

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

  const carouselRef = useRef<CarouselRef>(null)

  // 推荐歌单数据
  const _getRecommendPlaylist = async () => {
    const { result } = await getRecommendPlaylist()
    console.log("getRecommendPlaylist", result)
    setPlaylist(result.slice(0, 10))
  }

  // 推荐新碟数据
  const _getRecommendAlbumList = async () => {
    const { albums } = await getRecommendAlbumList()
    console.log("getRecommendAlbumList", albums)

    const group1 = albums.slice(0, 6)
    const group2 = albums.slice(6, 12)

    const newAlbums = [group1, group2]

    setAlbumList(newAlbums)
  }

  // 推荐榜单数据
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

  const handleArrowClick = (type: string) => {
    type === "left" ? carouselRef.current?.prev() : carouselRef.current?.next()
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
            <div
              className="arrow-wrapper arrow-left sprite_02"
              onClick={() => handleArrowClick("left")}
            ></div>
            <Carousel
              ref={carouselRef}
              waitForAnimate
              dots={false}
              speed={1000}
            >
              {albumList.map((v1, index) => (
                <div key={index}>
                  <div className="album-gruop" key={index}>
                    {v1.map((v2: any) => (
                      <AlbumItem item={v2} key={v2.id} />
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
            <div
              className="arrow-wrapper arrow-right sprite_02"
              onClick={() => handleArrowClick("right")}
            ></div>
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
