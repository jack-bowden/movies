import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MobileNavbar from '@/components/navbar/MobileNavbar';
import Sidebar from '@/components/sidebar/Sidebar';
import InvisibleNavbar from '@/components/navbar/InvisibleNavbar';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Flick Finder',
	description: 'Site to help you find new movies and TV shows.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: {
					colorText: 'gray',
					colorInputText: 'gray',
				},
				baseTheme: dark,
				userButton: {
					variables: {
						colorShimmer: 'gray',
					},
				},
			}}
		>
			<Script
				id='matomo'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//matomo.jackbowden.co.uk/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '4']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
				}}
			/>
			<html lang='en'>
				<body className={inter.className}>
					<ToastContainer />
					<div className='flex h-screen'>
						<Sidebar />
						<div className='flex-1 flex flex-col overflow-hidden'>
							<InvisibleNavbar />
							<main className='flex-1 overflow-x-hidden overflow-y-auto'>
								{children}
							</main>
						</div>
					</div>
					<MobileNavbar />
				</body>
			</html>
		</ClerkProvider>
	);
}
