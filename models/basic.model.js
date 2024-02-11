import { Schema, models, model } from 'mongoose'

const basicSchema = new Schema(
	{
		overallDesc: String,
		notUnderstand: String,
		improve: String,
		rating: String,
		anyGap: String,
		skillsImprove: String,
		whoseImpressive: String,
		overallRating: String,
	},
	{
		timestamps: true,
	}
)

const Basic = models.basics || model('basics', basicSchema)

export default Basic
