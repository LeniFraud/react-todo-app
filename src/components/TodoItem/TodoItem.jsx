import { Draggable } from "@hello-pangea/dnd"; 
import { useDispatch } from "react-redux";
// import { MdClose } from "react-icons/md";
import { deleteTodo } from "redux/todos/operations";
import { openModalEditTodo } from "redux/global/slice";
import { Item, Info, EditButton, DeleteButton } from "./TodoItem.styled";

export const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleEdit = () => dispatch(openModalEditTodo(todo));

//   const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Draggable draggableId={(todo.id).toString()} index={index}>
      {(provided) => (
        <Item
          ref = {provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* <input
            type="checkbox"
            className={css.checkbox}
            checked={task.completed}
            onChange={handleToggle}
          /> */}
          <Info>
            <p>{todo.name}</p>
            <p>{todo.description}</p>
            <p>Created: {todo.createdDate}</p>
            <p>Edited: {todo.updatedDate}</p>
          </Info>
          <EditButton type="button" onClick={handleEdit}>
            Edit
          </EditButton>
          <DeleteButton type="button" onClick={handleDelete}>
            Delete
          </DeleteButton>
        </Item>
      )}
    </Draggable>
  );
};