import ApiManager from "./APIManager";

export async function getFetch(route: string, setData: (data: any) => void, setIsLoading: (loading: boolean) => void, onError: (error: any) => void) {
  if (!route) return;
  if (setIsLoading) setIsLoading(true);
  const controller = new AbortController();
  let data = null;
  await ApiManager.get(route, { signal: controller.signal })
    .then((response) => {
      if (setData) setData(response.data)
    })
    .catch((err) => {
      if (err && onError) {
        onError(err);
      }
    })
    .finally(() => {
      controller.abort();
      if (setIsLoading) setIsLoading(false);
    });

  return data;
}