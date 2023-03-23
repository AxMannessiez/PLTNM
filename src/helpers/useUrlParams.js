import { useSearchParams } from 'react-router-dom';

export default function useUrlParams(params) {
  const [searchParams] = useSearchParams();
  const returnObj = {};

  for (const paramsKey of params) {
    returnObj[paramsKey] = searchParams.get(paramsKey);
  }

  return returnObj;
}
