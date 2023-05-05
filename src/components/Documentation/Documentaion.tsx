import { Typography } from '@mui/material';
import SchemaNaviagation from './SchemaNavigation/SchemaNaviagation';
import BackButton from './BackButton/BackButton';
import Arguments from './Arguments/Arguments';
import Fields from './Fields/Fields';

const Documentaion = () => {
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
