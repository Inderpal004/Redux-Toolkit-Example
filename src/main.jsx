import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './components/Users.jsx'
import Count from './components/Count.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Users />
    },
    {
        path: '/counter',
        element: <Count />
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
)
