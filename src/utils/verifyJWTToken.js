import jwt from 'jsonwebtoken';

export default token =>
  new Promise((resolve,reject) => {
    jwt.verify(token,process.env.JWT_SECRET, (err,decodeToken) => {
      if (err || !decodeToken) {
        return reject(err)
      }

      resolve(decodeToken)
    })
  })