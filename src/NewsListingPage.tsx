import { useEffect } from 'react';
import { articles } from './articleData';
import SiteHeader from './SiteHeader';
import { applySeo } from './seo';

export default function NewsListingPage() {
    useEffect(() => {
        applySeo({
            title: 'Tin tức thuê xe tự lái và kinh nghiệm di chuyển | TripDriver',
            description:
                'Cập nhật các bài viết, kinh nghiệm và lưu ý hữu ích về thuê xe tự lái, thủ tục thuê xe, cách chọn xe và những thông tin cần biết cho hành trình chủ động hơn.',
            canonical: 'https://tripdriver.vercel.app/tin-tuc',
            schema: {
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: 'Tin tức thuê xe tự lái và kinh nghiệm di chuyển',
                url: 'https://tripdriver.vercel.app/tin-tuc',
                description:
                    'Trang tổng hợp toàn bộ bài viết tin tức, kinh nghiệm và lưu ý hữu ích về thuê xe tự lái trên TripDriver.',
            },
        });

        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <>
            <SiteHeader currentPath="/tin-tuc" />

            <main className="news-listing-page">
                <section className="news-listing-hero">
                    <div className="news-listing-copy reveal active">
                        <div className="section-number">TIN TỨC</div>
                        <h1 className="news-listing-title">TIN <em>TỨC</em></h1>
                        <p className="news-listing-desc">
                            Tổng hợp những bài viết, kinh nghiệm và lưu ý hữu ích dành cho người đang tìm hiểu về thuê xe tự lái, từ cách chọn xe, thủ tục thuê xe đến những lưu ý cho từng nhu cầu di chuyển khác nhau.
                        </p>
                    </div>
                </section>

                <section className="news-listing-grid-section">
                    <div className="news-listing-grid">
                        {articles.map((article) => (
                            <a href={article.slug} className="news-card news-card-grid reveal active" key={article.slug}>
                                <div className="news-card-image-wrap">
                                    <img src={article.thumbnail} alt={article.thumbnailAlt} className="news-card-image" />
                                </div>
                                <div className="news-card-body">
                                    <div className="news-card-date">{article.cardDate}</div>
                                    <h2 className="news-card-title">{article.title}</h2>
                                    <p className="news-card-excerpt">{article.excerpt}</p>
                                    <span className="news-card-link">Đọc bài viết</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-top">
                    <div className="footer-brand flex flex-col gap-4 max-w-xs">
                        <div className="flex items-center gap-3">
                            <img src="/TripDriverLogo.jpg" alt="TripDriver" className="w-12 h-12 object-contain rounded-full" />
                            <h2 className="text-2xl font-playfair m-0 tracking-tight" style={{ fontFamily: "'Lora', serif" }}>TRIPDRIVER</h2>
                        </div>
                        <p>Nền tảng thuê xe tự lái cho người mới tại Thành phố Hồ Chí Minh, giúp người dùng tiếp cận hành trình rõ ràng và thuận tiện hơn.</p>
                        <a href="mailto:tripdriver201@gmail.com" className="footer-contact-email">tripdriver201@gmail.com</a>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Khám phá</h4>
                            <ul>
                                <li><a href="/">Trang chủ</a></li>
                                <li><a href="/tin-tuc">Tin tức</a></li>
                                <li><a href="/#ho-tro">Tải ứng dụng</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Hỗ trợ</h4>
                            <ul>
                                <li><a href="/faq-thue-xe-tu-lai">Câu hỏi thường gặp</a></li>
                                <li><a href="/faq-thue-xe-tu-lai">Thông tin thuê xe</a></li>
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
                </div>
            </footer>
        </>
    );
}
