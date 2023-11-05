import { DragDropContext } from '@hello-pangea/dnd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderChange } from 'redux/todos/slice'; 
import { fetchTodos } from 'redux/todos/operations';
import { selectTodos, selectIsLoading, selectError, selectVisibleTodos } from 'redux/todos/selectors';
import { selectModalAddTodoOpen } from 'redux/global/selectors';
import { openModalAddTodo } from 'redux/global/slice'; 
import { ModalContainer, TodoList, TodoForm, Filter, Loader, Notification } from 'components'; 
import { Section, Container, Title, Button } from './TodosPage.styled';

export default function TodoPage() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const visibleTodos = useSelector(selectVisibleTodos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isModalAddTodoOpen = useSelector(selectModalAddTodoOpen);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      todos,
      result.source.index,
      result.destination.index
    );
    dispatch(orderChange(items));
  };

  return (
    <Section>
      <Container>
        {/* <Title>Todo App</Title> */}
        <Title>Todos</Title>
        <Button
          type='submit'
          aria-label="Add todo"
          onClick={() => dispatch(openModalAddTodo())}>Add todo
        </Button>
        {!!todos.length && <Filter />}
        {isLoading && <Loader />}
        <DragDropContext onDragEnd={onDragEnd}>
          {/* {!!todos.length && !isLoading && <TodoList/>} */}
          {!!todos.length && <TodoList/>}
        </DragDropContext>
        {error && <Notification message="Ooops! Something went wrong..." />}
        {!isLoading && todos?.length === 0 && (
          <Notification message="There are no tasks yet." />
        )}
        {!!todos.length && !visibleTodos.length && (
          <Notification message="No tasks found..." />
        )}
          {/* {!error ? (
            <DragDropContext onDragEnd={onDragEnd}>
              <Subtitle>Todos</Subtitle>
              <TodoList />
            </DragDropContext>
          ) : (
          <Notification message="Ooops! Something went wrong..." />
          )} */}
        {isModalAddTodoOpen && (
          <ModalContainer>
            <TodoForm/>
          </ModalContainer>
        )}
      </Container>
    </Section>
  );
};