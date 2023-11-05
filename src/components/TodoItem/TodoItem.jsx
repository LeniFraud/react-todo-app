import { Draggable } from "@hello-pangea/dnd";
import { MdEdit, MdDelete } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { deleteTodo } from "redux/todos/operations";
import { openModalEditTodo } from "redux/global/slice";
import { Item, Info, Name, Description, Created, Updated, Button } from "./TodoItem.styled";

export const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleEdit = () => dispatch(openModalEditTodo(todo));

  const dateComparison = todo.createdDate === todo.updatedDate;

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <Item
          ref = {provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {/* <input
            type="checkbox"
            className={css.checkbox}
            checked={task.completed}
            onChange={handleToggle}
          /> */}
          <Info>
            <Name>{todo.name}</Name>
            <Description>{todo.description}</Description>
            <Created>Created: {todo.createdDate}</Created>
            {!dateComparison && <Updated>Updated: {todo.updatedDate}</Updated>}
          </Info>
          <Button type="button" aria-label="Edit todo" onClick={handleEdit}>
            <MdEdit size={24} fill="currentColor" />
          </Button>
          <Button type="button" aria-label="Delete todo" onClick={handleDelete}>
            <MdDelete size={24} fill="currentColor"/>
          </Button>
        </Item>
      )}
    </Draggable>
  );
};