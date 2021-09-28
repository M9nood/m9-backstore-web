import { ServerResponse } from 'http'

export const createJsonResponse = (res: ServerResponse, httpStatus: number, body?: any) => {
  res.writeHead(httpStatus, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(body))
}

export const unexpectedErrResponse = () => ({
  data: 'เกิดข้อผิดพลาดในระบบ',
  status: 500
})
