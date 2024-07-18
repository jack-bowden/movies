import { Button } from '../ui/button';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { Home, Tv, Bookmark, Tv2 } from 'lucide-react';

export const sidebarItems = [
	{
		title: 'Home',
		href: '/',
		icon: <Home />,
	},
	{
		title: 'Movies',
		href: '/movies',
		icon: <Tv />,
	},
	{
		title: 'TV Shows',
		href: '/tvshows',
		icon: <Tv2 />,
	},
	{
		title: 'Favorites',
		href: '/favorites',
		icon: <Bookmark />,
	},
];

const Sidebar = () => {
	return (
		<div className='min-w-56 hidden border-r-2 h-full sm:flex sm:flex-col justify-between'>
			<div className='flex flex-col items-center space-y-8 mt-16'>
				{sidebarItems.map(item => (
					<div
						className='w-2/3 group cursor-pointer'
						key={item.title}
					>
						<div className='flex items-center group-hover:text-accent-foreground transition-all'>
							<span>{item.icon}</span>
							<Link href={item.href}>
								<span className='w-full ml-4 flex justify-start items-start text-md'>
									{item.title}
								</span>
							</Link>
						</div>
					</div>
				))}
			</div>
			<div className='flex items-center justify-center mb-16 space-x-6 lg:hidden'>
				<SignedIn>
					<Button
						variant='outline'
						className='border-green-500 border-2'
					>
						Log out
					</Button>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton mode='modal'>
						<Button
							variant='outline'
							className='border-green-500 border-2'
						>
							Log in
						</Button>
					</SignInButton>
				</SignedOut>
			</div>
		</div>
	);
};

export default Sidebar;
