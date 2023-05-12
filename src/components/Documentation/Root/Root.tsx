import { MouseEvent, useEffect, useState } from 'react';
import { Typography, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectDocument,
  addItem,
  setRoot,
  setFields,
  setArgs,
  addSchema,
} from '@/store/reducers/document/slice';

import { useGetDataMutation } from '@/store/api';
import { getRootListQuery } from '@/queries/getRootQuery';

const Root = () => {
  const { schema } = useAppSelector(selectDocument);
  const dispatch = useAppDispatch();
  const [elemText, setElemText] = useState('');

  const [getData, { data, isLoading, isSuccess }] = useGetDataMutation();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    const newValue = (e.target.closest('button') as HTMLButtonElement).innerText.split(':')[0];
    setElemText(() => newValue);
    console.log(schema);
    getData({
      query: getRootListQuery(newValue),
    }).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addItem(elemText));
      // генерим нужные поля в стейт из даты
      if (elemText === 'query') {
        dispatch(addSchema(data));
        dispatch(setFields(data.data.__schema.queryType.fields));
        dispatch(setArgs([]));
      }
      if (elemText === 'mutation') {
        dispatch(addSchema(data));
        dispatch(setFields(data.data.__schema.mutationType.fields));
        dispatch(setArgs([]));
      }
      if (elemText === 'subscription') {
        console.log(data.data.__schema.subscriptionType);
        dispatch(setFields(data.data.__schema.subscriptionType.fields));
        dispatch(setArgs([]));
      }
      dispatch(setRoot(false));
    }
  }, [data]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <>
      <Stack direction="row" className="mb-2 mt-4">
        <Typography
          fontFamily={'Source Sans Pro'}
          component="h4"
          className="flex items-center text-base font-semibold"
        >
          Root
        </Typography>
      </Stack>

      {schema?.data.__schema.queryType ? (
        <Stack direction="row" alignItems="center">
          <button className="w-6 h-6 mr-2 my-1 flex items-center justify-center hover:bg-white duration-300 rounded group bg-transparent border-0">
            <AddCircleOutlineIcon className="w-5 h-5 stroke-1 fill-color-documentation-secondary group-hover:fill-color-documentation-primary" />
          </button>
          <button
            onClick={handleClick}
            className="flex items-center hover:bg-white rounded group px-3 w-full bg-transparent border-0"
          >
            <Typography fontFamily={'Source Code Pro'} className="text-[14px]">
              query:
            </Typography>
            <Typography
              fontFamily={'Source Code Pro'}
              className="ml-2 text-[14px] text-color-documentation-secondary"
            >
              Query
            </Typography>
            <ArrowForwardIcon className="w-3 h-3 ml-auto fill-none group-hover:fill-color-documentation-primary" />
          </button>
        </Stack>
      ) : null}

      {schema?.data.__schema.mutationType ? (
        <Stack direction="row" alignItems="center">
          <button className="w-6 h-6 mr-2 my-1 flex items-center justify-center hover:bg-white duration-300 rounded group bg-transparent border-0">
            <AddCircleOutlineIcon className="w-5 h-5 stroke-1 fill-color-documentation-secondary group-hover:fill-color-documentation-primary" />
          </button>
          <button
            onClick={handleClick}
            className="flex items-center hover:bg-white rounded group px-3 w-full bg-transparent border-0"
          >
            <Typography fontFamily={'Source Code Pro'} className="text-[14px]">
              mutation:
            </Typography>
            <Typography
              fontFamily={'Source Code Pro'}
              className="ml-2 text-[14px] text-color-documentation-secondary"
            >
              Mutation
            </Typography>
            <ArrowForwardIcon className="w-3 h-3 ml-auto fill-none group-hover:fill-color-documentation-primary" />
          </button>
        </Stack>
      ) : null}

      {schema?.data.__schema.subscriptionType ? (
        <Stack direction="row" alignItems="center">
          <button className="w-6 h-6 mr-2 my-1 flex items-center justify-center hover:bg-white duration-300 rounded group bg-transparent border-0">
            <AddCircleOutlineIcon className="w-5 h-5 stroke-1 fill-color-documentation-secondary group-hover:fill-color-documentation-primary" />
          </button>
          <button
            onClick={handleClick}
            className="flex items-center hover:bg-white rounded group px-3 w-full bg-transparent border-0"
          >
            <Typography fontFamily={'Source Code Pro'} className="text-[14px]">
              subscription:
            </Typography>
            <Typography
              fontFamily={'Source Code Pro'}
              className="ml-2 text-[14px] text-color-documentation-secondary"
            >
              Subscription
            </Typography>
            <ArrowForwardIcon className="w-3 h-3 ml-auto fill-none group-hover:fill-color-documentation-primary" />
          </button>
        </Stack>
      ) : null}
    </>
  );
};

export default Root;
