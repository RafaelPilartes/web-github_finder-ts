import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../Layout'
import Home from '../pages/Home'
import UserGithub from '../pages/UserGithub'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user/:user" element={<UserGithub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
