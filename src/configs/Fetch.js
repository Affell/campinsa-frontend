import { API, handleErrorAPI } from "./API";

// getFetch:
// "route" : indique la route à requeter
// "setData" : est le 'setter' du 'react-state' qui sera utilisé pour 'response.data'
// "setIsLoading" : est le 'setter' du 'react-state' qui sera utilisé lors de l'execution de la requête
// "options" : Préciser {hideError : true, debug: true} pour cacher la notification toast et/ou activer le console log
export async function getFetch(route, setData, setIsLoading, options) {
  if (!route) return;
  if (setIsLoading) setIsLoading(true);
  const controller = new AbortController();
  let data = null;
  await API.get(route, { signal: controller.signal })
    .then((response) => {
      if (setData) setData({ status: response.status ?? 0, data: response.data ?? null })
      if (options && options.debug) {
        console.log(`[GET API] '${route}' (status:${response.status ?? 0}):`, response.data);
      }
    })
    .catch((err) => {
      if (err) {
        if (options?.debug) console.log(`[GET API] '${route}' error:`, err);
        handleErrorAPI(err, options && options.hideError);
      }
    })
    .finally(() => {
      controller.abort();
      if (setIsLoading) setIsLoading(false);
    });

  return data;
}

// postFetch:
// "route" : indique la route à requeter
// "data" : est la donnée en JSON qui sera postée dans le body de la requête
// "setIsLoading" : est le 'setter' du 'react-state' qui sera utilisé lors de l'execution de la requête
// "options" : Préciser {hideError : true, debug: true} pour cacher la notification toast et/ou activer le console log
export async function postFetch(route, data, setIsLoading, setResponse, setError, options) {
  if (setIsLoading) setIsLoading(true);
  const controller = new AbortController();
  await API.post(route, data, { signal: controller.signal })
    .then((response) => {
      if (setResponse) setResponse({ status: response.status ?? 0, data: response.data ?? null })
      if (options && !!options.debug) {
        console.log(`[POST API] '${route}' (status:${response.status ?? 0}):`, response.data ?? null);
      }
    })
    .catch((err) => {
      if (err) {
        if (setError) setError({ status: err.response.status ?? 0, message: err.response.data?.message ?? null })
        if (options && options.debug) console.log(`[POST API] '${route}' error:`, err);
        handleErrorAPI(err, options && options.hideError);
      }
    })
    .finally(() => {
      if (options && options.debug) console.log(`[POST API] '${route}' data sent:`, data);
      if (options && options.refresh) window.dispatchEvent(new Event("RefreshDataNeeded"));
      controller.abort();
      if (setIsLoading) setIsLoading(false);
    });
}

export async function deleteFetch(route, setIsLoading, options) {
  const result = { status: "success", message: "" };
  setIsLoading(true);
  const controller = new AbortController();
  await API.delete(route, { signal: controller.signal })
    .then((response) => {
      if (options && options.debug) {
        console.log(`[DELETE API] '${route}' (status:${response.status ?? 0}):`, JSON.stringify(response.data ?? null));
      }
    })
    .catch((err) => {
      if (err) {
        if (options && options.debug) console.log(`[DELETE API] '${route}' error:`, err);
        handleErrorAPI(err, options && options.hideError);
        result.status = "error";
        result.message =
          err && err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : "Echec pendant la supression";
      }
    })
    .finally(() => {
      if (options && options.refresh) window.dispatchEvent(new Event("RefreshDataNeeded"));
      controller.abort();
      setIsLoading(false);
    });

  return result;
}