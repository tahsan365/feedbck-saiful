export default function Home() {
	return (
		<div className='container'>
			<div className='row d-flex justify-content-center'>
				<div className='col-lg-8 create-quiz'>
					<div className='quiz-header'>
						<h1>Share your feedback</h1>
						<p>Feel free to share your opinion</p>
					</div>

					<div className='add-questions'>
						<button className='btn btn-success me-2'>submit feedback</button>
					</div>
				</div>
			</div>
		</div>
	)
}
