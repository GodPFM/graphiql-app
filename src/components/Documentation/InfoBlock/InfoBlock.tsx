import React, { useEffect } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { useGetDataMutation } from '@/store/api';

const InfoBlock = () => {
  const [getData, { data, isSuccess, isError, error }] = useGetDataMutation({
    fixedCacheKey: 'Introspection',
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
    if (isError) {
      console.log((error as FetchBaseQueryError).data);
    }
  }, [data, error]);

  return <div>InfoBlock</div>;
};

export default InfoBlock;
