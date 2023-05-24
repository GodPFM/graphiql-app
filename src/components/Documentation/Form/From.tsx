import { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectDocument, setNewLink } from '@/store/reducers/document/slice';
import { useGetDataMutation } from '@/store/api';
import { getIntrospectionQuery } from '@/queries/newTestIntrospectionQuery';

const From = () => {
  const { link } = useAppSelector(selectDocument);
  const [value, setValue] = useState(link);
  const dispatch = useAppDispatch();
  const [getData] = useGetDataMutation({
    fixedCacheKey: 'Introspection',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (link !== value) {
      dispatch(setNewLink(value));
      getData({
        body: {
          query: getIntrospectionQuery(),
        },
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-9">
      <TextField
        value={value}
        variant="standard"
        className="font-SourceSansPro text-[1rem] w-full flex-1"
        size="small"
        onChange={handleChange}
      />
      <Button
        sx={{
          height: '28px',
          textTransform: 'none',
          width: '230px',
        }}
        className={'truncate mt-2'}
        variant="contained"
        type="submit"
      >
        <p className={'truncate w-[200px]'}>Get documentation</p>
      </Button>
    </form>
  );
};

export default From;
