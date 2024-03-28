'use client'
import React, { useEffect } from 'react'
import Navbar from '@/components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SnackbarProvider, Transition } from 'notistack'

const Template = ({children}) => {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.min.js');
    }, [])
    
    return (
      <SnackbarProvider anchorOrigin={ {vertical: 'Top', horizontal: 'center'}} transitionDuration = {100}>

      
       <div>
             <Navbar/>
             {children}
        </div>
      </SnackbarProvider>
  )
}

export default Template