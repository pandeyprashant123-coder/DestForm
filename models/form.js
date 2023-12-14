import { Schema,model,models } from "mongoose";

const formSchema = new Schema({
    updated: { type: Date, default: Date.now },
    region:String,
    destination:String,
    shortDescription:String,
    longDescription:String,
    icon_values:{
        altitude:String,
        duration:String,
        coordinates:String,
        dailyActivity:String,
        grade:String,
    },
    availableDate:String,
    price:String,
    itinerary:[{
        heading:String,
        description:String
    }],
    includes:[{list:String}],
    excludes:[{list:String}],
    packaging_list:[{list:String}],
    paymentInfo:String,
    cancellationDetails:String,
    insurance:String,
    faq:String
})

const Form = models.Form || model('Form',formSchema)

export default Form