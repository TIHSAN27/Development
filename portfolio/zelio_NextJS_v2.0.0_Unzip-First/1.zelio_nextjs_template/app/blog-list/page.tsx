
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogList() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-blog-list pt-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											Recent blog
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-300">
											Practical <span className="text-dark">bookkeeping tips and insights</span> from the trenches
										</h3>
										<p className="text-300 fs-5 mb-0">
											Notes on reconciliation, month-end close, and the accounting software choices <br />
											that make multi-entity bookkeeping easier to manage
										</p>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-1.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Excel Tips</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">5 Excel Formulas Every Bookkeeper Should Know</h5>
											<p className="blog-card__description fs-6">How Power Query, XLOOKUP, and Pivot Tables cut reconciliation time in half.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-2.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Month-End Close</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">A Month-End Close Checklist for Multi-Entity Books</h5>
											<p className="blog-card__description fs-6">How I keep 6+ affiliated entities audit-ready every single month.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-3.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Software</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">QuickBooks vs. Xero: Choosing the Right Platform</h5>
											<p className="blog-card__description fs-6">What actually matters when picking accounting software for your business.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-4.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Reconciliation</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">How I Cut Reconciliation Time by 50% with Power Query</h5>
											<p className="blog-card__description fs-6">A practical look at automating high-volume bank reconciliations.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-5.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">AR &amp; Collections</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">Building an Aging Report That Actually Gets Bills Paid</h5>
											<p className="blog-card__description fs-6">Lessons from managing a $250K+ collections tracker across 45+ accounts.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-6.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Payroll</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">Gusto vs. ADP: What Small Businesses Should Know</h5>
											<p className="blog-card__description fs-6">Comparing payroll platforms for remote, multi-entity teams.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-7.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Cleanup</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">Signs Your Books Need a Bookkeeping Catch-Up</h5>
											<p className="blog-card__description fs-6">What to look for before a backlog turns into an audit problem.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-8.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Cash Flow</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">Simple Cash Flow Forecasting for Small Business Owners</h5>
											<p className="blog-card__description fs-6">A no-frills approach to projecting cash movement across accounts.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-9.svg" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Real Estate</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2026 • 3 min read</span>
											<h5 className="blog-card__title">Bookkeeping for Multi-Entity Real Estate Portfolios</h5>
											<p className="blog-card__description fs-6">How consolidated reporting keeps 6+ affiliated LLCs in sync.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="container">
						<div className="row py-120">
							<div className="d-flex justify-content-center align-items-center">
								<nav aria-label="Page navigation example">
									<ul className="pagination gap-2">
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Previous">
												<i className="ri-arrow-left-line" />
											</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">1</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">2</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">3</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Next">
												<i className="ri-arrow-right-line" />
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
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
											<i className="ri-briefcase-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Upwork</span>
											<h6 className="mb-0">Hire Me on Upwork</h6>
										</div>
										<Link href="https://www.upwork.com/freelancers/~01dedc388fc4119c52" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
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