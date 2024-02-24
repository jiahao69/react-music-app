import hyRequest from ".."

// 歌单分类列表
export function getPlaylistTags() {
  return hyRequest.get({
    url: "/playlist/catlist"
  })
}

// 歌单列表
export function getPlaylists() {
  return hyRequest.get({
    url: "/top/playlist"
  })
}

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
