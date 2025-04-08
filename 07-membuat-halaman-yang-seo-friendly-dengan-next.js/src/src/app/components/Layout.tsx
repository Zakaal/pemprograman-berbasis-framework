import Head from "next/head";
import NavBar from './NavBar';
import Footer from './Footer';

type LayoutProps = {
    children : React.ReactNode;
};

export default function Layout ({ children }: LayoutProps) {
    return (
        <>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}