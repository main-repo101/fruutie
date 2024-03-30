// import { useState } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import MainLayout  from './component/layout/main-layout.tsx';
import HomePage  from './component/page/home-page.tsx';
import ServicePage from './component/page/service-page.tsx';
import ProductPage from './component/page/product-page.tsx';
import AboutUsPage from './component/page/about-us-page.tsx';
import PageNotFound from './component/page/error/page-not-found.tsx';

function App( {title}:{ title?: String } ) {
  // const [count, setCount] = useState(0)

  const ROUTER = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout title={title}/>}>
        <Route index element={<HomePage title={title}/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/about-us' element={<AboutUsPage/>}/>
        <Route path='*' element={<PageNotFound title={title}/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={ROUTER} />
      <h1 className='text-xl bg-lime-500'>App.tsx</h1>
    </>
  );
}

export default App