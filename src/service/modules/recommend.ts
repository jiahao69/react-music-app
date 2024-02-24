import hyRequest from ".."

// 轮播图列表
export function getBannerList() {
  return hyRequest.get({ url: "/banner" })
}

// 推荐歌单列表
export function getRecommendPlaylist() {
  return hyRequest.get({ url: "/personalized" })
}

// 新碟上架列表
export function getRecommendAlbumList() {
  return hyRequest.get({ url: "/album/newest" })
}

// 榜单列表
export function getRankingLlist() {
  return hyRequest.get({ url: "/toplist" })
}
