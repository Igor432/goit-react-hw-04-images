import styles from '../images.module.css';
import PropTypes from 'prop-types'; // ES6

const Button = ({ loadMOre }) => {
  return (
    <div className={styles.Load_more}>
      <button type="button" className={styles.Button} onClick={loadMOre}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMOre: PropTypes.func,
};

export default Button;
