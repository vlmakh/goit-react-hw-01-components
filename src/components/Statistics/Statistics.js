import PropTypes from 'prop-types';
import {
  Stats,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';
import getRandomHexColor from 'utils/getRandomHexColor';

function Statistics({ title, stats }) {
  return (
    <Stats>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => {
          return (
            <StatItem
              key={stat.id}
              style={{
                backgroundColor: `${getRandomHexColor()}`,
              }}
            >
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </Stats>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
