import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
	const [feedback, setFeedback] = useState({
		overallDesc: '',
		notUnderstand: '',
		improve: '',
		rating: 0,
		anyGap: '',
		skillsImprove: '',
		whoseImpressive: '',
		overallRating: '',
	})

	const onChange = e => {
		setFeedback({ ...feedback, [e.target.name]: e.target.value })
	}

	const onSubmit = () => {
		axios
			.post('/api/submit', {
				body: feedback,
			})
			.then(res => console.log(res))
	}

	return (
		<div className='container'>
			<div className='row d-flex justify-content-center'>
				<div className='col-lg-8 create-quiz'>
					<div className='image-box'>
					<Image
      				src="/feedback.jpg"
     				 width={2101}
      				height={888}
     				 alt="Picture of the author"
    				/>	<Image
					src="/feedback.jpg"
					width={2101}
					height={888}
					alt="Picture of the author"
				  />
					</div>
					<div className='quiz-header'>
						<h1>Share your feedback</h1>
						<p>Feel free to share your opinion</p>
					</div>
					<div className='question long my-3'>
						<h3>How would you describe your overall experience with us?</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<textarea
									onChange={onChange}
									value={feedback.overallDesc}
									name='overallDesc'
									className='form-control'
									placeholder='Descriptive Answer'
									rows='5'
								></textarea>
							</div>
						</div>
					</div>
					<div className='question short my-3'>
						<h3>Is there anything you didn't understand from any of the discussed topic?</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<input
									onChange={onChange}
									value={feedback.notUnderstand}
									name='notUnderstand'
									type='text'
									className='form-control'
									placeholder='Short Answer'
								/>
							</div>
						</div>
					</div>
					<div className='question short my-3'>
						<h3>What else we could have added for a better result/approach?</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<input
									onChange={onChange}
									value={feedback.improve}
									name='improve'
									type='text'
									className='form-control'
									placeholder='Short Answer'
								/>
							</div>
						</div>
					</div>
					<div className='question linear my-3'>
						<h3>How much would you rate this presentation?</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<div className='range-container'>
									<input
										onChange={onChange}
										value={feedback.rating}
										name='rating'
										type='range'
										min={0}
										max={5}
									/>
									<div className='marks'>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</div>
									<div className='denominators'>
										<span>Worst</span>
										<span>Excellent</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='question trfl my-3'>
						<h3>Have you noticed any gaps in our professionalism?</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<div className='input-container'>
									<input
										type='radio'
										onChange={() => setFeedback({ ...feedback, anyGap: true })}
										checked={feedback.anyGap}
										name='anyGap'
									/>
									<label htmlFor='anyGap'>Yes</label>
								</div>
								<div className='input-container'>
									<input
										type='radio'
										onChange={() => setFeedback({ ...feedback, anyGap: false })}
										checked={!feedback.anyGap}
										name='anyGap'
									/>
									<label htmlFor='anyGap'>No</label>
								</div>
							</div>
						</div>
					</div>

					<div className='question short my-3'>
						<h3>What skills could we improve to be a better team?</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<input
									onChange={onChange}
									value={feedback.skillsImprove}
									name='skillsImprove'
									type='text'
									className='form-control'
									placeholder='Short Answer'
								/>
							</div>
						</div>
					</div>
					<div className='question short my-3'>
						<h3>Whose presentation did you find most impressive?</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<input
									onChange={onChange}
									value={feedback.whoseImpressive}
									name='whoseImpressive'
									type='text'
									className='form-control'
									placeholder='Short Answer'
								/>
							</div>
						</div>
					</div>
					<div className='question linear my-3'>
						<h3>Overall rating</h3>
						<div className='options'>
							<div className='current-options mt-2'>
								<div className='range-container'>
									<input
										name='overallRating'
										type='range'
										min={0}
										max={5}
										onChange={onChange}
										value={feedback.overallRating}
									/>
									<div className='marks'>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</div>
									<div className='denominators'>
										<span>Worst</span>
										<span>Excellent</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='add-questions'>
						<button className='btn btn-success me-2' onClick={onSubmit}>
							Submit Feedback
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
