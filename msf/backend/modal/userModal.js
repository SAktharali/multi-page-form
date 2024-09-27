const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name:
{type:String,
required:[true,'please enter name']
},
email:
{type:String,
required:[true,'please enter email'],
unique:true
},
mobileNumber:
{type:String,
required:[true,'please enter mobile number']
},
password:
{type:String,
required:[true,'please enter password']
},
address:
{type:String,
required:[true,'please enter address']
},
district:
{type:String,
required:[true,'please enter district']
},
state:
{type:String,
required:[true,'please enter state']
},
city:
{type:String,
required:[true,'please enter city']
},
cardNumber:
{type:String,
required:[true,'please enter card number']
},
cardName:
{type:String,
required:[true,'please enter card name']
},
expiryDate:
{type:String,
required:[true,'please enter expiry date']
},
cvv:
{type:String,
required:[true,'please enter cvv']
},
});


const userModal = mongoose.model('User',userSchema);

module.exports = userModal;