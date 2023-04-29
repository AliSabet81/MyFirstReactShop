import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { routes } from './routes';
import { TodoType } from './screens/types';
import APP from './components/modal';
import SwiperComponent from './components/swiper';
import Fotter from './footer';
import { categories } from './products/categories';
import PrudoctSwioer from './components/productSwiper';
import SwiperThumbs from './components/productSwiper';
import { homeslideproduct } from './products/homeSlideProducts';
import { menCategoryProducts } from './products/menCategoryproduct';
import { homeDiscount } from './products/homeDiscount';


const App = () => {
  const [todosList , setTodosList] = useState<TodoType>({
    title:"",
    desc:"",
  })
  return (
    <>
    <Layout>
      <Routes>
        {routes.map((i) => (
          <Route key={i.path} path={i.path} element={i.element} />
        ))}
        {categories.map((e)=>(
          <Route key={e.path} path={e.path} element={e.element}/>
        ))}
        {homeslideproduct.map((e)=>(
          <Route key={e.path} path={e.path} element={e.element}/>
        ))}
        {menCategoryProducts.map((e)=>(
          <Route key={e.path} path={e.path} element={e.element}/>
        ))}
        {homeDiscount.map((e)=>(
          <Route key={e.path} path={e.path} element={e.element}/>
        ))}
      </Routes>
    </Layout>
    <div className="container">
    {/* <PrudoctSwioer></PrudoctSwioer> */}
    </div>
    </>
  )
}

export default App
