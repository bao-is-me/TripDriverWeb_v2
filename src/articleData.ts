export type ArticleSection = {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
};

export type ArticleItem = {
    slug: string;
    title: string;
    publishedAt: string;
    cardDate: string;
    excerpt: string;
    metaTitle: string;
    metaDescription: string;
    thumbnail: string;
    thumbnailAlt: string;
    inlineImages?: Array<{
        afterSection: number;
        src: string;
        alt: string;
    }>;
    intro: string[];
    sections: ArticleSection[];
};

export const articles: ArticleItem[] = [
    {
        slug: '/tin-tuc/nhung-luu-y-khi-thue-xe-tu-lai-dip-le-30-4-1-5',
        title: 'Những lưu ý khi thuê xe tự lái dịp lễ 30/4 - 1/5',
        publishedAt: '2026-03-28T21:04:00+07:00',
        cardDate: '28/03/2026',
        excerpt: 'Một số lưu ý quan trọng để chọn xe phù hợp, chuẩn bị giấy tờ đầy đủ và hạn chế tranh cãi khi thuê xe tự lái dịp lễ.',
        metaTitle: 'Những lưu ý khi thuê xe tự lái dịp lễ 30/4 - 1/5 | TripDriver',
        metaDescription: 'Gợi ý cách thuê xe tự lái dịp lễ 30/4 - 1/5 hiệu quả hơn: chọn xe đúng nhu cầu, chuẩn bị giấy tờ, kiểm tra xe kỹ và hạn chế phát sinh.',
        thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
        thumbnailAlt: 'Thuê xe tự lái dịp lễ',
        inlineImages: [
            {
                afterSection: 2,
                src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
                alt: 'Kiểm tra xe cẩn thận trước chuyến đi dịp lễ',
            },
        ],
        intro: [
            'Dịp lễ 30/4 - 1/5 thường là thời điểm nhu cầu thuê xe tự lái tăng nhanh, vì vậy việc chuẩn bị kỹ sẽ giúp bạn chọn được xe phù hợp và tránh các phát sinh không mong muốn.',
            'Nếu đang lên kế hoạch cho một chuyến đi xa, đi gia đình hoặc đi nhóm, đây là những lưu ý quan trọng nên xem trước khi đặt xe.',
        ],
        sections: [
            {
                heading: 'Chọn xe phù hợp với mục đích sử dụng',
                paragraphs: [
                    'Trước tiên, bạn nên xác định rõ số người đi cùng, quãng đường di chuyển và điều kiện địa hình để chọn xe phù hợp. Đây là bước giúp bạn thuê đúng xe thay vì chỉ chọn theo cảm tính.',
                    'Nếu đi nhóm đông, mang nhiều hành lý hoặc đi đường dài, đường đồi núi, các dòng xe lớn và khỏe như Mitsubishi Xpander hoặc Toyota Innova sẽ hợp lý hơn. Ngược lại, nếu đi ít người, quãng đường dưới khoảng 400 km và đường di chuyển dễ đi, những mẫu xe nhỏ như Kia Morning, VinFast Fadil hoặc Hyundai Grand i10 có thể đã đáp ứng tốt nhu cầu.',
                ],
            },
            {
                heading: 'Chuẩn bị giấy tờ cần thiết',
                paragraphs: [
                    'Để nhận xe nhanh và tránh mất thời gian khi làm thủ tục, bạn nên chuẩn bị trước đầy đủ giấy tờ theo yêu cầu của bên cho thuê.',
                ],
                bullets: [
                    'Hộ khẩu, KT3, giấy phép kinh doanh hoặc passport tùy trường hợp.',
                    'Chứng minh nhân dân hoặc căn cước công dân của người ký hợp đồng.',
                    'Bằng lái xe từ hạng B1 trở lên.',
                    'Thông tin liên lạc rõ ràng của người thuê.',
                    'Tài sản thế chấp hoặc khoản ký quỹ nếu đơn vị cho thuê yêu cầu.',
                ],
            },
            {
                heading: 'Kiểm tra tình trạng xe khi nhận và khi trả',
                paragraphs: [
                    'Khi nhận xe, bạn nên kiểm tra ngoại thất, nội thất, số kilomet, mức nhiên liệu và tình trạng vận hành cơ bản. Ghi nhận càng rõ thì khi trả xe càng dễ đối chiếu.',
                    'Sau chuyến đi, hãy kiểm tra lại xe một lần nữa trước khi bàn giao để tránh tranh cãi hoặc yêu cầu bồi thường không hợp lý.',
                ],
            },
            {
                heading: 'Cách xử lý khi phát sinh hư hỏng hoặc đền bù',
                paragraphs: [
                    'Nếu xe không còn nguyên trạng như lúc nhận, cách tốt nhất là trao đổi thẳng thắn và bình tĩnh với bên cho thuê. Chủ động nêu rõ tình trạng thực tế và thương lượng trên cơ sở hợp lý thường sẽ giúp bạn giảm bớt áp lực khi giải quyết phát sinh.',
                ],
            },
        ],
    },
    {
        slug: '/tin-tuc/thu-tuc-giay-to-can-co-khi-thue-xe-tu-lai-ho-chi-minh',
        title: 'Thủ tục, giấy tờ cần có khi thuê xe tự lái Hồ Chí Minh',
        publishedAt: '2026-03-27T10:15:00+07:00',
        cardDate: '27/03/2026',
        excerpt: 'Những giấy tờ và thủ tục cần chuẩn bị khi thuê xe tự lái tại Hồ Chí Minh, từ CCCD, bằng lái đến hợp đồng, nhận xe và trả xe.',
        metaTitle: 'Thủ tục, giấy tờ cần có khi thuê xe tự lái Hồ Chí Minh | TripDriver',
        metaDescription: 'Tìm hiểu thủ tục và giấy tờ cần có khi thuê xe tự lái Hồ Chí Minh: CCCD, bằng lái, tài sản thế chấp, hợp đồng, nhận xe và trả xe đúng quy trình.',
        thumbnail: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
        thumbnailAlt: 'Giấy tờ và thủ tục thuê xe tự lái tại Hồ Chí Minh',
        inlineImages: [
            {
                afterSection: 1,
                src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
                alt: 'Kiểm tra hợp đồng và giấy tờ khi thuê xe tự lái',
            },
        ],
        intro: [
            'Dịch vụ thuê xe tự lái tại Hồ Chí Minh ngày càng phổ biến vì mang lại sự riêng tư, chủ động và linh hoạt hơn cho người cần di chuyển cùng gia đình, bạn bè hoặc đối tác.',
            'Để thuê xe thuận tiện và không mất thời gian khi làm thủ tục, bạn nên chuẩn bị trước các giấy tờ cần thiết và nắm rõ quy trình từ lúc ký hợp đồng đến khi trả xe.',
        ],
        sections: [
            {
                heading: 'Giới thiệu dịch vụ thuê xe tự lái tại Hồ Chí Minh',
                paragraphs: [
                    'Thuê xe tự lái là hình thức bạn chỉ thuê phương tiện mà không cần thuê tài xế đi kèm. Cách di chuyển này phù hợp với những người muốn chủ động lịch trình, giữ không gian riêng tư và không bị phụ thuộc vào người lái.',
                    'Ngoài ra, thuê xe tự lái còn giúp tiết kiệm chi phí so với việc thuê xe có tài xế hoặc đầu tư mua xe mới khi nhu cầu sử dụng không thường xuyên.',
                ],
            },
            {
                heading: 'Những giấy tờ cần chuẩn bị khi thuê xe tự lái',
                paragraphs: [
                    'Thủ tục thuê xe hiện nay đã được nhiều đơn vị đơn giản hóa, nhưng người thuê vẫn cần chuẩn bị đủ giấy tờ cơ bản để hoàn tất hồ sơ nhanh và rõ ràng hơn.',
                ],
                bullets: [
                    'CCCD gắn chip hoặc passport còn hiệu lực.',
                    'Giấy phép lái xe của người đứng tên thuê xe.',
                    'Tài sản thế chấp có giá trị phù hợp, xe gắn máy kèm giấy đăng ký chính chủ hoặc tiền mặt theo yêu cầu của bên cho thuê.',
                ],
            },
            {
                heading: 'Quy trình thuê xe tự lái',
                paragraphs: [
                    'Sau khi chuẩn bị đủ giấy tờ, người thuê thường sẽ đi qua ba bước chính là ký hợp đồng, nhận xe và trả xe. Nắm rõ từng bước sẽ giúp bạn giảm rủi ro và tránh các phát sinh không cần thiết.',
                ],
            },
            {
                heading: 'Ký hợp đồng',
                paragraphs: [
                    'Hợp đồng là phần bắt buộc khi thuê xe tự lái vì đây là căn cứ đảm bảo quyền lợi cho cả hai bên. Trước khi ký, bạn nên đọc kỹ toàn bộ nội dung và hỏi lại ngay nếu có điều khoản nào chưa rõ.',
                    'Những mục cần lưu ý nhiều nhất thường là trách nhiệm khi xe hỏng hóc giữa đường, phí quá giờ, phí qua đêm, điều khoản đặt cọc và cách xử lý khi phát sinh tranh chấp.',
                ],
            },
            {
                heading: 'Nhận xe',
                paragraphs: [
                    'Khi nhận xe, bạn nên mang đầy đủ giấy tờ đã chuẩn bị và kiểm tra kỹ cả nội thất lẫn ngoại thất của xe. Nếu thấy trầy xước, móp méo hoặc bất kỳ dấu hiệu bất thường nào, hãy chụp ảnh lại và thông báo ngay cho bên cho thuê.',
                    'Nếu có thể, hãy lái thử ngắn để cảm nhận khả năng vận hành và kiểm tra các chi tiết cơ bản trước khi bắt đầu chuyến đi.',
                ],
            },
            {
                heading: 'Trả xe',
                paragraphs: [
                    'Bạn nên trả xe đúng giờ theo thỏa thuận để tránh mất thêm phí ngoài hợp đồng. Khi bàn giao lại xe, hai bên cần đối chiếu tình trạng xe trước và sau thời gian thuê để xác nhận rõ ràng.',
                ],
            },
            {
                heading: 'Một vài lưu ý để thuê xe thuận tiện hơn',
                paragraphs: [
                    'Ngoài giấy tờ và thủ tục, bạn nên chủ động đặt xe sớm nếu đi vào cuối tuần hoặc dịp cao điểm, đồng thời lưu lại ảnh xe và hợp đồng để dễ đối chiếu khi cần.',
                    'Việc chuẩn bị kỹ từ đầu sẽ giúp quá trình thuê xe tự lái tại Hồ Chí Minh rõ ràng hơn, nhanh hơn và an tâm hơn cho cả chuyến đi.',
                ],
            },
        ],
    },
    {
        slug: '/tin-tuc/thue-xe-o-to-tu-lai-can-luu-y-nhung-van-de-gi',
        title: 'Thuê xe ô tô tự lái cần lưu ý những vấn đề gì?',
        publishedAt: '2026-03-24T09:00:00+07:00',
        cardDate: '24/03/2026',
        excerpt: 'Tổng hợp những lưu ý quan trọng khi thuê xe ô tô tự lái, từ kiểm tra xe, giấy tờ đến hợp đồng và cách tránh mất tiền oan.',
        metaTitle: 'Thuê xe ô tô tự lái cần lưu ý những vấn đề gì? | TripDriver',
        metaDescription: 'Những lưu ý quan trọng khi thuê xe ô tô tự lái: chọn xe, kiểm tra tình trạng xe, giấy tờ, hợp đồng và kinh nghiệm tránh phát sinh không đáng có.',
        thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
        thumbnailAlt: 'Kinh nghiệm thuê xe ô tô tự lái',
        inlineImages: [
            {
                afterSection: 2,
                src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
                alt: 'Kiểm tra kỹ xe ô tô tự lái trước khi nhận',
            },
        ],
        intro: [
            'Thuê xe ô tô tự lái là lựa chọn tiện lợi khi bạn muốn chủ động hơn cho chuyến đi, nhưng để thuê đúng xe và tránh phát sinh không đáng có thì khâu chuẩn bị vẫn rất quan trọng.',
            'Từ việc xác định nhu cầu, kiểm tra tình trạng xe, xem giấy tờ đến đọc kỹ hợp đồng, mỗi bước đều ảnh hưởng trực tiếp đến trải nghiệm thuê xe. Dưới đây là 10 lưu ý quan trọng giúp bạn thuê xe tự lái an toàn và rõ ràng hơn.',
        ],
        sections: [
            {
                heading: '1. Xác định mục đích thuê xe',
                paragraphs: [
                    'Nhiều người thường bỏ qua bước này, nhưng xác định rõ mục đích sử dụng sẽ giúp bạn chọn xe đúng hơn ngay từ đầu. Bạn nên làm rõ mình thuê xe để đi du lịch, đi làm, đi công tác hay đi gia đình.',
                    'Khi biết rõ nhu cầu, bạn sẽ dễ chọn thời gian thuê, loại xe, mức giá và tiêu chí phù hợp hơn. Điều này cũng giúp bạn chủ động hơn khi so sánh các đơn vị cho thuê xe tự lái.',
                ],
            },
            {
                heading: '2. Chọn gói dịch vụ và đặt xe sớm',
                paragraphs: [
                    'Thông thường, dịch vụ thuê xe tự lái có hai hình thức phổ biến là thuê theo số kilomet và thuê theo ngày. Nếu đi đường dài hoặc dễ thay đổi lộ trình, gói theo ngày thường linh hoạt hơn và giúp bạn bớt áp lực về quãng đường phát sinh.',
                    'Vào dịp lễ, Tết hoặc mùa cao điểm, bạn nên đặt xe sớm để tránh hết xe, bị đẩy giá hoặc chỉ còn những mẫu xe không phù hợp. Ngay cả ngày thường, nhu cầu thuê xe tự lái hiện nay cũng khá cao nên việc chủ động trước vẫn luôn có lợi.',
                ],
            },
            {
                heading: '3. Kiểm tra xe cẩn thận trước khi thuê',
                paragraphs: [
                    'Trước khi nhận xe, hãy kiểm tra kỹ ngoại thất trước để quan sát rõ các vết trầy xước, móp méo, đèn, gương, vành bánh và tình trạng lốp. Nếu cần, bạn có thể đề nghị bên cho thuê rửa xe để việc kiểm tra dễ hơn.',
                    'Bất kỳ dấu hiệu bất thường nào cũng nên được ghi nhận rõ với chủ xe và bổ sung vào biên bản hoặc thỏa thuận giao xe. Đây là cách đơn giản nhưng rất hiệu quả để tránh tranh chấp khi trả xe.',
                    'Ngoài ngoại thất, bạn cũng nên kiểm tra nội thất và các chi tiết ảnh hưởng trực tiếp đến trải nghiệm sử dụng như điều hòa, hệ thống giải trí, dây điện, cần gạt, ốp trần và lót sàn.',
                ],
            },
            {
                heading: '4. Làm rõ trách nhiệm khi xe hư hỏng giữa đường',
                paragraphs: [
                    'Đây là một nội dung rất quan trọng nhưng thường bị bỏ qua. Nếu xe phát sinh hỏng hóc giữa đường, bạn cần biết rõ bên nào sẽ chịu trách nhiệm cho các chi phí sửa chữa hoặc hỗ trợ xử lý.',
                    'Ngay trong hợp đồng, bạn có thể yêu cầu làm rõ trách nhiệm với các sự cố kỹ thuật phát sinh trong thời gian thuê. Việc này giúp chuyến đi ít rủi ro hơn và giảm khả năng tranh cãi khi xảy ra vấn đề.',
                ],
                bullets: [
                    'Ghi lại chính xác số lượng phụ tùng hoặc linh kiện dự phòng được bàn giao.',
                    'Kiểm tra số kilomet hiện tại.',
                    'Kiểm tra mức xăng hoặc tình trạng nhiên liệu.',
                    'Đảm bảo các ghi nhận đều có xác nhận từ cả hai bên.',
                ],
            },
            {
                heading: '5. Lái thử để kiểm tra hoạt động của xe',
                paragraphs: [
                    'Nếu có thể, hãy lái thử xe một đến hai vòng trước khi nhận chính thức. Bước này giúp bạn cảm nhận độ mượt của vô lăng, hệ thống phanh, khả năng vận hành và phát hiện sớm các vấn đề bất thường.',
                    'Đây không chỉ là cách chọn xe tốt hơn mà còn giúp bạn an tâm hơn về độ an toàn trong suốt chuyến đi.',
                ],
            },
            {
                heading: '6. Chuẩn bị giấy tờ cần thiết',
                paragraphs: [
                    'Tùy từng đơn vị, hồ sơ thuê xe có thể khác nhau, nhưng nhìn chung bạn cần chuẩn bị giấy tờ tùy thân, giấy phép lái xe và phương án thế chấp phù hợp.',
                ],
                bullets: [
                    'Chứng minh nhân dân, căn cước công dân hoặc sổ hộ khẩu theo yêu cầu.',
                    'Giấy phép lái xe hợp lệ.',
                    'Tiền mặt hoặc phương tiện thế chấp nếu bên cho thuê yêu cầu.',
                ],
            },
            {
                heading: '7. Kiểm tra giấy tờ xe và đọc kỹ hợp đồng',
                paragraphs: [
                    'Giấy tờ xe cần đầy đủ, hợp lệ và còn hiệu lực. Bạn nên kiểm tra hạn đăng kiểm, tình trạng lưu hành và các thông tin liên quan để tránh rắc rối khi tham gia giao thông.',
                    'Với hợp đồng thuê xe, cần xem kỹ loại xe, màu xe, đời xe, biển số, thời gian thuê, mức giá, cách tính phí phát sinh và trách nhiệm của mỗi bên. Nếu có điều khoản nào chưa rõ, nên hỏi lại trước khi ký.',
                ],
                bullets: [
                    'Hình thức đặt cọc bằng tài sản hoặc tiền mặt.',
                    'Cách tính giá thuê theo ngày hoặc theo kilomet.',
                    'Biên bản giao nhận xe và cách ghi nhận mức nhiên liệu thực tế.',
                    'Chi phí phụ trội nếu quá giờ hoặc vượt quãng đường đã thỏa thuận.',
                ],
            },
            {
                heading: '8. Chụp hình hiện trạng xe trước khi thuê',
                paragraphs: [
                    'Việc chụp lại giấy tờ, hợp đồng và tình trạng thực tế của xe là một bước rất nên làm. Những hình ảnh này sẽ là cơ sở quan trọng nếu sau đó phát sinh tranh chấp liên quan đến ngoại thất hoặc phụ kiện của xe.',
                ],
            },
            {
                heading: '9. Tham khảo ý kiến người có kinh nghiệm',
                paragraphs: [
                    'Nếu bạn gặp va chạm, phát sinh đền bù hoặc không chắc về mức chi phí bên cho thuê đưa ra, hãy nhờ người có kinh nghiệm tư vấn. Một góc nhìn khách quan sẽ giúp bạn bình tĩnh hơn và tránh bị yêu cầu quá mức.',
                ],
            },
            {
                heading: '10. Kiểm tra kỹ khi trả xe',
                paragraphs: [
                    'Khi trả xe, bạn nên cùng bên cho thuê kiểm tra lại tổng thể xe, đối chiếu với ảnh chụp ban đầu và xác nhận các thông tin đã ghi nhận lúc nhận xe. Điều này giúp quá trình hoàn tất hợp đồng rõ ràng và hạn chế tranh cãi.',
                    'Nếu có hư hỏng phát sinh, nên bình tĩnh kiểm tra mức độ thực tế và xử lý dựa trên bằng chứng đã ghi nhận từ đầu.',
                ],
            },
        ],
    },
    {
        slug: '/tin-tuc/cach-chong-say-xe-hieu-qua-khi-di-xe-duong-dai',
        title: 'Cách chống say xe hiệu quả khi đi xe đường dài',
        publishedAt: '2026-03-21T08:45:00+07:00',
        cardDate: '21/03/2026',
        excerpt: 'Tổng hợp những cách chống say xe hiệu quả khi đi đường dài như bấm huyệt, dùng gừng, đeo khẩu trang, nhai kẹo cao su và nghỉ ngơi hợp lý.',
        metaTitle: 'Cách chống say xe hiệu quả khi đi xe đường dài | TripDriver',
        metaDescription: 'Những cách chống say xe hiệu quả khi đi xe đường dài: bấm huyệt, gừng tươi, khẩu trang, kẹo cao su, nghỉ ngơi đúng cách và các mẹo giảm buồn nôn.',
        thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        thumbnailAlt: 'Mẹo chống say xe khi đi đường dài',
        inlineImages: [
            {
                afterSection: 1,
                src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
                alt: 'Nghỉ ngơi hợp lý để hạn chế say xe khi đi đường dài',
            },
        ],
        intro: [
            'Say xe là tình trạng nhiều người gặp phải khi đi đường dài, đặc biệt vào những chuyến đi xa dịp lễ, về quê hoặc du lịch. Cảm giác chóng mặt, buồn nôn có thể khiến hành trình trở nên rất mệt.',
            'Nếu bạn thường xuyên gặp tình trạng này, có một số cách đơn giản và dễ áp dụng có thể giúp giảm khó chịu ngay từ trước khi lên xe và trong suốt chuyến đi.',
        ],
        sections: [
            {
                heading: 'Vì sao dễ bị say xe?',
                paragraphs: [
                    'Say xe thường xảy ra khi tín hiệu mà mắt nhìn thấy và cảm nhận cân bằng của cơ thể gửi đến não không đồng nhất. Mắt có thể cảm nhận rằng bạn đang ngồi yên, nhưng hệ tiền đình lại nhận ra cơ thể đang di chuyển.',
                    'Sự lệch tín hiệu này khiến não phản ứng bằng cảm giác chóng mặt, buồn nôn hoặc mệt lả, đặc biệt khi ngồi xe lâu trên quãng đường dài.',
                ],
            },
            {
                heading: 'Các cách chống say xe phổ biến',
                paragraphs: [
                    'Có nhiều mẹo chống say xe quen thuộc, nhưng không phải cách nào cũng cần áp dụng cùng lúc. Điều quan trọng là chọn những cách phù hợp với cơ thể và dễ thực hiện trong chuyến đi.',
                ],
                bullets: [
                    'Bấm huyệt hoặc massage nhẹ ở vùng cổ tay, thái dương.',
                    'Dùng thuốc chống say xe nếu bạn đã quen sử dụng và hiểu rõ cơ thể mình.',
                    'Mang theo gừng tươi, ngửi hoặc dùng một lượng nhỏ trước chuyến đi.',
                    'Dùng vỏ quýt hoặc dầu gió để tạo cảm giác dễ chịu hơn.',
                    'Nhìn ra xa, ngồi nơi thoáng và có thể đeo khẩu trang nếu nhạy với mùi.',
                    'Nhai kẹo cao su để giảm cảm giác khó chịu và buồn nôn.',
                ],
            },
            {
                heading: 'Những thói quen nên tránh trên xe',
                paragraphs: [
                    'Một số thói quen tưởng như bình thường lại khiến tình trạng say xe dễ nặng hơn. Bạn nên hạn chế đọc sách, nhìn điện thoại liên tục hoặc cúi đầu quá lâu khi xe đang di chuyển.',
                    'Bên cạnh đó, không nên để bụng quá đói nhưng cũng tránh ăn quá no trước khi lên xe. Một cơ thể mệt hoặc thiếu ngủ cũng dễ khiến cảm giác say xe xuất hiện mạnh hơn.',
                ],
            },
            {
                heading: 'Trò chuyện, nghỉ ngơi và thư giãn đúng cách',
                paragraphs: [
                    'Khi đi đường dài, trò chuyện nhẹ nhàng hoặc ngủ một giấc ngắn trên xe có thể giúp bạn giảm tập trung vào cảm giác buồn nôn. Đây là cách đơn giản nhưng khá hiệu quả với nhiều người.',
                    'Nếu có điểm dừng nghỉ, bạn nên xuống xe đi lại vài phút để cơ thể dễ chịu hơn trước khi tiếp tục hành trình.',
                ],
            },
            {
                heading: 'Một vài lưu ý trước khi lên xe',
                paragraphs: [
                    'Hãy ưu tiên chỗ ngồi thoáng, nhìn được về phía trước và tránh ngồi ở vị trí quá bí. Bạn cũng nên ngủ đủ giấc, chuẩn bị nước uống và một vài vật dụng hỗ trợ như gừng, khẩu trang hoặc dầu gió nếu thường bị say xe.',
                    'Những cách trên không thay thế tư vấn y tế, nhưng rất phù hợp để người dùng phổ thông áp dụng khi đi xe đường dài và muốn hành trình dễ chịu hơn.',
                ],
            },
        ],
    },
    {
        slug: '/tin-tuc/5-luu-y-phai-nho-khi-thue-o-to-tu-lai-dip-tet',
        title: '5 lưu ý phải nhớ khi thuê ô tô tự lái dịp Tết',
        publishedAt: '2026-03-19T21:05:00+07:00',
        cardDate: '19/03/2026',
        excerpt: 'Những điều cần nhớ khi thuê ô tô tự lái dịp Tết để chủ động hơn, an toàn hơn và tránh các rủi ro phát sinh trong chuyến đi.',
        metaTitle: '5 lưu ý phải nhớ khi thuê ô tô tự lái dịp Tết | TripDriver',
        metaDescription: 'Tổng hợp 5 lưu ý quan trọng khi thuê ô tô tự lái dịp Tết: xác định nhu cầu, chuẩn bị giấy tờ, kiểm tra xe, đọc hợp đồng và trả xe an toàn.',
        thumbnail: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
        thumbnailAlt: 'Thuê ô tô tự lái dịp Tết',
        inlineImages: [
            {
                afterSection: 3,
                src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
                alt: 'Lái thử và kiểm tra xe trước chuyến đi dịp Tết',
            },
        ],
        intro: [
            'Thuê ô tô tự lái là lựa chọn đáng cân nhắc trong dịp Tết, đặc biệt khi bạn muốn chủ động lịch trình, đi lại thuận tiện hơn và không cần sở hữu xe riêng.',
            'Tuy nhiên, thời điểm cao nhu cầu cũng là lúc bạn cần cẩn trọng hơn trong từng bước thuê xe. Dưới đây là 5 lưu ý quan trọng nên nhớ để chuyến đi an toàn và trọn vẹn hơn.',
        ],
        sections: [
            {
                heading: '1. Xác định đúng nhu cầu',
                paragraphs: [
                    'Trước khi thuê xe, bạn nên xác định rõ mục đích sử dụng: đi trong phố hay đường dài, đi ít người hay nhiều người, địa hình bằng phẳng hay có đèo dốc. Từ đó, bạn sẽ dễ chọn đúng sedan, SUV, bán tải hoặc xe 4 chỗ, 5 chỗ, 7 chỗ phù hợp.',
                ],
            },
            {
                heading: '2. Chuẩn bị đủ giấy tờ',
                paragraphs: [
                    'Để thuê được xe trong dịp Tết, bạn nên chuẩn bị sẵn giấy phép lái xe ô tô còn hiệu lực, giấy tờ tùy thân và các hồ sơ đối chiếu theo yêu cầu của bên cho thuê.',
                    'Một số đơn vị cũng yêu cầu đặt cọc bằng tiền mặt hoặc tài sản có giá trị. Chuẩn bị đầy đủ từ đầu sẽ giúp quá trình nhận xe nhanh và ít vướng mắc hơn.',
                ],
            },
            {
                heading: '3. Kiểm tra xe cẩn trọng',
                paragraphs: [
                    'Khâu kiểm tra xe luôn là bước quan trọng nhất. Trước khi nhận xe, bạn nên xem kỹ ngoại thất, nội thất, các vết trầy xước, móp méo, hệ thống đèn, còi, phanh, cần gạt và số kilomet hiện tại.',
                    'Nếu có thể, hãy lái thử để đánh giá khả năng vận hành. Với các chuyến đi xa hoặc thuê dài ngày, bạn cũng nên hỏi thêm về phụ kiện dự phòng như kích xe, dây kích bình hoặc bơm mini để chủ động hơn khi cần.',
                ],
            },
            {
                heading: '4. Đọc kỹ hợp đồng thuê',
                paragraphs: [
                    'Sau khi kiểm tra xe, bạn cần xem kỹ giấy tờ xe và toàn bộ điều khoản trong hợp đồng. Xe phải có giấy đăng ký và đăng kiểm hợp lệ; hợp đồng cần ghi rõ giá thuê, thời gian thuê, cách tính phát sinh và tình trạng xe tại thời điểm giao nhận.',
                    'Nếu đã chọn trước một mẫu xe cụ thể, bạn nên bổ sung điều khoản rõ ràng về trách nhiệm của bên cho thuê trong trường hợp giao sai xe hoặc giao xe không đúng cam kết.',
                ],
            },
            {
                heading: '5. Lưu ý khi trả xe',
                paragraphs: [
                    'Khi kết thúc thời gian thuê, hãy tự kiểm tra xe lại một lần nữa, đối chiếu với tình trạng lúc nhận và chốt số kilomet nếu hợp đồng tính theo quãng đường.',
                    'Nếu phát sinh tranh chấp hoặc yêu cầu đền bù, bạn nên bình tĩnh đối chiếu ảnh chụp ban đầu và chỉ xử lý dựa trên các bằng chứng rõ ràng.',
                ],
            },
        ],
    },
    {
        slug: '/tin-tuc/loi-ich-cua-thue-xe-tu-lai',
        title: 'Lợi ích của thuê xe tự lái',
        publishedAt: '2026-03-12T09:00:00+07:00',
        cardDate: '12/03/2026',
        excerpt: 'Tìm hiểu những lợi ích nổi bật của thuê xe tự lái như tiết kiệm chi phí, linh hoạt lịch trình, riêng tư và chủ động hơn khi di chuyển.',
        metaTitle: 'Lợi ích của thuê xe tự lái là gì? | TripDriver',
        metaDescription: 'Khám phá lợi ích của thuê xe tự lái: tiết kiệm chi phí, linh hoạt hơn, riêng tư hơn và phù hợp với nhiều nhu cầu di chuyển khác nhau.',
        thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        thumbnailAlt: 'Lợi ích của thuê xe tự lái',
        inlineImages: [
            {
                afterSection: 3,
                src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
                alt: 'Thuê xe tự lái giúp hành trình linh hoạt và chủ động hơn',
            },
        ],
        intro: [
            'Thuê xe tự lái ngày càng được nhiều người lựa chọn khi cần đi du lịch, đi công tác, đi chơi hay di chuyển linh hoạt mà chưa có xe riêng.',
            'Không chỉ giúp chủ động hơn về hành trình, hình thức này còn mang lại nhiều lợi ích về chi phí, sự riêng tư và quyền tự do lựa chọn theo nhu cầu thực tế.',
        ],
        sections: [
            {
                heading: 'Thuê xe tự lái là gì?',
                paragraphs: [
                    'Thuê xe tự lái là dịch vụ cho phép khách hàng thuê xe để tự điều khiển, không cần tài xế đi cùng. Người thuê có thể lựa chọn loại xe, thời gian thuê, địa điểm nhận xe và mức chi phí phù hợp với nhu cầu của mình.',
                    'Chỉ cần có bằng lái hợp lệ, hoàn tất thủ tục và ký hợp đồng thuê xe, bạn có thể nhận xe và bắt đầu hành trình theo kế hoạch riêng.',
                ],
            },
            {
                heading: 'Vì sao nhiều người chọn thuê xe tự lái?',
                paragraphs: [
                    'So với taxi hoặc thuê xe có tài xế, thuê xe tự lái mang lại cảm giác chủ động và phù hợp hơn với nhiều tình huống thực tế. Đây là giải pháp được nhiều người cân nhắc khi muốn có phương tiện riêng nhưng chưa cần hoặc chưa muốn sở hữu ô tô.',
                ],
            },
            {
                heading: 'Tiết kiệm chi phí',
                paragraphs: [
                    'Một trong những lợi ích rõ nhất là tối ưu chi phí. Bạn không phải trả thêm chi phí cho tài xế, và mức giá thuê xe tự lái trong nhiều trường hợp cũng dễ kiểm soát hơn so với việc di chuyển bằng taxi hoặc thuê xe riêng cho cả ngày.',
                ],
            },
            {
                heading: 'Linh hoạt',
                paragraphs: [
                    'Bạn có thể tự quyết định thời gian đi, điểm dừng, lộ trình và tốc độ của chuyến đi. Khi kế hoạch thay đổi, bạn cũng chủ động điều chỉnh mà không phải phụ thuộc vào người lái hoặc lịch trình cố định.',
                ],
            },
            {
                heading: 'Riêng tư',
                paragraphs: [
                    'Không gian riêng là một lợi thế lớn của thuê xe tự lái. Bạn có thể trò chuyện, nghe nhạc, nghỉ ngơi hoặc làm việc mà không bị ảnh hưởng bởi sự có mặt của tài xế.',
                ],
            },
            {
                heading: 'Tự do lựa chọn',
                paragraphs: [
                    'Thuê xe tự lái cho phép bạn chọn loại xe phù hợp với từng nhu cầu cụ thể, từ xe nhỏ đi trong phố đến xe lớn phục vụ gia đình hoặc công tác. Điều này giúp bạn linh hoạt trải nghiệm nhiều dòng xe mà không cần sở hữu lâu dài.',
                ],
            },
        ],
    },
];

export const articlesBySlug = Object.fromEntries(
    articles.map((article) => [article.slug, article])
) as Record<string, ArticleItem>;
