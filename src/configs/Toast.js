import { Fragment } from "react";

// ** Toastify
import { toast } from "react-toastify";

const Toast = ({ title, message }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper ms-2">
        <p tag="h6" className="ms-75 mb-0">
          {title}
        </p>
      </div>
    </div>
    <div className="toastify-body">
      <span>{message}</span>
    </div>
  </Fragment>
);

export const ToastWIP = () => {
  toast.info(
    <Toast
      message="Ce contenu est en cours d'intégration. Il sera bientôt disponible, revenez plus tard 👋"
      title="Non implémenté"
    />,
    {
      icon: true,
      autoClose: 4000,
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: false,
    }
  );
};

export default Toast;