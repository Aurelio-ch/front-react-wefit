import { AppLayout } from '@/layouts/app'
import { Cart } from '@/pages/cart'
import { CartSuccess } from '@/pages/cart/Sucess'
import { Home } from '@/pages/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/cart/success',
        element: <CartSuccess />,
      },
    ],
  },
])
