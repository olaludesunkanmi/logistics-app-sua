// Controllers for Orders, all the functionality are not yet built

const postOrder = async (req, res) => {
   return res.status(501).send('Not yet Implemented');
}

const pickOrder = async (req, res) => {
    res.status(501).send('Not yet Implemented');
}

const riderMarkOrder = async (req, res) => {
  return res.status(501).send('Not yet Implemented');
    
}

const userMarkOrder = async (req, res) => {
    res.status(501).send('Not yet Implemented');
    next()
}

const getAllReceivedOrder = async (req, res) => {
    res.status(501).send('Not yet Implemented');
    next()
}

module.exports = { postOrder, pickOrder, riderMarkOrder, userMarkOrder, getAllReceivedOrder }