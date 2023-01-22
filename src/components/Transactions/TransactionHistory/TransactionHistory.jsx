import PropTypes from 'prop-types';
import { Transaction } from "../Transaction/Transaction"
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({transactions}) => {
    return (<table className={css.transaction_history}>
  <thead className={css.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}

  </tbody>
</table>)
}

TransactionHistory.propTypes={
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ),
}