import { Rings } from "react-loader-spinner";
import styles from '../images.module.css';
import PropTypes from 'prop-types'; // ES6


const Loader = ({Loading}) => {


return (

<div className={styles.Loader}>
{Loading && <Rings color="#00BFFF" Loading={Loading} height={380} width={380} />}
</div>
)

}

Loader.propTypes = {
    Loading: PropTypes.bool.isRequired
  };

export default Loader;