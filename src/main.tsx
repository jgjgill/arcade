import '@styles/index'

import App from '@src/App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
