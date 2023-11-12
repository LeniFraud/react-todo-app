import { Draggable } from '@hello-pangea/dnd';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/todos/operations';
import { openModalEditTodo } from 'redux/global/slice';
import {
  Item,
  Info,
  Name,
  Description,
  DateBox,
  Created,
  Updated,
  Button,
} from './TodoItem.styled';

export const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const { id, name, description, createdDate, updatedDate } = todo;
  const handleDelete = () => dispatch(deleteTodo(id));
  const handleEdit = () => dispatch(openModalEditTodo(todo));

  const dateComparison = createdDate === updatedDate;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          $isDragging={snapshot.isDragging}
        >
          <Info>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <DateBox>
              {/* <Created>Created: {createdDate}</Created>
              {!dateComparison && <Updated>Updated: {updatedDate}</Updated>} */}
              {dateComparison ? (
                <Created>Created: {createdDate}</Created>
              ) : (
                <Updated>Updated: {updatedDate}</Updated>
              )}
            </DateBox>
          </Info>
          <Button type="button" aria-label="Edit todo" onClick={handleEdit}>
            <MdEdit size={24} fill="currentColor" />
          </Button>
          <Button type="button" aria-label="Delete todo" onClick={handleDelete}>
            <MdDelete size={24} fill="currentColor" />
          </Button>
        </Item>
      )}
    </Draggable>
  );
};
