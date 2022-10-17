import PropTypes from 'prop-types';
import { Task, TaskTitle } from './Section.styled';

export function Section({ title, children }) {
  return (
    <Task>
      {title && <TaskTitle>{title}</TaskTitle>}
      {children}
    </Task>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
