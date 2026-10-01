import Marquee from 'react-fast-marquee'


export default function Brands1() {
	return (
		<>

			<section className="section-brands-1 section-padding">
				<div className="container">
					<div className="text-center">
						<h2>Certified across leading accounting platforms</h2>
						<p className="text-300">
							QuickBooks Certified ProAdvisor and Xero Certified Advisor, with hands-on experience
							<br />
							across Gusto, Bill.com, and SAP/ERP for clients throughout the US &amp; Canada
						</p>
					</div>
				</div>
				<div className="container-fluid">
					{/* Carausel Scroll */}
					<Marquee className="carouselTicker carouselTicker-right mt-5 position-relative z-1" direction="right">
						<ul className="carouselTicker__list">
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-1.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-2.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-3.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-4.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-5.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-6.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-7.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-8.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-9.svg" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-10.svg" alt="infinia" />
							</li>
						</ul>
					</Marquee>
				</div>
			</section>

		</>
	)
}
