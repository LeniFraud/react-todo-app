import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/todos/slice'; 
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Search
      <Input
        type="text"
        onChange={e => dispatch(filterChange(e.currentTarget.value))}
      />
    </Label>
  );
};