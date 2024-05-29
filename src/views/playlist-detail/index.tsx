import { memo, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import type { FC, ReactNode } from "react"
import { getPlaylistDetail } from "@/service/modules/playlist"

interface IProps {
  children?: ReactNode
}

const PlaylistDetail: FC<IProps> = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams)

  useEffect(() => {
    getPlaylistDetail()
  }, [])

  return <div className="content-bg">123</div>
}

export default memo(PlaylistDetail)
