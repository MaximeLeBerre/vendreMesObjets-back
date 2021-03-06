const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=> {
  try{
    const token = req.headers.authorization.split(' ')[1];
    const decodedtoken = jwt.verify(token, 'RAMDOM_TOKEN_SECRET');
    const userId = decodedtoken.userId;
    if(req.body.userId && req.body.userId !== userId){
      throw 'USER ID non valable'
    }else{
      next()
    }
  }
  catch{
    res.status(401).json({error: error || 'requete non authentifiée !'});
  }
}