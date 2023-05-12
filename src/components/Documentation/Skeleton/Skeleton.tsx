import React from 'react';
import { Skeleton } from '@mui/material';

export const DocumentSkeleton = () => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <Skeleton key={index} variant="rounded" width={210} height={20} className="mb-3" />
      ))}
    </>
  );
};
