import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
    {/* header */}
    {/* <Header /> */}
    {/* aside */}
    {/* <Sidebar /> */}
    {/* main section */}
    <main><Outlet /></main>
    </div>
  )
}