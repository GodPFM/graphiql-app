import { Typography } from '@mui/material';
import SchemaNaviagation from './SchemaNavigation/SchemaNaviagation';
import BackButton from './BackButton/BackButton';
import Arguments from './Arguments/Arguments';
import Fields from './Fields/Fields';
import { useGetDataMutaion } from '../../store/api';
import { useEffect } from 'react';

const Documentaion = () => {
  const QUERY = `{
    __schema {
      queryType {
        fields {
          name
        }
      }
    }
  }`;
  const [getData] = useGetDataMutaion();
  let res = {};
  useEffect(() => {
    res = getData({ query: QUERY });
  }, []);

  useEffect(() => {
    console.log(res);
  }, [res]);

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
      <BackButton />
      <Arguments />
      <Fields />
    </>
  );
};

export default Documentaion;
