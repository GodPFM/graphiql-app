import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setQueryVariables } from '@/store/reducers/editor/slice';
import { TextField } from '@mui/material';

const EditorVars = () => {
  const { variables } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQueryVariables(e.target.value));
  };
  return (
    <TextField
      onChange={handleChange}
      fullWidth
      label="Variables"
      multiline
      rows={4}
      value={variables}
    />
  );
};
export default EditorVars;
