'use client'
import Link from "next/link"
import CountUp from 'react-countup'
export default function Skills1() {
	return (
		<>

			<section className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
								I thrive on turning messy, multi-entity books into clean,
								<br className="d-md-block d-none" />
								audit-ready ledgers clients can trust.
							</span>
						</div>
						<div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-1.svg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={98} />%</h3>
									<p className="text-400 fw-medium text-uppercase">QuickBooks Online</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-2.svg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={90} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Xero</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-3.svg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={95} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Excel &amp; Power Query</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-4.svg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={85} />%</h3>
									<p className="text-400 fw-medium text-uppercase">QB Desktop Enterprise</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-5.svg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={80} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Bill.com</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-6.svg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={85} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Gusto Payroll</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-7.svg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={70} />%</h3>
									<p className="text-400 fw-medium text-uppercase">SAP / ERP</p>
								</div>
							</div>
						</div>
						<div className="text-center">
							<p className="fs-5 text-200 mb-0">Core accounting skills I bring to every engagement: </p>
							<div className="d-flex flex-wrap justify-content-center gap-1">
								<Link href="/#" className="fs-5 fw-bold">Accounts Payable,</Link>
								<Link href="/#" className="fs-5 fw-bold">Accounts Receivable,</Link>
								<Link href="/#" className="fs-5 fw-bold">Bank Reconciliation,</Link>
								<Link href="/#" className="fs-5 fw-bold">GAAP &amp; IFRS Reporting,</Link>
								<Link href="/#" className="fs-5 fw-bold">Month-End Close,</Link>
								<Link href="/#" className="fs-5 fw-bold">Cash Flow Forecasting,</Link>
								<Link href="/#" className="fs-5 fw-bold">Loan Amortization</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
