
import Link from "next/link"

export default function Resume1() {
	return (
		<>

			<section id="resume" className="section-resume-1 position-relative pt-150 overflow-hidden" data-background="assets/imgs/projects/projects-1/background.png">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Resume</h3>
							<span className="fs-5 fw-medium text-200">
								5+ years of full-charge bookkeeping and financial reporting for
								<br />
								multi-client, multi-entity US &amp; Canada clients.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get in touch
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6">
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 mb-lg-0 mb-6">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-1.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Education</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">ICAP</p>
												<h5>Chartered Accountant (Intermediate)</h5>
												<p className="text-300 mb-0">Institute of Chartered Accountants of Pakistan</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold fs-6">AFC &amp; CAF</h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">UMT, Lahore</p>
												<h5>Master's in Accounting &amp; Finance</h5>
												<p className="text-300 mb-0">University of Management and Technology</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold fs-6">MS</h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">UMT, Lahore</p>
												<h5>B.S. Accounting &amp; Finance</h5>
												<p className="text-300 mb-0">University of Management and Technology</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold fs-6">BS</h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">Intuit</p>
												<h5>QuickBooks Certified ProAdvisor</h5>
												<p className="text-300 mb-0">Plus Xero Certified Advisor &amp; AP/AR Ops Specialization</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold fs-6">Certified</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 h-100">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-2.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Experience</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Aug 2025 - Present</p>
										<h5>Bookkeeper &amp; Financial Reporting Consultant</h5>
										<p className="text-300 mb-0">Real Estate Holding &amp; Loan Servicing Group · US (Remote)</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Jan 2024 - Mar 2026</p>
										<h5>Financial Reporter &amp; Bookkeeper</h5>
										<p className="text-300 mb-0">A&amp;I Financials · US Clients (Remote)</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Oct 2021 - Dec 2025</p>
										<h5>Bookkeeper</h5>
										<p className="text-300 mb-0">Mobile Options · Canada (Remote)</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-4">
										<p className="text-300 mb-0 fst-italic">Roles held concurrently as independent remote client engagements.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-relative pb-160 pt-lg-150">
					<div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
						<h3 className="stroke fs-150 text-uppercase text-white">Bookkeeping . Reconciliation . Financial Reporting</h3>
					</div>
				</div>
			</section>

		</>
	)
}
