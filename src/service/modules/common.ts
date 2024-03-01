import hyRequest from ".."

// 歌单歌曲的trackId列表
export function getPlaylistSongId(id: number) {
  return hyRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

// 歌单歌曲详情
export function getPlaylistSongDetail(ids: string) {
  return hyRequest.get({
    url: "/song/detail",
    params: {
      ids
    }
  })
}
