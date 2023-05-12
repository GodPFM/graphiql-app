import { Button, Typography } from '@mui/material';

import SchemaNaviagation from './SchemaNavigation/SchemaNaviagation';
import BackButton from './BackButton/BackButton';
import Arguments from './Arguments/Arguments';
import Fields from './Fields/Fields';
import Root from './Root/Root';

import { useGetDataMutation } from '@/store/api';
import { useAppSelector } from '@/store/hooks';
import { selectDocument } from '@/store/reducers/document/slice';

import { ROOT_QUERY } from '@/queries/introspectionQuery';

const Documentaion = () => {
  const { isRoot } = useAppSelector(selectDocument);

  // пример запроса
  const QUERY = {
    query: ROOT_QUERY,
  };

  const [getData, { data }] = useGetDataMutation();

  const handleClick = () => {
    getData(QUERY);
  };

  return (
    <>
      <Typography
        fontFamily={'Source Sans Pro'}
        borderBottom={1}
        paddingBottom={'10px'}
        component="h2"
        fontWeight={600}
        fontSize={18}
        className="border-color-heading-border text-color-documentation-primary"
      >
        Documentation
      </Typography>
      <SchemaNaviagation />
      {isRoot ? (
        <Root />
      ) : (
        <>
          <BackButton />
          <Arguments />
          <Fields />
          <Button onClick={handleClick}>Загрузить</Button>
          <pre className="break-all whitespace-pre-wrap">
            {data ? JSON.stringify(data, null, '  ') : 'data template'}
          </pre>
        </>
      )}
    </>
  );
};

export default Documentaion;
