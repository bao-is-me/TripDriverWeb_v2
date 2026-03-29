import { useEffect, useRef } from 'react';
import { articles } from './articleData';

export default function NewsSection() {
    const newsScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const newsScroll = newsScrollRef.current;
        if (!newsScroll) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const handleMouseDown = (event: MouseEvent) => {
            isDown = true;
            startX = event.pageX - newsScroll.offsetLeft;
            scrollLeft = newsScroll.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!isDown) return;
            event.preventDefault();
            const x = event.pageX - newsScroll.offsetLeft;
            const walk = (x - startX) * 1.4;
            newsScroll.scrollLeft = scrollLeft - walk;
        };

        const handleWheel = (event: WheelEvent) => {
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
            event.preventDefault();
            newsScroll.scrollLeft += event.deltaY;
        };

        newsScroll.addEventListener('mousedown', handleMouseDown as EventListener);
        newsScroll.addEventListener('mouseleave', handleMouseLeave);
        newsScroll.addEventListener('mouseup', handleMouseUp);
        newsScroll.addEventListener('mousemove', handleMouseMove as EventListener);
        newsScroll.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            newsScroll.removeEventListener('mousedown', handleMouseDown as EventListener);
            newsScroll.removeEventListener('mouseleave', handleMouseLeave);
            newsScroll.removeEventListener('mouseup', handleMouseUp);
            newsScroll.removeEventListener('mousemove', handleMouseMove as EventListener);
            newsScroll.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <section className="news" id="tin-tuc">
            <div className="news-shell">
                <div className="news-copy reveal">
                    <div className="section-number">05</div>
                    <h2 className="section-title">TIN <em>TỨC</em></h2>
                    <p className="news-intro">
                        Những bài viết nổi bật dành cho người đang tìm hiểu về thuê xe tự lái, từ kinh nghiệm thuê xe lần đầu đến cách chọn xe phù hợp cho từng nhu cầu di chuyển.
                    </p>
                    <a href="/tin-tuc" className="news-view-all">Xem tất cả tin tức</a>
                </div>

                <div className="news-scroll reveal reveal-delay-1" ref={newsScrollRef}>
                    <div className="news-track">
                        {articles.map((article) => (
                            <a href={article.slug} className="news-card" key={article.slug}>
                                <div className="news-card-image-wrap">
                                    <img
                                        src={article.thumbnail}
                                        alt={article.thumbnailAlt}
                                        className="news-card-image"
                                    />
                                </div>
                                <div className="news-card-body">
                                    <div className="news-card-date">{article.cardDate}</div>
                                    <h3 className="news-card-title">{article.title}</h3>
                                    <p className="news-card-excerpt">{article.excerpt}</p>
                                    <span className="news-card-link">Đọc bài viết</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="scroll-hint reveal">
                    <div className="scroll-hint-line"></div>
                    <span>Kéo ngang để xem thêm bài viết</span>
                </div>
            </div>
        </section>
    );
}
