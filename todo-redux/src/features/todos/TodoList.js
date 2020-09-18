import React, { memo } from "react";
import { useSelector } from "react-redux";
import { todosItemsSelector } from "./selectors";
import TodoItem from "./TodoItem";

function TodoList() {
  const items = useSelector(todosItemsSelector);

  function onDelete() {}

  const todoItems = items.map((it) => <TodoItem onDelete={(item) => onDelete(item)} key={it.id} item={it} />);
  return <div className="TodoList">{todoItems}</div>;
}

// class TodoList extends Component {
//   shouldComponentUpdate(nextProps) {
//     return this.props.items !== nextProps.items;
//   }
//   render() {
//     const { items = [] } = this.props;
//     const todoItems = items.map((it) => <TodoItem key={it.id} item={it} />);
//     return <div className="TodoList">{todoItems}</div>;
//   }
// }

// class TodoList extends PureComponent {
//   render() {
//     const { items = [] } = this.props;
//     const todoItems = items.map((it) => <TodoItem key={it.id} item={it} />);
//     return <div className="TodoList">{todoItems}</div>;
//   }
// }

export default memo(TodoList);
