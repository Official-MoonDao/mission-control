import {toast} from 'react-toastify'

export const errorToast = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"colored"
});

/* 

Notification that displays every time there is a connection error.

For documentation on how to customize and style this notification, check https://fkhadra.github.io/react-toastify/introduction/


*/