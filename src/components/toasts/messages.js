const { toast } = require("react-toastify");

export const deleteMessage = () => {
    toast.error("Property deleted!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
}

