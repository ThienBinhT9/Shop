import { Fragment } from "react";
import { publicRouter } from "./router";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainLayout } from './layouts'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          publicRouter.map((router,index) => {

            const Comp = router.element
            let Layout = MainLayout

            if(router.layout){
              Layout = router.layout
            }
            else if(router.layout === null){
              Layout = Fragment
            }

            return <Route key={index} path={router.path} element={<Layout><Comp/></Layout>}/>
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
