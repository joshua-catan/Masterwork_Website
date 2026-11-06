import { Routes, Route } from 'react-router'
import Layout from './components/PageLayout'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import ProductCard from './components/Products/ProductCard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Category from './components/Products/ProductCategory'
import ScrollToTop from './components/Layout/TopScroll'
import CheckOut from './components/CheckOut'

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Explore />} />
          <Route path='category/:category' element={<Category />} />
          <Route path='category/:category/:id' element={<ProductCard />} />
          <Route path='/category/:category/:id/checkout' element={<CheckOut />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App