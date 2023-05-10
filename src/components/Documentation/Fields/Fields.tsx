// import { useEffect } from 'react';
import { Typography, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useAppSelector } from '@/store/hooks';
import { selectDocument } from '@/store/reducers/document/slice';
// import { useGetDataMutaion } from '@/store/api';

const Fields = () => {
  const { fields } = useAppSelector(selectDocument);

  // const [_getData, { data, isSuccess }] = useGetDataMutaion();

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log(data);
  //   }
  // }, [data]);

  return (
    <>
      <Stack direction="row" className="mb-2 mt-4">
        <Typography
          fontFamily={'Source Sans Pro'}
          component="h4"
          className="flex items-center text-base font-semibold"
        >
          Fields
        </Typography>
        <button className="w-6 h-6 ml-5 flex items-center justify-center hover:bg-white duration-300 rounded group bg-transparent border-0">
          <AddCircleOutlineIcon className="w-5 h-5 stroke-1 fill-color-documentation-secondary group-hover:fill-color-documentation-primary" />
        </button>
      </Stack>

      <Stack>
        {fields.length ? (
          fields.map((item, index) => {
            return (
              <Stack key={index} direction="row" alignItems="center">
                <button className="w-6 h-6 mr-2 my-1 flex items-center justify-center hover:bg-white duration-300 rounded group bg-transparent border-0">
                  <AddCircleOutlineIcon className="w-5 h-5 stroke-1 fill-color-documentation-secondary group-hover:fill-color-documentation-primary" />
                </button>
                <button className="flex items-center hover:bg-white rounded group px-3 w-full bg-transparent border-0">
                  <Typography fontFamily={'Source Code Pro'} className="text-[14px]">
                    example:
                  </Typography>
                  <Typography
                    fontFamily={'Source Code Pro'}
                    className="ml-2 text-[14px] text-color-documentation-secondary"
                  >
                    [Example]
                  </Typography>
                  <ArrowForwardIcon className="w-3 h-3 ml-auto fill-none group-hover:fill-color-documentation-primary" />
                </button>
              </Stack>
            );
          })
        ) : (
          <div>тут ничего нет</div>
        )}
      </Stack>
    </>
  );
};

export default Fields;
