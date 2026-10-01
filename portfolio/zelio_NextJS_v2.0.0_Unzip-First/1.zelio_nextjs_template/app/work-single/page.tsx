
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function WorkSingle() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work-single section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											work details
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Multi-Entity AP &amp; Payroll Consolidation
										</h3>
										<p className="text-300 fs-5 mb-0">
											Consolidating a 60+ payee, 10-period payables and payroll register across a multi-entity real estate holding group into one reconciled master with full period-by-period tie-out.
										</p>
									</div>
								</div>
								<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Client</p>
										<h6>Real Estate Holding Group</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Start</p>
										<h6>Aug 2025</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Status</p>
										<h6>Ongoing</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Services</p>
										<h6>Full-Charge Bookkeeping</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Entities</p>
										<h6>6+ Affiliated LLCs</h6>
									</div>
								</div>
								<img src="/assets/imgs/projects/projects-1/img-1.svg" alt="Payables &amp; payroll register dashboard" className="w-100 rounded-4" />
								<div className="col-lg-8 mx-lg-auto mt-8">
									<h5 className="fs-5 fw-medium">Description</h5>
									<p className="text-300">
										This real estate holding and loan servicing group manages payables and payroll across 6+ affiliated LLCs, with each entity running its own vendors, bank accounts, and pay cycles. Before this engagement, payables and payroll were tracked in separate, inconsistent registers across entities, making it difficult to see a clean, reconciled picture of cash outflow. The goal was to build one reliable system of record the whole group could trust.
									</p>
									<h5 className="fs-5 fw-medium mt-4">Scope of Work</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Consolidated Register: <span className="text-300 fw-medium">Merged 60+ payees and 10 periods of payables and payroll data across all entities into a single reconciled master register.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Biweekly Payroll Processing: <span className="text-300 fw-medium">Managed end-to-end biweekly payroll runs, keeping payroll tied to the same consolidated register as vendor payables.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Full Period-by-Period Tie-Out: <span className="text-300 fw-medium">Reconciled every period against bank activity so the register matches actual cash movement, entity by entity.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Bill Approval Workflow: <span className="text-300 fw-medium">Set up a clean bill-approval and payment workflow in Bill.com so vendor payments route consistently across entities.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Tools &amp; Platforms</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Bookkeeping: <span className="text-300 fw-medium">QuickBooks Desktop Enterprise for multi-entity ledgers and reporting.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Payables: <span className="text-300 fw-medium">Bill.com for vendor bill approvals and payment routing.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Register &amp; Reconciliation: <span className="text-300 fw-medium">Excel with Power Query and Pivot Tables to consolidate and tie out the master register.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Results</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">One Source of Truth: <span className="text-300 fw-medium">A single, reconciled register replaced scattered per-entity tracking.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Audit-Ready Records: <span className="text-300 fw-medium">Every payment ties back to a reconciled period, ready for review at any time.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Faster Close: <span className="text-300 fw-medium">Automated reconciliation steps cut manual processing time significantly each period.</span></p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					{/*Static 1*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">5</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Years of</p>
													<p className="fs-5 mb-0 fw-bold">Experience</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">6</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Affiliated Entities</p>
													<p className="fs-5 mb-0 fw-bold">Managed</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">$<span className="odometer ds-1 text-dark fw-semibold">5</span>M+</span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Receivables</p>
													<p className="fs-5 mb-0 fw-bold">Tracked</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0"><span className="odometer ds-1 text-dark fw-semibold">50</span>%</span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Faster</p>
													<p className="fs-5 mb-0 fw-bold">Reconciliations</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
						<div className="container position-relative z-1">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
							<span className="fs-5 fw-medium text-200">
								I'm always happy to take on new bookkeeping engagements. If you need help with
								<br />
								reconciliations, reporting, or getting your books audit-ready, feel free to reach out!
							</span>
							<div className="row mt-8">
								<div className="col-12 d-flex flex-wrap justify-content-center gap-5">
									<div className="d-flex align-items-center position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">taimoorahsan27@gmail.com</h6>
										</div>
										<Link href="mailto:taimoorahsan27@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-linkedin-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">LinkedIn</span>
											<h6 className="mb-0">linkedin.com/in/tihsan13</h6>
										</div>
										<Link href="https://www.linkedin.com/in/tihsan13" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-briefcase-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Upwork</span>
											<h6 className="mb-0">Hire Me on Upwork</h6>
										</div>
										<Link href="https://www.upwork.com/freelancers/~01dedc388fc4119c52" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-map-2-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Location</span>
											<h6 className="mb-0">Remote — Serving Clients Across the US &amp; Canada</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
							<div className="wow img-custom-anim-top">
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">taimoorihsan</h3>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}