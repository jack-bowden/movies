'use client';

import { Suspense } from 'react';
import {
	SignInButton,
	SignOutButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';
import { Button } from '../ui/button';
import Search from '../../app/search/_components/Search';

const InvisibleNavbar = () => {
	return (
		<div className='p-4 flex items-center justify-center sm:justify-start md:justify-center md:w-full'>
			<div className='relative flex justify-between items-center md:w-full max-w-4xl'>
				<Search />
				<div className='lg:flex flex-wrap lg:ml-6 xl:justify-center items-center hidden md:w-full'>
					<SignedIn>
						<SignOutButton>
							<Button
								variant='outline'
								className='mr-6 border-green-500 border-2'
							>
								Log out
							</Button>
						</SignOutButton>
						<Suspense fallback='Loading...'>
							<UserButton />
						</Suspense>
					</SignedIn>
					<SignedOut>
						<SignInButton mode='modal'>
							<Button
								variant='outline'
								className='mr-6 border-green-500 border-2'
							>
								Log in
							</Button>
						</SignInButton>
					</SignedOut>
				</div>
			</div>
		</div>
	);
};

export default InvisibleNavbar;
