import { DragDropContext } from '@hello-pangea/dnd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'redux/todos/operations';
import { selectTodos, selectIsLoading, selectError } from 'redux/todos/selectors';
import { selectModalAddTodoOpen } from 'redux/global/selectors';
import { openModalAddTodo } from 'redux/global/slice'; 
import { ModalContainer, TodoList, TodoForm, Filter, Loader, Notification } from 'components'; 
import { Section, Container, Title, Subtitle, Button } from './TodosPage.styled';

export default function TodoPage() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isModalAddTodoOpen = useSelector(selectModalAddTodoOpen);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  const onDragEnd = result  => {
    // TODO
  }

  return (
    <Section>
        <Container>
          <Title>Todo App</Title>
          <Button
          type='submit'
          aria-label="Add todo"
          onClick={() => dispatch(openModalAddTodo())}>Add todo</Button>
          <Subtitle>Todos</Subtitle>
          {!!todos.length && <Filter />}
          {isLoading && <Loader />}
          {/* {!error && !isLoading && <TodoList/>} */}
          {/* {error && <Notification message="Ooops! Something went wrong..." />} */}
          {!error ? (
            <DragDropContext onDragEnd={onDragEnd}>
              <TodoList />
            </DragDropContext>
        ) : (
          <Notification message="Ooops! Something went wrong..." />
        )}
          {isModalAddTodoOpen && (
              <ModalContainer>
              <TodoForm/>
              </ModalContainer>
          )}
        </Container>
    </Section>
    
  );
};