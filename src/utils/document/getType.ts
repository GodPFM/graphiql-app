export interface OfType {
  ofType: OfType;
  name: null | string;
  kind: string;
}

export interface ResultType {
  text: string;
  listOf: string;
}

export function getType(type?: OfType): ResultType {
  let result = '';
  let list = false;

  function computeType(type?: OfType): string | undefined {
    if (!type) return;
    if (type.kind === 'LIST') list = true;
    if (type.name) result = type.name;
    computeType(type.ofType);
  }

  computeType(type);

  return list
    ? {
      text: `[${result}]`,
      listOf: result,
    }
    : {
      text: result,
      listOf: 'not-a-list',
    };
}
