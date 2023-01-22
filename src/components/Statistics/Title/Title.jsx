import css from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
    return <h2 className={css.title}>{title}</h2>
}

Title.propTypes = {
    title: PropTypes.string
}
