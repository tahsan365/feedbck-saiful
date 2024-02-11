export default function Home() {
	return (
		<div className='container'>
			<div className='row d-flex justify-content-center'>
				<div className='col-lg-8 create-quiz'>
					<div className='quiz-header'>
						<h1>{'title'}</h1>
						<p>{'description'}</p>
					</div>

					<div className='add-questions'>
						<button className='btn btn-success me-2'>Add Question</button>
						<button className='btn btn-warning me-2'>Settings</button>
						<button className='btn btn-dark text-light'>Publish Quiz</button>
					</div>
				</div>
			</div>
		</div>
	)
}
