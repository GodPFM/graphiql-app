import React, { useEffect } from 'react';

import { useGetDataMutation } from '@/store/api';
import Error from './Error/Error';
import { DocumentSkeleton } from './Skeleton/Skeleton';

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
        <div className="mt-3 ml-auto mr-auto w-[300px] 2xl:ml-0 2xl:mr-0">new docs</div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default InfoBlock;
