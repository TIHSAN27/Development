
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Pricing() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-pricing-1 pt-130 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-8">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											My Pricing
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Bookkeeping Packages <span className="text-300">Sized to Your</span> Business
										</h3>
										<p className="text-300 fs-5 mb-0">
											Flexible plans covering full-charge bookkeeping, AP/AR, and financial reporting — <br />
											scoped to your transaction volume and number of entities
										</p>
									</div>
									<div className="row mt-8 d-flex">
										<div className="col-md-6">
											<div className="card-pricing-1 p-6 rounded-4 h-100 d-flex flex-column">
												<span className="text-uppercase fs-7">Starter</span> <br />
												<h3 className="ds-3 fw-medium text-primary-1 mb-5">$45<span className="text-300 fs-4">/Hour</span></h3>
												<ul className="ps-3 border-top border-600 pt-5 mb-auto">
													<li>
														<p className="text-300">Single-entity, single-client bookkeeping</p>
													</li>
													<li>
														<p className="text-300">Transactional coding &amp; journal entries</p>
													</li>
													<li>
														<p className="text-300">Monthly bank &amp; credit card reconciliation</p>
													</li>
													<li>
														<p className="text-300">QuickBooks Online or Xero</p>
													</li>
													<li>
														<p className="text-300">Monthly P&amp;L &amp; Balance Sheet</p>
													</li>
													<li>
														<p className="text-300">Remote/online collaboration</p>
													</li>
												</ul>
												<Link href="/#contact" className="btn btn-primary mt-5 w-100 justify-content-center">
													Get a Quote
													<i className="ri-arrow-right-up-line" />
												</Link>
											</div>
										</div>
										<div className="col-md-6">
											<div className="card-pricing-1 p-6 rounded-4 align-self-stretch mt-md-0 mt-6">
												<span className="text-uppercase fs-7">Multi-Entity</span> <br />
												<h3 className="ds-3 fw-medium text-primary-1 mb-5">$65<span className="text-300 fs-4">/Hour</span></h3>
												<ul className="ps-3 border-top border-600 pt-5">
													<li>
														<p className="text-300">Multi-client, multi-entity full-charge bookkeeping</p>
													</li>
													<li>
														<p className="text-300">Accounts payable, receivable &amp; collections</p>
													</li>
													<li>
														<p className="text-300">Biweekly payroll processing in Gusto</p>
													</li>
													<li>
														<p className="text-300">QuickBooks Desktop Enterprise, Xero, Bill.com</p>
													</li>
													<li>
														<p className="text-300">Consolidated cash flow &amp; entity-level P&amp;L reporting</p>
													</li>
													<li>
														<p className="text-300">Reconciliation automation (Power Query, XLOOKUP)</p>
													</li>
													<li>
														<p className="text-300">Books cleanup &amp; catch-up available</p>
													</li>
													<li>
														<p className="text-300">Priority turnaround on month-end close</p>
													</li>
												</ul>
												<Link href="/#contact" className="btn btn-primary mt-5 w-100 justify-content-center">
													Get a Quote
													<i className="ri-arrow-right-up-line" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-6  mx-md-auto text-center">
									<h2 className="text-300 mb-8">
										Common Questions
									</h2>
									<div className="accordion">
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseSevent">
													<p className="fs-5 mb-0 text-dark">Which accounting software do you work in?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseSevent" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													I'm a QuickBooks Certified ProAdvisor (Online &amp; Desktop Enterprise) and Xero Certified Advisor, with hands-on experience in Gusto for payroll, Bill.com for AP, and SAP/ERP for larger environments.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEight">
													<p className="fs-5 mb-0 text-dark">Can you clean up or catch up books that have fallen behind?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseEight" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													Yes — I've migrated multi-entity books onto QuickBooks Desktop Enterprise and caught up a full fiscal year of transactions following a prior firm handoff, with a full period-by-period tie-out.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseNine">
													<p className="fs-5 mb-0 text-dark">How much do your services cost?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseNine" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													Rates start at $45/hour for single-entity bookkeeping and $65/hour for multi-client, multi-entity work. Get in touch with your transaction volume and entity count for an exact quote.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTen">
													<p className="fs-5 mb-0 text-dark">How quickly will my books be up to date?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseTen" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													Ongoing monthly bookkeeping is delivered on a recurring close schedule. Cleanup or catch-up work is scoped after reviewing your books, typically completed within a few weeks depending on backlog.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEleven">
													<p className="fs-5 mb-0 text-dark">Do you offer ongoing monthly support?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseEleven" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													Yes — most engagements are ongoing monthly bookkeeping, covering transactional coding, reconciliations, AP/AR, and financial reporting on a recurring basis, not just a one-time cleanup.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTwelve">
													<p className="fs-5 mb-0 text-dark">Do you work with businesses outside real estate?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseTwelve" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													Yes — while I have deep experience with real estate holding &amp; property management groups, I've supported multiple concurrent US &amp; Canada clients across other industries as well.
												</p>
											</div>
										</div>
									</div>
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
								<div className="col-lg-5 mx-auto d-flex flex-column">
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">taimoorahsan27@gmail.com</h6>
										</div>
										<Link href="mailto:taimoorahsan27@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-linkedin-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">LinkedIn</span>
											<h6 className="mb-0">linkedin.com/in/tihsan13</h6>
										</div>
										<Link href="https://www.linkedin.com/in/tihsan13" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
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