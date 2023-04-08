import { useSearchParams } from 'react-router-dom';

export default function useUrlParams(params) {
  const [searchParams] = useSearchParams();

  return Object.fromEntries(
    params.map(paramsKey => [paramsKey, searchParams.get(paramsKey)])
  );
}
