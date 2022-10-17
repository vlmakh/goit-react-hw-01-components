import PropTypes from 'prop-types';
import { TaskSection, TaskTitle } from './Section.styled';

function Section({ title, children }) {
  return (
    <TaskSection>
      {title && <TaskTitle>{title}</TaskTitle>}
      {children}
    </TaskSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
