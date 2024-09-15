import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { AuthProvider } from './AuthContext.jsx'
import './index.css'
import {store} from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <Provider store={store}>
                    <App />
            </Provider>
        </AuthProvider>
    </React.StrictMode>
    
)
