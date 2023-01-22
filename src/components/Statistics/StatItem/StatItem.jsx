import css from './StatItem.module.css';
import PropTypes from 'prop-types';
import {getRandomColor} from '../../../utils/getRandomColor'


export const StatItem = ({label, percentage}) => {
    return (<li style={{
     
      backgroundColor: getRandomColor(),
      
    }}className={css.item}>
        <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>)
}

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}