import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export const Transaction = ({ type, amount, currency }) => {
    return (<tr className={css.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}