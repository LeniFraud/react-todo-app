import { toast } from 'react-toastify';

export const alertOnAddTodo = () => toast.success('Task has been saved');

export const alertOnEditTodo = () => toast.warning('Task has been edited');

export const alertOnDeleteTodo = () => toast.error(`Task has been deleted`);
