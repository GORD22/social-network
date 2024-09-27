export const getApiUrl = (mode: string | undefined) => {
  if (mode === 'development') {
    return process.env.DEV_URL;
  }

  return process.env.PROD_URL;
};
