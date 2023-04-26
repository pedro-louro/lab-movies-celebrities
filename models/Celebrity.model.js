//  Add your code here
const {Schema, model} = require("mongoose")

const celebritiesSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
},
{
  timestamps: true,
}
)

const celebritiesModel = model("Celebrities", celebritiesSchema )
module.exports = celebritiesModel;
