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
import NavPath from './core/util/NavPath.ts';
import SignInPage from './component/page/sign-in-page.tsx';
import SelfProductPage from './component/page/self-product-page.tsx';
import MoreProductPage from './component/page/more-product-page.tsx';
import SearchProductPage from './component/page/search-product-page.tsx';
import SignUpPage from './component/page/sign-up-page.tsx';
function App( {title}:{ title?: string|null } ) {
  console.log(`::: /src/com/fruutie/App.tsx: title=${title}`);

  const JSX_ELEMENT_MAIN_LAYOUT: JSX.Element 
    = <MainLayout title={title}/>;
  const JSX_ELEMENT_HOME_PAGE: JSX.Element 
    = <HomePage title={title}/>;
  const JSX_ELEMENT_PRODUCT_PAGE: JSX.Element 
    = <ProductPage/>
  const JSX_ELEMENT_SERVICE_PAGE: JSX.Element 
    = <ServicePage />;
  const JSX_ELEMENT_ABOUT_US_PAGE: JSX.Element 
    = <AboutUsPage title={title}/>;
  const JSX_ELEMENT_SIGN_IN_PAGE: JSX.Element 
    = <SignInPage title={title} />;
  const JSX_ELEMENT_SIGN_UP_PAGE: JSX.Element 
  = <SignUpPage title={title} />

  const ROUTER = createBrowserRouter(
    createRoutesFromElements(
      <Route path={NavPath.HOME_PAGE.URL} element={JSX_ELEMENT_MAIN_LAYOUT}>
        <Route index element={JSX_ELEMENT_HOME_PAGE}/>
        <Route path={NavPath.PRODUCT_PAGE.URL} element={JSX_ELEMENT_PRODUCT_PAGE}/>
        <Route path={NavPath.SERVICE_PAGE.URL} element={JSX_ELEMENT_SERVICE_PAGE}/>
        <Route path={NavPath.ABOUT_US_PAGE.URL} element={JSX_ELEMENT_ABOUT_US_PAGE}/>
        <Route path={NavPath.SIGN_IN_PAGE.URL} element={JSX_ELEMENT_SIGN_IN_PAGE}/>
        <Route path={NavPath.SIGN_UP_PAGE.URL} element={JSX_ELEMENT_SIGN_UP_PAGE}/>
        <Route path='/product/:name/:id' element={<SelfProductPage/>}/>
        <Route path='/product/more/:groupProduct' element={<MoreProductPage/>}/>
        <Route path='/search/:searchProduct' element={<SearchProductPage/>}/>
        <Route path='*' element={<PageNotFound title={title}/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={ROUTER} />
    </>
  );
}

export default App
