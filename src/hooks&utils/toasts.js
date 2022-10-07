import {toast} from 'react-toastify'

export const failedFetchAlert = () => toast.error('Connection failed. Contact MoonDAO discord if the problem persists 🚀', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"colored"
});