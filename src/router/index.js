import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Help from '../pages/Help'

const publicRouter = [
    {path:'/', element:Home},
    {path:'/cart', element:Cart},
    {path:'/catalog', element:Catalog},
    {path:'/catalog/product/:id', element:Product},
    {path:'*', element:Help}
]

export { publicRouter }