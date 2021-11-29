import { useState } from 'react';
export interface promiseReuslt<T> {
  success: boolean;
  result: T | null;
}

export default function useOnFetch<T>(): {
  onFetch: (
    fetchingFn: () => Promise<promiseReuslt<T>>,
  ) => Promise<void>;
  result: T | null;
  isSuccess: boolean;
  isLoading: boolean;
} {
  const [result, setResult] = useState<T | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onFetch = async (
    fetchingFn: () => Promise<promiseReuslt<T>>,
  ): Promise<void> => {
    setIsLoading(true);

    const data = await fetchingFn();
    if (data.success === true) {
      setIsSuccess(true);
      const { result: resultJson } = data;
      setResult(resultJson);
    }
    setIsLoading(false);
  };

  return { onFetch, result, isSuccess, isLoading };
}
