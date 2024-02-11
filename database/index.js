import mongoose from 'mongoose'

export async function connect() {
	try {
		mongoose.connect(process.env.MONGODB_URI + '/feedback')
		const connection = mongoose.connection

		connection.on('connected', () => {
			console.log('DB Connected Successfully')
		})

		connection.on('error', err => {
			console.log('DB Connection Error:', err)
		})
	} catch (error) {
		console.log('DB Error:', error)
	}
}
