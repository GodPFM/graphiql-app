import React, { useEffect } from 'react';

import { useGetDataMutation } from '@/store/api';
import Error from './Error/Error';
import { DocumentSkeleton } from './Skeleton/Skeleton';
import Root from './Root/Root';

const InfoBlock = () => {
  const [getData, { data, isSuccess, isLoading }] = useGetDataMutation({
    fixedCacheKey: 'Introspection',
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [data]);

  return isLoading ? (
    <DocumentSkeleton />
  ) : (
    <>
      {isSuccess ? (
        <div className="mt-3 ml-auto mr-auto max-w-sm w-full 2xl:ml-0 2xl:mr-0">
          <Root />
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default InfoBlock;
