import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { selectDocument, setRoot, addSchema, resetRoot } from '@/store/reducers/document/slice';
import Divider from './Divider';
import { capitalize } from '@/utils/textFotmatter';
import { useGetDataMutation } from '@/store/api';
import { ROOT_QUERY } from '@/queries/introspectionQuery';

const SchemaNaviagation = () => {
  const { nav } = useSelector(selectDocument);
  const dispatch = useDispatch();
  const [getData, { data, isSuccess }] = useGetDataMutation();

  const handleRoot = () => {
    getData({
      query: ROOT_QUERY,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addSchema(data));
      dispatch(resetRoot());
      dispatch(setRoot(true));
    }
  }, [data]);

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems={'center'}
      className="my-4 text-[14px] text-color-documentation-secondary "
    >
      {nav.map((item, index) => {
        return index ? (
          <React.Fragment key={index}>
            <Divider />
            <button className="hover:underline bg-transparent border-0 font-SourceSansPro">
              {capitalize(item)}
            </button>
          </React.Fragment>
        ) : (
          <button
            key={index}
            onClick={handleRoot}
            className="hover:underline bg-transparent border-0 font-SourceSansPro"
          >
            {capitalize(item)}
          </button>
        );
      })}
    </Stack>
  );
};

export default SchemaNaviagation;
