export const errorHandler = (error, callback) => {
  const errorInfo = error.response.data;
  const {
    statusCode,
    message,
  } = errorInfo;

  console.log(`%c ${statusCode}: ${message}`, "background-color: #f54251; color: white; padding-right: 8px");
  return callback(errorInfo.message);
};
