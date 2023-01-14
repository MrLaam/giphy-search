export const giphySearchResponseMapper = (res: any) => {
  let urls: string[] = [];
  res?.data?.forEach((imgData: any) => {
    urls.push(imgData?.images?.downsized?.url);
  });
  return urls;
};
