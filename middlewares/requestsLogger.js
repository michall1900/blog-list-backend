const morgan = require('morgan')

morgan.token('req_body', (req) => JSON.stringify(req.body))

const morganDefinition = morgan(':date[clf]\nrequest {\nfrom: :remote-addr,\nmethod: :method,\nto: :url,\ncontent-type: :req[content-type]\ncontent: :req_body\n}\nresponse {\nstatus: :status,\ncontent-length: :res[content-length],\nresponse-time: :response-time ms\n}\n\n')

module.exports = morganDefinition