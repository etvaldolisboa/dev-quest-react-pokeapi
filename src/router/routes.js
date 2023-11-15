import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/home'
import { Details } from '../pages/details'

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='details/:id' element={<Details />} />
    </Routes>
  )
}