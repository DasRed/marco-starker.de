import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <a href="/" className="logo">
                    <Image
                        src="/images/logo.png"
                        alt="Picture of the author"
                    />
                    <span>Marco Starker</span>
                </a>

                <button className="bg-transparent border-0 d-xl-none">
                    <div className="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </header>
    );
}