// module.exports = ctx => {
//   ctx.state.data = {
//     msg: 'Hello Pig'
//   }
// }
const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var result = await mysql('user')
  ctx.state.data = {
    msg: result
  }
}