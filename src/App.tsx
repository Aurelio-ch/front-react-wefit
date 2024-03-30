import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './context/cart-context'
import { queryClient } from './lib/react-query'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
