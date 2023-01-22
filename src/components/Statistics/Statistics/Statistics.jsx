import css from "./Statistics.module.css"
import PropTypes from 'prop-types';
import { Title } from "../Title/Title"
import { StatList } from "../StatList/StatList"

export const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
      {title && <Title title={title} />}
      <StatList stats={stats} />
</section>)
}

Title.propTypes = {
    title: PropTypes.string
  };