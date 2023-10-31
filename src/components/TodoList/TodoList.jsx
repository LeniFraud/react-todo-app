import { Droppable } from "@hello-pangea/dnd"; 
import { useSelector } from "react-redux";
import { selectTodos, selectIsLoading, selectVisibleTodos } from "redux/todos/selectors";
import { TodoItem, Notification } from "components";
import { List } from "./TodoList.styled";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);
  const visibleTodos = useSelector(selectVisibleTodos);

  // const onDragEnd = result  => {}

  return (
    <>
      <Droppable droppableId="1">
        {(provided) => (        
        <List 
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {visibleTodos?.map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </List>
        )}
      </Droppable>
      {!isLoading && todos?.length === 0 && (
        <Notification message="There are no tasks yet. Please, add someone!" />
      )}
      {!!todos.length && !visibleTodos.length && (
        <Notification message="No tasks found..." />
      )}
    </>
  );
};