import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/remixicon/remixicon.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})
const playfair_display = Playfair_Display({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--playpair",
	display: 'swap',
})
const dmMono = DM_Mono({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
	variable: "--dmMono",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Muhammad Taimoor Ihsan | Remote Bookkeeper & Financial Reporting Specialist",
	description: "Detail-driven accountant and bookkeeper (CA, ICAP) with 5+ years of full-charge bookkeeping, accounts payable/receivable, and GAAP/IFRS financial reporting for multi-entity US & Canada clients. QuickBooks Certified ProAdvisor, Xero Certified.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-bs-theme="dark" className="zelio">
			<body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}>{children}</body>
		</html>
	)
}
