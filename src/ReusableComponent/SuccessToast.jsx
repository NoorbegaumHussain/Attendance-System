import React from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function SuccessToast(message) {
    return (
       
        toast.success(message),{
            position:"bottom-right",
            autoClose:4000,
        }
    )
}

export default SuccessToast;