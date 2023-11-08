import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from 'redux/todos/operations';
import { closeModal } from 'redux/global/slice';
import { selectModalTodoData } from 'redux/global/selectors';
import {
  Title,
  FormBox,
  Label,
  Input,
  ErrorText,
  ButtonBox,
  SaveButton,
  CancelButton,
} from './TodoForm.styled';

const schema = Yup.object({
  id: Yup.string(),
  name: Yup.string()
    .max(30, 'Name cannot exceed more than 30 characters')
    .required('Required'),
  description: Yup.string()
    .max(150, 'Description cannot exceed more than 150 characters')
    .required('Required'),
  createdDate: Yup.date().default(() => moment()),
  updatedDate: Yup.date().default(() => moment()),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const TodoForm = () => {
  const dispatch = useDispatch();
  const modalTodoData = useSelector(selectModalTodoData);
  const isEdit = !!modalTodoData;

  const initialValues = {
    id: modalTodoData?.id || nanoid(),
    name: modalTodoData?.name || '',
    description: modalTodoData?.description || '',
    createdDate:
      modalTodoData?.createdDate || moment().format('DD-MMM-YYYY HH:mm'),
    updatedDate: moment().format('DD-MMM-YYYY HH:mm'),
  };

  const handleSubmit = (values, { resetForm }) => {
    !isEdit ? dispatch(addTodo(values)) : dispatch(editTodo(values));

    dispatch(closeModal());
    resetForm();
  };

  return (
    <>
      <Title>{isEdit ? 'Edit todo' : 'Create todo'}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormBox>
            <Label>
              Name
              <Input name="name" type="text" />
            </Label>
            <FormError name="name" />
            <Label>
              Description
              <Input name="description" type="text" />
            </Label>
            <FormError name="description" />
          </FormBox>
          <ButtonBox>
            <SaveButton type="submit">Save</SaveButton>
            <CancelButton type="button" onClick={() => dispatch(closeModal())}>
              Cancel
            </CancelButton>
          </ButtonBox>
        </Form>
      </Formik>
    </>
  );
};
