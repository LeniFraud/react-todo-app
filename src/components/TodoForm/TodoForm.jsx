// import { Formik, ErrorMessage } from 'formik';
// import { object, string, number, date, InferType } from 'yup';
import { nanoid } from 'nanoid';

// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from 'redux/todos/operations'; 
// import { selectTodos } from 'redux/todos/selectors'; 
import { closeModal } from 'redux/global/slice'; 
import { selectModalTodoData } from "redux/global/selectors";
import { Form, Label, Input, SaveButton, CancelButton } from './TodoForm.styled';



export const TodoForm = () => {
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const modalTodoData = useSelector(selectModalTodoData);


  const isEdit = !!modalTodoData;

  // const handleChange = e => {
  //   console.dir(e.target.value);
  //   const { name, value } = e.currentTarget;
  //   if (name === 'name') return setName(value);
  //   if (name === 'description') return setDescription(value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // const { name, value } = e.currentTarget;

    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value;

    if (isEdit) {
      const updatedDate  =  new Date().toLocaleString();
      dispatch(editTodo({ id: modalTodoData.id, name, description, createdDate:modalTodoData.createdDate, updatedDate }));
    }  else {
      const createdDate  =  new Date().toLocaleString();
      dispatch(addTodo({ id: nanoid(), name, description, createdDate, updatedDate: '' }));
    }

    // console.log(e.target.name.value);
    // console.log(e.target.description.value);

    // const name = e.target.name.value;
    // const number = e.target.number.value;
    // const isContactExists = contacts.some(
    //   contact => contact.name.toLowerCase() === name.toLowerCase()
    // );
    // if (isContactExists) return alert(`Contact ${name} already exists!`);

    
    dispatch(closeModal())

    // reset();
    e.target.reset();
  };

  // const reset = () => {
  //   setName('');
  //   setDescription('');
  // };

  return (
    <>
    <h2>{isEdit ? 'Edit todo' : 'Create todo'}</h2>
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={modalTodoData?.name}
          // value={name}
          // onChange={handleChange}
        />
      </Label>
      <Label>
        Description
        <Input
          type="text"
          name="description"
        //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          defaultValue={modalTodoData?.description}
          // value={description}
          // onChange={handleChange}
        />
      </Label>
      <SaveButton type="submit">Save</SaveButton>
      <CancelButton type="button" onClick={() => dispatch(closeModal())}>Cancel</CancelButton>
    </Form>
    </>
  );
};







