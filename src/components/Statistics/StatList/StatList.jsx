import css from './StatList.module.css';
import PropTypes from 'prop-types';
import { StatItem } from '../StatItem/StatItem';

export const StatList = ({ stats }) => {
    return (<ul className={css.stat_list}>
   {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage}></StatItem>
      ))}
  </ul>)
} 


StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};