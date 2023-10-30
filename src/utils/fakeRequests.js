export const fakePending = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
};
