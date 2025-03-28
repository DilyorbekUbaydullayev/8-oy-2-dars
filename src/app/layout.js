import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
});

export const metadata = {
	title: 'Next',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}
