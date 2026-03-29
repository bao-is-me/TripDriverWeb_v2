import { useEffect } from 'react';
import { ArticleItem, articles } from './articleData';
import SiteHeader from './SiteHeader';
import { applySeo } from './seo';

type ArticlePageProps = {
    article: ArticleItem;
};

export default function ArticlePage({ article }: ArticlePageProps) {
    useEffect(() => {
        applySeo({
            title: article.metaTitle,
            description: article.metaDescription,
            canonical: `https://www.tripdriver.io.vn${article.slug}`,
            schema: {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: article.title,
                description: article.metaDescription,
                datePublished: article.publishedAt,
                dateModified: article.publishedAt,
                mainEntityOfPage: `https://www.tripdriver.io.vn${article.slug}`,
                image: [article.thumbnail],
                author: {
                    '@type': 'Organization',
                    name: 'TripDriver',
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'TripDriver',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://www.tripdriver.io.vn/TripDriverLogo.jpg',
                    },
                },
            },
        });

        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [article]);

    const relatedArticles = articles.filter((item) => item.slug !== article.slug);

    return (
        <>
            <SiteHeader currentPath={article.slug} />

            <main className="article-page">
                <section className="article-hero">
                    <div className="article-hero-grid">
                        <div className="article-hero-copy reveal active">
                            <div className="section-number">TIN TỨC</div>
                            <h1 className="article-title">{article.title}</h1>
                            <p className="article-meta">{article.cardDate} • TripDriver</p>
                            <p className="article-lead">{article.excerpt}</p>
                            <div className="article-hero-links">
                                <a href="/" className="btn btn-primary">
                                    <span>Về trang chủ</span>
                                </a>
                                <a href="/faq-thue-xe-tu-lai" className="btn btn-secondary bordered">
                                    Xem trang hỗ trợ
                                </a>
                            </div>
                        </div>
                        <div className="article-hero-visual reveal active">
                            <img src={article.thumbnail} alt={article.thumbnailAlt} className="article-hero-image" />
                        </div>
                    </div>
                </section>

                <section className="article-content-section">
                    <div className="article-layout">
                        <article className="article-content reveal active">
                            {article.intro.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}

                            {article.sections.map((section, index) => {
                                const inlineImage = article.inlineImages?.find((item) => item.afterSection === index);

                                return (
                                    <div key={section.heading}>
                                        <section className="article-block">
                                            <h2>{section.heading}</h2>
                                            {section.paragraphs?.map((paragraph) => (
                                                <p key={paragraph}>{paragraph}</p>
                                            ))}
                                            {section.bullets && (
                                                <ul>
                                                    {section.bullets.map((bullet) => (
                                                        <li key={bullet}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </section>

                                        {inlineImage && (
                                            <figure className="article-inline-image">
                                                <img src={inlineImage.src} alt={inlineImage.alt} />
                                            </figure>
                                        )}
                                    </div>
                                );
                            })}
                        </article>

                        <aside className="article-sidebar reveal active">
                            <div className="article-sidebar-card">
                                <h2>Bài viết liên quan</h2>
                                <div className="article-sidebar-list">
                                    {relatedArticles.map((item) => (
                                        <a href={item.slug} className="article-sidebar-link" key={item.slug}>
                                            <span className="article-sidebar-date">{item.cardDate}</span>
                                            <strong>{item.title}</strong>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>
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
