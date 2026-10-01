import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
					<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
						<button><i className="ri-close-line" /></button>
					</div>
					<div className="offCanvas__logo mb-5">
						<h3 className="mb-0">Get in touch</h3>
					</div>
					<div className="offCanvas__side-info mb-30">
						<div className="contact-list mb-30">
							<p className="fs-6 fw-medium text-200 mb-5">I'm always happy to take on new bookkeeping engagements. If you need help with reconciliations, reporting, or getting your books audit-ready, feel free to reach out!</p>
							<div className="mb-3">
								<span className="text-400 fs-5">Email</span>
								<p className="mb-0">taimoorahsan27@gmail.com</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">LinkedIn</span>
								<p className="mb-0">linkedin.com/in/tihsan13</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Location</span>
								<p className="mb-0">Remote — Serving Clients Across the US &amp; Canada</p>
							</div>
						</div>
						<div className="contact-list">
							<p className="text-400 fs-5 mb-2">Social</p>
							<div className="d-md-flex d-none gap-3">
								<Link href="https://www.linkedin.com/in/tihsan13" target="_blank">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="mailto:taimoorahsan27@gmail.com">
									<i className="ri-mail-fill fs-18" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}
