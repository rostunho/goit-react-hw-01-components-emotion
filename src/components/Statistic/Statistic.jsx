import PropTypes from 'prop-types';
import {
  StatBox,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistic.styled';
import randomColor from 'js/random-bg-color';

function Statistic({ title, stats }) {
  return (
    <StatBox>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          const bgColor = randomColor();
          return (
            <Item key={id} style={{ backgroundColor: bgColor }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </StatBox>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistic;
