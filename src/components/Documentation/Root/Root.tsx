import { MouseEvent } from 'react';
import { Typography, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectDocument, addItem, setRoot } from '@/store/reducers/document/slice';

import { useGetDataMutaion } from '@/store/api';
import { getRootListQuery } from '@/queries/getRootQuery';

const Root = () => {
  const { schema } = useAppSelector(selectDocument);
  const dispatch = useAppDispatch();

  const [getData] = useGetDataMutaion();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;
    const elemText = (e.target.closest('button') as HTMLButtonElement).innerText.split(':')[0];
    dispatch(addItem(elemText));
    dispatch(setRoot(false));
    getData({
      query: getRootListQuery(elemText),
    });
  };

  return (
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
