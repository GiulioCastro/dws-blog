export const getLastName = (fullname?: string): string => {
  if (!fullname) return "";
  return fullname.split(" ")[1];
};
