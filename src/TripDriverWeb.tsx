import { useEffect, useRef, useState } from 'react';

// Declaration to let TypeScript know about the custom iconify-icon element
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { icon: string;[key: string]: any };
        }
    }
}

export default function TripDriverWeb() {
    const apkDownloadHref = '/tripdriver.apk';
    const contactEmail = 'tripdriver201@gmail.com';
    const [scrollProgress, setScrollProgress] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Refs for tracking
    const projectsScrollRef = useRef<HTMLDivElement>(null);

    // Scroll Progress
    useEffect(() => {
        document.title = 'TripDriver - Nền tảng thuê xe tự lái nhanh chóng giá rẻ tại Thành phố Hồ Chí Minh';

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrolled / maxScroll;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Reveal Animations
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        reveals.forEach((el) => revealObserver.observe(el));
        return () => revealObserver.disconnect();
    }, []);

    // Testimonial Carousel Auto-advance
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 6000);
        return () => clearInterval(slideInterval);
    }, []);

    // Horizontal Scroll with drag
    useEffect(() => {
        const projectsScroll = projectsScrollRef.current;
        if (!projectsScroll) return;

        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX - projectsScroll.offsetLeft;
            scrollLeft = projectsScroll.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - projectsScroll.offsetLeft;
            const walk = (x - startX) * 2;
            projectsScroll.scrollLeft = scrollLeft - walk;
        };

        projectsScroll.addEventListener('mousedown', handleMouseDown as EventListener);
        projectsScroll.addEventListener('mouseleave', handleMouseLeave);
        projectsScroll.addEventListener('mouseup', handleMouseUp);
        projectsScroll.addEventListener('mousemove', handleMouseMove as EventListener);

        return () => {
            projectsScroll.removeEventListener('mousedown', handleMouseDown as EventListener);
            projectsScroll.removeEventListener('mouseleave', handleMouseLeave);
            projectsScroll.removeEventListener('mouseup', handleMouseUp);
            projectsScroll.removeEventListener('mousemove', handleMouseMove as EventListener);
        };
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        if (menuOpen) setMenuOpen(false);

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            {/* Page Transition */}
            <div className="page-transition"></div>

            {/* Scroll Progress */}
            <div className="scroll-line">
                <div
                    className="scroll-progress"
                    style={{ transform: `scaleX(${scrollProgress})` }}
                ></div>
            </div>
            <div className="logo-fixed">
                <img src="/TripDriverLogo.jpg" alt="TripDriver" />
            </div>

            <nav className="blended-nav">
                <a href="#home" className="logo flex items-center gap-3" onClick={(e) => handleSmoothScroll(e, '#home')}>
                    <img
                        src="/TripDriverLogo.jpg"
                        alt="TripDriver"
                        className="w-[48px] h-[48px] object-cover rounded-full flex-shrink-0"
                    />
                    <span className="logo-text">TRIPDRIVER</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#nguoi-dung" onClick={(e) => handleSmoothScroll(e, '#nguoi-dung')}>Người dùng</a></li>
                    <li><a href="#doi-tac" onClick={(e) => handleSmoothScroll(e, '#doi-tac')}>Đối tác</a></li>
                    <li><a href="#ve-tripdriver" onClick={(e) => handleSmoothScroll(e, '#ve-tripdriver')}>Về TripDriver</a></li>
                    <li><a href="/#/qa">Hỗ trợ</a></li>
                </ul>

                <button className="menu-btn pointer-events-auto" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }}></span>
                    <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                <a href="#nguoi-dung" onClick={(e) => handleSmoothScroll(e, '#nguoi-dung')}>Người dùng</a>
                <a href="#doi-tac" onClick={(e) => handleSmoothScroll(e, '#doi-tac')}>Đối tác</a>
                <a href="#ve-tripdriver" onClick={(e) => handleSmoothScroll(e, '#ve-tripdriver')}>Về TripDriver</a>
                <a href="#an-toan" onClick={(e) => handleSmoothScroll(e, '#an-toan')}>An toàn &amp; Tin cậy</a>
                <a href="/#/qa" onClick={() => setMenuOpen(false)}>Hỗ trợ</a>
            </div>

            {/* Hero Section */}
            <section className="hero" id="home">
                {/* Background Effects */}
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
                <div className="hero-grain"></div>

                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-tag">
                            <span className="hero-tag-line"></span>
                            <span className="hero-tag-text flex items-center gap-2">
                                <iconify-icon icon="solar:routing-linear" className="text-lg"></iconify-icon>
                                Nền tảng thuê xe tự lái
                            </span>
                        </div>
                        <h1 className="hero-title">
                            <span className="line"><span className="word">Thuê xe</span></span>
                            <span className="line"><span className="word" style={{ animationDelay: '0.55s' }}>tự lái</span></span>
                            <span className="line"><span className="word" style={{ animationDelay: '0.7s' }}><em>dễ dàng</em></span></span>
                        </h1>
                        <p className="hero-desc">
                            TripDriver là nền tảng thuê xe tự lái giá rẻ ở TPHCM, kết nối người cần thuê xe với chủ xe cho thuê để hành trình trở nên chủ động, rõ ràng và thuận tiện hơn ngay trên một ứng dụng.
                        </p>
                        <div className="hero-cta">
                            <a href={apkDownloadHref} download="tripdriver.apk" className="btn btn-primary">
                                <iconify-icon icon="solar:download-linear" className="text-lg"></iconify-icon>
                                <span>Tải ứng dụng</span>
                            </a>
                            <a href="#nguoi-dung" onClick={(e) => handleSmoothScroll(e, '#nguoi-dung')} className="btn btn-secondary">Khám phá ngay</a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" alt="Xe tự lái" className="hero-image object-cover bg-center" />
                            <div className="hero-image-frame"></div>
                        </div>
                        <div className="hero-badge pointer-events-none">
                            <svg viewBox="0 0 100 100">
                                <defs>
                                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
                                </defs>
                                <text>
                                    <textPath href="#circlePath" className="hero-badge-text">
                                        TRIPDRIVER • THUÊ XE • TRIPDRIVER • TỰ LÁI •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll">
                    <span className="hero-scroll-text">Cuộn</span>
                    <div className="hero-scroll-line"></div>
                </div>
            </section>

            {/* Marquee */}
            <div className="marquee">
                <div className="marquee-content">
                    <span className="marquee-item">Thuê Xe <span>·</span></span>
                    <span className="marquee-item">Tự Lái <span>·</span></span>
                    <span className="marquee-item">Nhanh Chóng <span>·</span></span>
                    <span className="marquee-item">Minh Bạch <span>·</span></span>
                    <span className="marquee-item">Tiện Lợi <span>·</span></span>
                    <span className="marquee-item">An Toàn <span>·</span></span>
                    <span className="marquee-item">Thuê Xe <span>·</span></span>
                    <span className="marquee-item">Tự Lái <span>·</span></span>
                    <span className="marquee-item">Nhanh Chóng <span>·</span></span>
                    <span className="marquee-item">Minh Bạch <span>·</span></span>
                </div>
            </div>

            {/* About Section */}
            <section className="about" id="nguoi-dung">
                <div className="section-header reveal">
                    <div className="section-number">01</div>
                    <h2 className="section-title">Giới thiệu <em>dịch vụ</em></h2>
                </div>
                <div className="about-grid">
                    <div className="about-image-wrapper reveal">
                        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80" alt="Hành trình" className="about-image object-cover bg-center" />
                        <div className="about-image-border"></div>
                    </div>
                    <div className="about-content">
                        <p className="about-intro reveal reveal-delay-1">
                            TripDriver mang đến trải nghiệm thuê xe tự lái hiện đại, chuyên nghiệp và phù hợp với nhu cầu di chuyển linh hoạt tại TPHCM.
                        </p>
                        <p className="about-text reveal reveal-delay-2">
                            Chúng tôi xây dựng TripDriver để việc thuê xe tự lái giá rẻ trở nên dễ tiếp cận hơn với người dùng và hiệu quả hơn với đối tác. Từ khâu tìm kiếm, lựa chọn xe đến theo dõi yêu cầu thuê, mọi thứ đều được sắp xếp theo hướng rõ ràng và thuận tiện nhất.
                        </p>
                        <p className="about-text reveal reveal-delay-2">
                            Nếu bạn đang tìm ứng dụng thuê xe tự lái tại TPHCM, nền tảng thuê xe tự lái giá rẻ ở TP.HCM hoặc muốn trải nghiệm TripDriver như một giải pháp thuê xe tự lái thuận tiện hơn, đây là nơi phù hợp để bắt đầu.
                        </p>
                        <p className="about-text reveal reveal-delay-2">
                            TripDriver hướng tới việc trở thành nền tảng thuê xe tự lái nhanh chóng giá rẻ tại Thành phố Hồ Chí Minh, giúp người dùng dễ dàng tiếp cận xe phù hợp với nhu cầu di chuyển hằng ngày hoặc cho các chuyến đi ngắn và dài ngày.
                        </p>
                        <p className="about-text reveal reveal-delay-2">
                            Nền tảng của chúng tôi kết nối những chiếc xe nhàn rỗi với người cần di chuyển, tạo ra giá trị thực và một cộng đồng chia sẻ an toàn, đáng tin cậy.
                        </p>
                        <div className="stats-grid reveal reveal-delay-3">
                            <div className="stat-item">
                                <div className="stat-number"><iconify-icon icon="solar:smartphone-linear"></iconify-icon></div>
                                <div className="stat-label">Ứng dụng trực quan</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></div>
                                <div className="stat-label">Minh bạch thông tin</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number"><iconify-icon icon="solar:routing-linear"></iconify-icon></div>
                                <div className="stat-label">Linh hoạt hành trình</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="doi-tac">
                <div className="projects-header">
                    <div className="section-header reveal !mb-0">
                        <div className="section-number">02</div>
                        <h2 className="section-title">Dành cho <em>ai?</em></h2>
                    </div>
                </div>
                <div className="projects-scroll" ref={projectsScrollRef}>
                    <div className="projects-track">
                        <article className="project-card reveal">
                            <div className="project-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80" alt="Người dùng" className="project-image object-cover w-full h-auto" />
                                <div className="project-overlay">
                                    <a href="#ho-tro" onClick={(e) => handleSmoothScroll(e, '#ho-tro')} className="project-link">Khám phá ngay</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <div>
                                    <h3 className="project-title">Người dùng</h3>
                                    <p className="project-category">Dành cho người cần một chuyến đi chủ động hơn</p>
                                </div>
                            </div>
                        </article>
                        <article className="project-card reveal reveal-delay-1">
                            <div className="project-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80" alt="Đối tác" className="project-image object-cover w-full h-auto" />
                                <div className="project-overlay">
                                    <a href="#ho-tro" onClick={(e) => handleSmoothScroll(e, '#ho-tro')} className="project-link">Khám phá ngay</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <div>
                                    <h3 className="project-title">Đối tác</h3>
                                    <p className="project-category">Chủ xe muốn khai thác phương tiện hiệu quả</p>
                                </div>
                            </div>
                        </article>
                        <article className="project-card reveal reveal-delay-2">
                            <div className="project-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" alt="Ứng dụng" className="project-image object-cover w-full h-auto" />
                                <div className="project-overlay">
                                    <a href="#ve-tripdriver" onClick={(e) => handleSmoothScroll(e, '#ve-tripdriver')} className="project-link">Khám phá ngay</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <div>
                                    <h3 className="project-title">Về ứng dụng</h3>
                                    <p className="project-category">Một nền tảng cho trải nghiệm rõ ràng hơn</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="scroll-hint reveal">
                    <div className="scroll-hint-line"></div>
                    <span>Kéo để xem thêm</span>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="ve-tripdriver">
                <div className="section-header reveal">
                    <div className="section-number">03</div>
                    <h2 className="section-title">Giá trị <em>cốt lõi</em></h2>
                </div>
                <div className="services-grid">
                    <div className="service-item reveal">
                        <div className="service-number">
                            <iconify-icon icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="service-title">Chủ động lựa chọn</h3>
                        <p className="service-desc">
                            Tìm chiếc xe phù hợp với lịch trình và nhu cầu di chuyển của bạn, từ xe cỡ nhỏ đi trong phố đến xe gầm cao cho những chuyến đi xa.
                        </p>
                    </div>
                    <div className="service-item reveal reveal-delay-1">
                        <div className="service-number">
                            <iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="service-title">Thông tin minh bạch</h3>
                        <p className="service-desc">
                            Xem thông tin xe, hình ảnh thực tế và đánh giá trực quan để đưa ra lựa chọn dễ dàng và tự tin hơn trước mỗi chuyến đi.
                        </p>
                    </div>
                    <div className="service-item reveal reveal-delay-2">
                        <div className="service-number">
                            <iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="service-title">Kết nối thuận tiện</h3>
                        <p className="service-desc">
                            Đưa người thuê và đối tác đến gần nhau hơn trên cùng một nền tảng, giảm thiểu các khâu trung gian không cần thiết.
                        </p>
                    </div>
                    <div className="service-item reveal">
                        <div className="service-number">
                            <iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="service-title">Trải nghiệm hiện đại</h3>
                        <p className="service-desc">
                            Thiết kế quy trình thuê xe gọn gàng, dễ hiểu, phù hợp với thói quen sử dụng ứng dụng công nghệ hiện nay.
                        </p>
                    </div>
                    <div className="service-item reveal reveal-delay-1">
                        <div className="service-number">
                            <iconify-icon icon="solar:case-linear" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="service-title">Tối ưu cho đối tác</h3>
                        <p className="service-desc">
                            Hỗ trợ đối tác quản lý xe, theo dõi lịch trình và xử lý hoạt động cho thuê thuận tiện, chuyên nghiệp hơn bao giờ hết.
                        </p>
                    </div>
                    <div className="service-item reveal reveal-delay-2">
                        <div className="service-number">
                            <iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="service-title">Xây dựng niềm tin</h3>
                        <p className="service-desc">
                            Hướng tới trải nghiệm thuê xe chuyên nghiệp, tuân thủ tiêu chuẩn an toàn, rõ ràng và đáng tin cậy cho tất cả mọi người.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials" id="an-toan">
                <div className="section-header reveal">
                    <div className="section-number">04</div>
                    <h2 className="section-title">Cách <em>hoạt động</em></h2>
                </div>
                <div className="testimonial-wrapper reveal">
                    <div className="testimonial-track">
                        <div
                            className="testimonial-slides"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <div className="testimonial-slide flex flex-col items-center gap-8">
                                <h3 className="text-3xl font-playfair mb-10 text-[var(--dark-gray)] text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Cho người dùng</h3>
                                <ul className="flex flex-col gap-6 text-left max-w-sm mx-auto text-[var(--text-gray)]">
                                    <li className="flex items-center gap-5 text-lg"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--black)] text-sm font-semibold text-white">1</span> Tìm xe phù hợp với nhu cầu</li>
                                    <li className="flex items-center gap-5 text-lg"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--black)] text-sm font-semibold text-white">2</span> Gửi yêu cầu thuê nhanh chóng</li>
                                    <li className="flex items-center gap-5 text-lg"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--black)] text-sm font-semibold text-white">3</span> Theo dõi trạng thái và nhận xe</li>
                                </ul>
                            </div>
                            <div className="testimonial-slide flex flex-col items-center gap-8">
                                <h3 className="text-3xl font-playfair mb-10 text-[var(--dark-gray)] text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Cho đối tác</h3>
                                <ul className="flex flex-col gap-6 text-left max-w-sm mx-auto text-[var(--text-gray)]">
                                    <li className="flex items-center gap-5 text-lg"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--black)] text-sm font-semibold text-white">1</span> Đăng thông tin xe lên nền tảng</li>
                                    <li className="flex items-center gap-5 text-lg"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--black)] text-sm font-semibold text-white">2</span> Tiếp nhận yêu cầu từ khách thuê</li>
                                    <li className="flex items-center gap-5 text-lg"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--black)] text-sm font-semibold text-white">3</span> Quản lý quá trình cho thuê</li>
                                </ul>
                            </div>
                            <div className="testimonial-slide flex flex-col items-center gap-8">
                                <h3 className="text-3xl font-playfair mb-10 text-[var(--dark-gray)] text-center" style={{ fontFamily: "'Playfair Display', serif" }}>An toàn &amp; Tin cậy</h3>

                                <ul className="flex flex-col gap-6 text-left max-w-[36rem] mx-auto text-[var(--text-gray)]">
                                    <li className="flex items-center gap-4 text-[1.05rem]"><iconify-icon icon="solar:shield-check-linear" className="text-2xl text-[var(--black)] shrink-0"></iconify-icon> Trải nghiệm rõ ràng minh bạch</li>
                                    <li className="flex items-center gap-4 text-[1.05rem]"><iconify-icon icon="solar:shield-check-linear" className="text-2xl text-[var(--black)] shrink-0"></iconify-icon> Quy trình kiểm duyệt và dễ theo dõi</li>
                                    <li className="flex items-center gap-4 text-[1.05rem]"><iconify-icon icon="solar:shield-check-linear" className="text-2xl text-[var(--black)] shrink-0"></iconify-icon> Kết nối hiệu quả người thuê và chủ xe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-nav">
                        {[0, 1, 2].map((index) => (
                            <div
                                key={index}
                                className={`testimonial-dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="ho-tro">
                <div className="section-header reveal">
                    <div className="section-number">05</div>
                    <h2 className="section-title">Bắt đầu <em>ngay</em></h2>
                </div>
                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <h3>Tải ứng dụng</h3>
                        <p>
                            Khám phá cách thuê xe tự lái giá rẻ thuận tiện hơn trên một nền tảng được thiết kế cho người dùng hiện đại và đối tác chuyên nghiệp tại TPHCM.
                        </p>
                        <a href={`mailto:${contactEmail}`} className="contact-email">
                            {contactEmail}
                        </a>
                        <div className="download-actions flex flex-wrap gap-4 mt-8">
                            <a href={apkDownloadHref} download="tripdriver.apk" className="btn btn-primary">
                                <iconify-icon icon="solar:download-linear" className="text-lg"></iconify-icon>
                                <span>Tải ứng dụng</span>
                            </a>
                        </div>
                    </div>
                    <div className="contact-visual reveal reveal-delay-1">
                        <div className="contact-phone-frame">
                            <img src="/PhonePic.png" alt="Giao diện ứng dụng TripDriver" className="contact-phone-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-top">
                    <div className="footer-brand flex flex-col gap-4 max-w-xs">
                        <div className="flex items-center gap-3">
                            <img src="/TripDriverLogo.jpg" alt="TripDriver" className="w-12 h-12 object-contain rounded-full" />
                            <h2 className="text-2xl font-playfair m-0 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>TRIPDRIVER</h2>
                        </div>
                        <p>Nền tảng thuê xe tự lái giá rẻ ở TPHCM, kết nối người thuê xe và chủ xe cho trải nghiệm rõ ràng, thuận tiện hơn.</p>
                        <a href={`mailto:${contactEmail}`} className="footer-contact-email">{contactEmail}</a>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Khám phá</h4>
                            <ul>
                                <li><a href="#ve-tripdriver" onClick={(e) => handleSmoothScroll(e, '#ve-tripdriver')}>Về TripDriver</a></li>
                                <li><a href="#nguoi-dung" onClick={(e) => handleSmoothScroll(e, '#nguoi-dung')}>Người dùng</a></li>
                                <li><a href="#doi-tac" onClick={(e) => handleSmoothScroll(e, '#doi-tac')}>Đối tác</a></li>
                                <li><a href="#ho-tro" onClick={(e) => handleSmoothScroll(e, '#ho-tro')}>Tải ứng dụng</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Hỗ trợ</h4>
                            <ul>
                                <li><a href="#">Trung tâm hỗ trợ</a></li>
                                <li><a href="#">Câu hỏi thường gặp</a></li>
                                <li><a href="#">Điều khoản sử dụng</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Kết nối</h4>
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=61587796650900" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copy">© 2026 TripDriver. All rights reserved.</p>
                    <div className="social-links">
                        {/*<a href="https://www.facebook.com/profile.php?id=61587796650900">Fb</a>*/}
                        {/*<a href="#">Tk</a>*/}
                        {/*<a href="#">Em</a>*/}
                    </div>
                </div>
            </footer>
        </>
    );
}
