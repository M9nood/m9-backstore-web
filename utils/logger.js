const DEBUG_MODE = process.env.DEBUG_MODE || true

const appLog = (severity, message, req, status, err) => {
  const log = {
    severity,
    timestamp: new Date().toISOString(),
    // @ts-ignore
    message: req ? { message, body: req.body } : { message },
    ip: req.connection.remoteAddress,
    user_id: req.headers.authorization,
    request_id: req.headers['X-Request-ID'] ? `${req.headers['X-Request-ID']}` : '-',
    method: req.method,
    status,
    // @ts-ignore
    uri: req.originalUrl,
    user_agent: req.headers['user-agent'],
    trace: err.stack
  }

  // eslint-disable-next-line
  console.log(JSON.stringify(log))
}

const info = (message, req, httpStatus) => {
  appLog('info', message, req, httpStatus)
}

const error = (message, err, req) => {
  appLog('error', message || err.message, req, undefined, err)
}

const debug = (message) => {
  if (DEBUG_MODE === 'on') {
    appLog('debug', message)
  }
}

const audit = (message, req) => {
  const log = {
    timestamp: new Date().toISOString(),
    message,
    ip: req.connection.remoteAddress || '',
    user_id: req.headers.authorization || '',
    method: req.method || '',
    // @ts-ignore
    uri: req.originalUrl || ''
  }

  // eslint-disable-next-line
  console.log(JSON.stringify(log))
}

export default {
  info,
  error,
  debug,
  audit
}
