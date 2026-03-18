import { useEffect, useState } from 'react';

type QAItem = {
    question: string;
    answer: string;
};

const qaItems: QAItem[] = [
    {
        question: 'Nền tảng thuê xe tự lái là gì và hoạt động như thế nào?',
        answer: 'Nền tảng thuê xe tự lái là nơi kết nối người cần thuê xe với chủ xe trên cùng một ứng dụng hoặc website. Người dùng có thể xem thông tin xe, chọn xe phù hợp, gửi yêu cầu thuê và theo dõi quá trình thuận tiện hơn trong một nơi duy nhất.',
    },
    {
        question: 'Ứng dụng thuê xe tự lái có gì tiện lợi cho người dùng?',
        answer: 'Ứng dụng thuê xe tự lái giúp người dùng tìm xe và gửi yêu cầu nhanh hơn so với cách làm thủ công. Mọi thông tin như hình ảnh xe, trạng thái thuê và quy trình đều được trình bày rõ ràng, dễ theo dõi và tiết kiệm thời gian hơn.',
    },
    {
        question: 'Thuê xe tự lái giá rẻ cần lưu ý những gì?',
        answer: 'Khi thuê xe tự lái giá rẻ, người dùng không nên chỉ nhìn vào mức giá. Điều quan trọng là thông tin xe rõ ràng, quy trình thuê dễ hiểu, hình ảnh trực quan và trải nghiệm đủ minh bạch để bạn yên tâm trước khi chọn xe.',
    },
    {
        question: 'Thuê xe tự lái ở TPHCM có phù hợp với người mới không?',
        answer: 'Có. Người mới vẫn có thể thuê xe tự lái ở TPHCM nếu nền tảng dễ dùng, thông tin rõ ràng và quy trình thuận tiện. Khi các bước được trình bày dễ hiểu, người dùng sẽ cảm thấy yên tâm hơn ngay từ lần thuê đầu tiên.',
    },
    {
        question: 'Làm sao chọn xe phù hợp cho chuyến đi gia đình?',
        answer: 'Khi đi gia đình, bạn nên ưu tiên xe có không gian thoải mái, đủ chỗ ngồi và phù hợp với lượng hành lý mang theo. Chọn đúng xe sẽ giúp chuyến đi dễ chịu, an tâm và thuận tiện hơn cho cả nhà.',
    },
    {
        question: 'Thuê xe tự lái đi công tác có tiện không?',
        answer: 'Có. Thuê xe tự lái đi công tác giúp bạn chủ động hơn về thời gian, lịch trình và điểm đến. Đây là lựa chọn phù hợp khi cần di chuyển linh hoạt, riêng tư và không muốn phụ thuộc vào lịch trình cố định.',
    },
    {
        question: 'Một nền tảng thuê xe tự lái minh bạch cần có những gì?',
        answer: 'Một nền tảng thuê xe tự lái minh bạch cần có thông tin xe rõ ràng, hình ảnh trực quan, quy trình dễ hiểu và trạng thái thuê dễ theo dõi. Những yếu tố này giúp người dùng an tâm hơn khi lựa chọn và so sánh xe.',
    },
    {
        question: 'Làm sao tìm nền tảng thuê xe tự lái giá rẻ ở TPHCM?',
        answer: 'Để tìm nền tảng thuê xe tự lái giá rẻ ở TPHCM, bạn nên ưu tiên nơi có thông tin rõ ràng, trải nghiệm dễ dùng và quy trình thuận tiện. Ngoài giá thuê, hãy xem thêm mức độ minh bạch và sự phù hợp với nhu cầu thực tế của mình.',
    },
    {
        question: 'Người dùng nên xem những thông tin gì trước khi chọn xe?',
        answer: 'Trước khi chọn xe, bạn nên xem loại xe, hình ảnh xe, nhu cầu sử dụng phù hợp và quy trình thuê. Có đủ thông tin ngay từ đầu sẽ giúp người dùng chọn đúng xe cho hành trình của mình và tránh phát sinh không cần thiết.',
    },
];

export default function QAPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = 'TripDriver QA - Hỗ trợ thuê xe tự lái';
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

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
                    <span className="logo-text">TRIPDRIVER</span>
                </a>

                <ul className="nav-links">
                    <li><a href="/#nguoi-dung">Người dùng</a></li>
                    <li><a href="/#doi-tac">Đối tác</a></li>
                    <li><a href="/#ve-tripdriver">Về TripDriver</a></li>
                    <li><a href="/#/qa">Hỗ trợ</a></li>
                </ul>

                <button className="menu-btn pointer-events-auto" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }}></span>
                    <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }}></span>
                </button>
            </nav>

            <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                <a href="/#nguoi-dung" onClick={() => setMenuOpen(false)}>Người dùng</a>
                <a href="/#doi-tac" onClick={() => setMenuOpen(false)}>Đối tác</a>
                <a href="/#ve-tripdriver" onClick={() => setMenuOpen(false)}>Về TripDriver</a>
                <a href="/#/qa" onClick={() => setMenuOpen(false)}>Hỗ trợ</a>
            </div>

            <main className="qa-page">
                <section className="qa-hero">
                    <div className="qa-hero-copy reveal active">
                        <div className="section-number">QA</div>
                        <h1 className="qa-title">Hỗ trợ <em>thuê xe tự lái</em></h1>
                        <p className="qa-desc">
                            Tổng hợp những câu hỏi thường gặp về nền tảng thuê xe tự lái, ứng dụng thuê xe tự lái, kinh nghiệm thuê xe tự lái giá rẻ và cách chọn xe phù hợp tại TPHCM.
                        </p>
                    </div>
                </section>

                <section className="qa-list-section">
                    <div className="qa-list">
                        {qaItems.map((item, index) => (
                            <article className="qa-card reveal active" key={item.question}>
                                <div className="qa-order">{String(index + 1).padStart(2, '0')}</div>
                                <div className="qa-content">
                                    <h2 className="qa-question">{item.question}</h2>
                                    <p className="qa-answer">{item.answer}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-top">
                    <div className="footer-brand flex flex-col gap-4 max-w-xs">
                        <div className="flex items-center gap-3">
                            <img src="/TripDriverLogo.jpg" alt="TripDriver" className="w-12 h-12 object-contain rounded-full" />
                            <h2 className="text-2xl font-playfair m-0 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>TRIPDRIVER</h2>
                        </div>
                        <p>Nền tảng thuê xe tự lái giá rẻ ở TPHCM, kết nối người thuê xe và chủ xe cho trải nghiệm rõ ràng, thuận tiện hơn.</p>
                        <a href="mailto:tripdriver201@gmail.com" className="footer-contact-email">tripdriver201@gmail.com</a>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Khám phá</h4>
                            <ul>
                                <li><a href="/#ve-tripdriver">Về TripDriver</a></li>
                                <li><a href="/#nguoi-dung">Người dùng</a></li>
                                <li><a href="/#doi-tac">Đối tác</a></li>
                                <li><a href="/#ho-tro">Tải ứng dụng</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Hỗ trợ</h4>
                            <ul>
                                <li><a href="/#/qa">Câu hỏi thường gặp</a></li>
                                <li><a href="/#/qa">Hướng dẫn sử dụng</a></li>
                                <li><a href="/#/qa">Thông tin thuê xe</a></li>
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
