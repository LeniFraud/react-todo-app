import { Droppable } from "@hello-pangea/dnd"; 
import { useSelector } from "react-redux";
import { selectVisibleTodos } from "redux/todos/selectors";
import { TodoItem } from "components";
import { List } from "./TodoList.styled";

export const TodoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);
  // const isEmptyList = !visibleTodos.length;
  // console.log(!!visibleTodos.length);

  // const listProps = {
  //   isEmpty: !!visibleTodos.length,
  // }

  return (
    <>
      <Droppable droppableId="1">
        {(provided, snapshot) => (        
        <List 
          $isEmpty={!!visibleTodos.length}
        // {...listProps}
          // isEmpty={(!!visibleTodos.length.toString())}
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {visibleTodos?.map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </List>
        )}
      </Droppable>
    </>
  );
};