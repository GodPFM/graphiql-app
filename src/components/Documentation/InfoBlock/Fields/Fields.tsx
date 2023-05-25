import React from 'react';
import { Typography, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { IntrospectionInputValue, IntrospectionQuery } from '@/types/intorspectionTypes';

import { useAppSelector } from '@/store/hooks';
import { selectDocument } from '@/store/reducers/document/slice';

import { parser } from '@/utils/document/parser';
import { OfType, ResultType, getType } from '@/utils/document/getType';

interface FieldInterface {
  name: string;
  type: ResultType;
  args: readonly IntrospectionInputValue[];
}

const Fields = () => {
  const { currentType, schema } = useAppSelector(selectDocument);
  const currentSchema: IntrospectionQuery = schema as IntrospectionQuery;
  let fieldsData: FieldInterface[] = [];
  if (currentType) {
    fieldsData = parser(currentType, currentSchema) as FieldInterface[];
  }
  return currentType ? (
    <>
      <Stack direction="row" className="mb-2 mt-4">
        <Typography
          fontFamily={'Source Sans Pro'}
          component="h4"
          className="flex items-center text-base font-semibold"
        >
          Fields
        </Typography>
      </Stack>
      {fieldsData.map((field) => {
        return (
          <Stack key={field.name} direction="row" alignItems="center">
            <button
              className={`flex items-center hover:bg-white rounded group px-3 w-full bg-transparent border-0 mt-2`}
            >
              <Typography fontFamily={'Source Code Pro'} className="text-[14px] mr-2">
                {`${field.name} `}
              </Typography>
              {field.args.length > 0 ? (
                <>
                  {field.args.length === 1 ? (
                    <div className="text-color-documentation-secondary font-SourceCodePro text-[12px]">{`(${field.args[0].name
                      }: ${getType(field.args[0].type as OfType).text}): ${field.type.text}`}</div>
                  ) : (
                    <div className="text-[12px] flex ml-2 flex-col text-left text-color-documentation-secondary font-SourceCodePro">
                      {field.args.map((arg, index) => (
                        <div key={arg.name}>
                          {index === 0
                            ? `(${arg.name}: ${getType(arg.type as OfType).text}`
                            : index === field.args.length - 1
                              ? `${arg.name}: ${getType(arg.type as OfType).text}): ${field.type.text
                              }`
                              : `${arg.name}: ${getType(arg.type as OfType).text}`}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-color-documentation-secondary font-SourceCodePro text-[12px]">{`: ${field.type.text}`}</div>
              )}
              <ArrowForwardIcon className="w-3 h-3 ml-auto fill-none group-hover:fill-color-documentation-primary" />
            </button>
          </Stack>
        );
      })}
    </>
  ) : null;
};

export default Fields;

{
  /* <div className="text-[14px] flex ml-2 flex-col">
  <div className="text-left">
    {field.args.map((arg, index) => (
      <div key={arg.name}>{index === 0 ? `( ${arg.name}` : arg.name}</div>
    ))}
  </div>
  <div>{')'}</div>
</div> */
}

{
  /* <button
  // onClick={() => handleField(index)}
  className={`flex items-center hover:bg-white rounded group px-3 w-full bg-transparent border-0`}
>
  <Typography fontFamily={'Source Code Pro'} className="text-[14px]">
    {`${field.name} `}
  </Typography>
  <Typography fontFamily={'Source Code Pro'} className="text-[14px] flex flex-col">
    {field.args.map((arg) => {
      console.log(arg.name);
      return <div key={arg.name}>{arg.name}</div>;
    })}
  </Typography>
  <Typography
    // onClick={(e: MouseEvent) => {
    //   // e.stopPropagation();
    //   // handleType(index);
    // }}
    fontFamily={'Source Code Pro'}
    className="ml-2 text-[14px] text-color-documentation-secondary hover:underline"
  >
    {`: ${field.type.text}`}
  </Typography>
  <ArrowForwardIcon className="w-3 h-3 ml-auto fill-none group-hover:fill-color-documentation-primary" />
</button> */
}
