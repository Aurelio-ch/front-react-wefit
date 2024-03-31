import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Toast from './components/toast'
import { CartProvider } from './context/cart-context'
import { queryClient } from './lib/react-query'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | WeFit - Ecoomerce" />
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <GlobalStyle />
            <Toast />
            <RouterProvider router={router} />
          </CartProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}
