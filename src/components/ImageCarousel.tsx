'use client';
import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';

export function ImageCarousel() {
	return (
		<Carousel className="rounded-xl w-[96%] h-[20vh] mx-auto  mt-4">
			<Image
				src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
				alt="image 1"
				width={300}
				height={100}
				className="h-full w-full object-cover"
			/>
			<Image
				src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
				alt="image 2"
				width={300}
				height={100}
				className="h-full w-full object-cover"
			/>
			<Image
				src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
				alt="image 3"
				width={300}
				height={100}
				className="h-full w-full object-cover"
			/>
		</Carousel>
	);
}
