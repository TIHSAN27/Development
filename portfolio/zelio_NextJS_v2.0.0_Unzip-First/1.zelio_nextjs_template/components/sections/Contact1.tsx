
import Link from "next/link"

export default function Contact1() {
	return (
		<>

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

		</>
	)
}
