import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <p className={css.notFoundText}>Page not found</p>
      <Link to="/" className={css.notFoundLink}>
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
