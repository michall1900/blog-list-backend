const morgan = require('morgan')

morgan.token('req_body', (req) => JSON.stringify(req.body))

const morganDefinition = morgan(':date[clf] \n request {\nfrom: :remote-addr,\nmethod: :method,\nto: :url,\ncontent-type: :req[content-type]\ncontent: :req_body\n}\n response {\nstatus: :status,\ncontent-length: :res[content-length],\nresponse-time: :response-time ms\n}')

module.exports = morganDefinition