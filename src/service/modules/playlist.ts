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

// 歌单详情
export function getPlaylistDetail() {
  return hyRequest.get({
    url: "/playlist/detail"
  })
}
