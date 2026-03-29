import { useState } from 'react';

type SiteHeaderProps = {
    currentPath: string;
};

function isActive(pathname: string, href: string) {
    if (href === '/') {
        return pathname === '/';
    }

    if (href === '/tin-tuc') {
        return pathname === '/tin-tuc' || pathname.startsWith('/tin-tuc/');
    }

    return pathname === href;
}

const navItems = [
    { href: '/', label: 'Trang chủ' },
    { href: '/tin-tuc', label: 'Tin tức' },
    { href: '/faq-thue-xe-tu-lai', label: 'Hỗ trợ' },
];

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="logo-fixed">
                <img src="/TripDriverLogo.jpg" alt="TripDriver" />
            </div>

            <nav className="blended-nav">
                <a href="/" className="logo flex items-center gap-3">
                    <img
                        src="/TripDriverLogo.jpg"
                        alt="TripDriver"
                        className="w-[48px] h-[48px] object-cover rounded-full flex-shrink-0"
                    />
                    <span className="logo-text" aria-label="TripDriver">
                        <span className="logo-text-primary">Trip</span>
                        <em className="logo-text-accent">Driver</em>
                    </span>
                </a>

                <ul className="nav-links">
                    {navItems.map((item) => {
                        const active = isActive(currentPath, item.href);

                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={active ? 'nav-link-active' : ''}
                                    aria-current={active ? 'page' : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <button className="menu-btn pointer-events-auto" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }}></span>
                    <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }}></span>
                </button>
            </nav>

            <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                {navItems.map((item) => {
                    const active = isActive(currentPath, item.href);

                    return (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={active ? 'nav-link-active' : ''}
                            aria-current={active ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </>
    );
}
