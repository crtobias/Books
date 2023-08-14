import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router'
import {NextUIProvider} from "@nextui-org/react";
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NextUIProvider>
    <RouterProvider router={router}/>
    </NextUIProvider>
 
)
