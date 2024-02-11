import { connect } from '@/database'
import Basic from '@/models/basic.model'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		connect()
		try {
			const feedb = await Basic.create(req.body)
			res.status(200).json({ message: 'Reply from server', data: feedb })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	} else {
		res.status(500).json({ message: 'Only POST is allowed' })
	}
}
