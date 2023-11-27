import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/home'
import { Details } from '../pages/details-of-pokemon'

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='details-of-pokemon/:id' element={<Details />} />
    </Routes>
  )
}