import { lazy } from "react"
import { RouteObject, Navigate } from "react-router-dom"

// lazy 路由懒加载
const Recommend = lazy(() => import("@/views/recommend"))
const Ranking = lazy(() => import("@/views/ranking"))
const Playlist = lazy(() => import("@/views/playlist"))
const Artist = lazy(() => import("@/views/artist"))
const Dj = lazy(() => import("@/views/dj"))

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/recommned" /> },
  {
    path: "/recommend",
    element: <Recommend />
  },
  {
    path: "/ranking",
    element: <Ranking />
  },
  {
    path: "/songs",
    element: <Playlist />
  },
  {
    path: "/artist",
    element: <Artist />
  },
  {
    path: "/dj",
    element: <Dj />
  }
]

export default routes
