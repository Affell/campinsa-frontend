import "./error.scss"

const Error = ({ title = "404", subtitle = "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again." }) => {
  return (
    <div className="error-box">
      <h1 className="error-title">{title}</h1>
      <h2 className="error-body">{subtitle}</h2>
    </div>
  );
};

export default Error;