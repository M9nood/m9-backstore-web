export const createJsonResponse = (res, httpStatus, body) => {
  res.writeHead(httpStatus, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(body))
}

export const unexpectedErrResponse = (res, httpStatus, errorName = '', errorMessage = '') => {
  res.writeHead(httpStatus, { 'Content-Type': 'application/json' })
  res.end(
    JSON.stringify({
      data: null,
      errorName,
      errorMessage,
      status: false
    })
  )
}
