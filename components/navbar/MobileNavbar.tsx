'use client';

import Link from 'next/link';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import {
	SignInButton,
	SignOutButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';

const navItems = [
	{ pageName: 'Home', href: '/' },
	{ pageName: 'Movies', href: '/movies' },
	{ pageName: 'TV Shows', href: '/tv' },
	{ pageName: 'Favorites', href: '/favorites' },
	{ pageName: 'Profile', href: '/profile' },
];

interface NavSectionProps {
	title: string;
	href: string;
}

const NavSection = ({ title, href }: NavSectionProps) => (
	<>
		<DrawerTitle>
			<Link href={href}>
				<DrawerClose>
					<Button
						className='text-md'
						variant='ghost'
					>
						{title}
					</Button>
				</DrawerClose>
			</Link>
		</DrawerTitle>
	</>
);

const MobileNavbar = () => {
	const router = useRouter();

	return (
		<div className='sticky bottom-0 sm:hidden z-50 bg-background'>
			<Drawer>
				<nav className='h-14 border-t-2 border-foreground/30 flex sticky px-6 items-center justify-between'>
					<DrawerTrigger>
						<span>
							<img
								src='https://img.icons8.com/?size=100&id=3096&format=png&color=bfbfbf'
								className='size-7 cursor-pointer'
							/>
						</span>
					</DrawerTrigger>
					<div>
						<Button
							className='cursor-default'
							variant='ghost'
							onClick={() => router.push('/')}
						>
							<img
								src='https://img.icons8.com/?size=100&id=73&format=png&color=bfbfbf'
								className='size-7 cursor-pointer'
							/>
						</Button>
					</div>
					<SignedIn>
						<div>
							<SignOutButton>
								<Button variant='ghost'>
									<img
										className='size-7'
										src='https://img.icons8.com/?size=100&id=2445&format=png&color=bfbfbf'
									/>
								</Button>
							</SignOutButton>
						</div>
						<div>
							<Button variant='ghost'>
								<UserButton />
							</Button>
						</div>
					</SignedIn>
					<SignedOut>
						<SignInButton mode='modal'>
							<Button variant='ghost'>
								<img
									className='size-7'
									src='https://img.icons8.com/?size=100&id=2460&format=png&color=bfbfbf'
								/>
							</Button>
						</SignInButton>
					</SignedOut>
				</nav>
				<DrawerContent>
					<DrawerHeader>
						{navItems.map(item => (
							<NavSection
								key={item.pageName}
								title={item.pageName}
								href={item.href}
							/>
						))}
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose>
							<span>
								<img
									src='https://img.icons8.com/?size=100&id=46&format=png&color=bfbfbf'
									className='size-7 cursor-pointer'
								/>
							</span>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default MobileNavbar;
