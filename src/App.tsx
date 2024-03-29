import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './context/cart-context'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  )
}
