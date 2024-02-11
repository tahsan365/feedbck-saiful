export default function Home() {
	return (
		<div className='container'>
			<div className='row d-flex justify-content-center'>
				<div className='col-lg-8 create-quiz'>

					<div class='image-box'></div>

					<div className='quiz-header'>
						<h1>Share your feedback</h1>
						<p>Feel free to share your opinion</p>
					</div>

					<div className='question short my-3'>
						<h3>Question Title</h3>
						<p>Question Description (Optional)</p>
						<div className='options'>
							<div className='current-options mt-2'>
								<input type='text' className='form-control' placeholder='Short Answer' />
							</div>
						</div>
					</div>

					<div className='question long my-3'>
						<h3>Question Title</h3>
						<p>Question Description (Optional)</p>
						<div className='options'>
							<div className='current-options mt-2'>
								<textarea className='form-control' placeholder='Descriptive Answer' rows='5'></textarea>
							</div>
						</div>
					</div>

					<div className='question trfl my-3'>
						<h3>Question Title</h3>
						<p>Question Description (Optional)</p>
						<div className='options'>
							<div className='current-options mt-2'>
								<div className='input-container'>
									<input type='radio' name='trfl' />
									<label for=''>Option Title (True)</label>
								</div>
								<div className='input-container'>
									<input type='radio' name='trfl' />
									<label for=''>Option Title (False)</label>
								</div>
								<div className='input-container'>
									<input type='radio' name='trfl' />
									<label for=''>Option Title (False)</label>
								</div>
							</div>
						</div>
					</div>

					<div className='question linear my-3'>
						<h3>Question Title</h3>
						<p>Question Description (Optional)</p>
						<div className='options'>
							<div className='current-options mt-2'>
								<div className='range-container'>
									<input type='range' min='0' max='10' value='5' />
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
						<button className='btn btn-success me-2'>submit feedback</button>
					</div>
				</div>
			</div>
		</div>
	)
}
