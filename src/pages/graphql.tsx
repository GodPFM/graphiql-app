import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Columns from '../components/Columns/Columns';

const Graphql = () => {
  const { id, isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !id) router.push('/auth');
  }, [isLoading, id]);
  return <>{id ? <Columns /> : <></>}</>;
};

export default Graphql;
