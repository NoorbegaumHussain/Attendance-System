import React from 'react';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ErrorToast(message) {
    return (
    toast.error(message),
    {position:"bottom-right",
    autoClose:4000,}
    )
}

export default ErrorToast
