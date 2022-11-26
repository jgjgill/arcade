import Layout from '@components/Layout'
import { HomePage, TerisPage } from '@pages/index'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="arcade" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="tetris" element={<TerisPage />} />
      </Route>
    </Routes>
  )
}

export default App
