
import Link from "next/link"

export default function UpworkBadges() {
	return (
		<>

			<section className="section-upwork-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Verified on Upwork</h3>
							<span className="fs-5 fw-medium text-200">
								A track record clients can check for themselves — ratings, job
								<br />
								success, and reviews, all verified by Upwork.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="https://www.upwork.com/freelancers/~01dedc388fc4119c52" target="_blank" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								View My Upwork Profile
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-8 g-4">
						<div className="col-6 col-lg-3">
							<div className="bg-white rounded-4 p-4 p-lg-5 text-center h-100">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-circle mx-auto mb-3">
									<i className="ri-vip-crown-fill text-primary-1 fs-26" />
								</div>
								<h3 className="fw-semibold text-dark mb-1">100%</h3>
								<p className="text-300 mb-0">Job Success</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="bg-white rounded-4 p-4 p-lg-5 text-center h-100">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-circle mx-auto mb-3">
									<i className="ri-rocket-fill text-primary-1 fs-26" />
								</div>
								<h3 className="fw-semibold text-dark mb-1">Rising</h3>
								<p className="text-300 mb-0">Talent</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="bg-white rounded-4 p-4 p-lg-5 text-center h-100">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-circle mx-auto mb-3">
									<i className="ri-star-fill text-primary-1 fs-26" />
								</div>
								<h3 className="fw-semibold text-dark mb-1">5.0</h3>
								<p className="text-300 mb-0">Client Rating</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="bg-white rounded-4 p-4 p-lg-5 text-center h-100">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-circle mx-auto mb-3">
									<i className="ri-shield-check-fill text-primary-1 fs-26" />
								</div>
								<h3 className="fw-semibold text-dark mb-1">Verified</h3>
								<p className="text-300 mb-0">Identity</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
