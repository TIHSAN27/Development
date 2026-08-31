
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Services() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-service-list pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											My Services
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Keeping Your Books
											<span className="text-300">Clean, Compliant, and</span>
											Ready for
											<span className="text-300">Every Decision</span>
										</h3>
										<p className="text-300 fs-5">
											With 5+ years managing full-charge bookkeeping across multi-entity, <br />
											multi-client environments, I turn messy books into accurate, audit-ready <br />
											ledgers. Explore how I can support your business below.
										</p>
									</div>
									<div className="card-scroll mt-8">
										<div className="cards">
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Full-Charge Bookkeeping</h3>
															<p className="mb-0">Accurate. Timely. Audit-Ready. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-1.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Transactional Coding
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Daily transactional coding and journal entries across multi-client, multi-entity ledgers, ensuring GAAP compliance and accuracy from the first entry to the trial balance.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Bank &amp; Credit Card Reconciliation
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Reconciling bank and credit card accounts on a recurring schedule, catching discrepancies early and keeping ledgers audit-ready year-round.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Books Cleanup &amp; Catch-Up
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Migrating and catching up a full fiscal year of transactions following a prior firm handoff, with a full period-by-period tie-out.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Accounts Payable &amp; Receivable</h3>
															<p className="mb-0">Organized. On Time. Nothing Missed. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-2.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Accounts Payable
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Managing bill approvals and vendor payment cycles in Bill.com, consolidating multi-payee payables registers into one reconciled master with full tie-out.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Accounts Receivable &amp; Collections
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Building and maintaining AR/collections trackers with aging, status, and case-level balance build-ups across dozens of accounts.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Payroll Processing
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Processing biweekly payroll cycles in Gusto, keeping payroll registers reconciled alongside payables for a clean, single source of truth.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Financial Reporting &amp; Close</h3>
															<p className="mb-0">Clear. Consistent. Decision-Ready. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-3.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Monthly Financial Statements
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Preparing monthly P&amp;L, Balance Sheet, and Cash Flow statements, delivering actionable financial insights aligned to GAAP &amp; IFRS.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Multi-Entity Consolidation
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Consolidating entity-level P&amp;L reporting across affiliated LLCs into a single, coherent picture for ownership and stakeholders.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Audit Support
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Maintaining precise, audit-ready documentation and supporting year-end financial reviews and tax compliance work.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Reconciliation &amp; Cash Flow</h3>
															<p className="mb-0">Automated. Forward-Looking. Reliable. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-4.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Reconciliation Automation
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Automating high-volume reconciliations using Power Query, XLOOKUP, and Pivot Tables — cutting manual processing time by 50%.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Cash Flow Forecasting
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Preparing recurring payment and transfer projection calendars that coordinate cash movement across multiple bank accounts.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Loan Amortization
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Reconstructing loan amortization schedules and payoff statements for seller-financed notes and settlement trust disbursements.
															</p>
														</div>
													</div>
												</div>
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
												<span className="ds-3 count text-primary-1 fw-medium my-0">$<span className="odometer ds-1 text-dark fw-semibold">250</span>K+</span>
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
								<div className="col-lg-4 d-flex flex-column">
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-phone-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Phone Number</span>
											<h6 className="mb-0">+1 571 358 9822</h6>
										</div>
										<Link href="tel:+15713589822" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
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
								<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
									<div className="position-relative">
										<div className="position-relative z-2">
											<h3>Leave a messge</h3>
											<form action="#">
												<div className="row mt-3">
													<div className="col-md-6 ">
														<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="John Doe" aria-label="username" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact.john@gmail.com" aria-label="email" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
													</div>
													<div className="col-12">
														<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary-1">*</span></label>
														<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea" />
													</div>
													<div className="col-12">
														<button type="submit" className="btn btn-gradient mt-3">
															Send Message
															<i className="ri-arrow-right-up-line" />
														</button>
													</div>
												</div>
											</form>
										</div>
										<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
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