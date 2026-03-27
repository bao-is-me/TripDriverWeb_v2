# TripDriverWeb

Website giới thiệu nền tảng **TripDriver** dành cho dịch vụ **thuê xe tự lái**.  
Project hiện gồm:

- Trang chủ `/`
- Trang FAQ `/faq-thue-xe-tu-lai`
- CTA tải file APK trực tiếp
- SEO on-page cơ bản cho homepage và FAQ

Repository này được xây dựng bằng **React + Vite** và đang được tối ưu theo hướng landing page dễ đọc, dễ triển khai và thuận tiện để tiếp tục phát triển.

## Mục tiêu project

TripDriver là nền tảng kết nối:

- Người dùng cần thuê xe tự lái
- Chủ xe muốn cho thuê phương tiện

Website này tập trung vào:

- Giới thiệu giá trị dịch vụ
- Trình bày lợi ích cho người dùng và đối tác
- Hỗ trợ tải ứng dụng
- Cung cấp nội dung FAQ phục vụ người dùng mới
- Tối ưu hiển thị tìm kiếm theo từ khóa thương hiệu và non-brand

## Các trang hiện có

### 1. Homepage

Đường dẫn: `/`

Nội dung chính:

- Hero section giới thiệu TripDriver
- Giới thiệu dịch vụ
- Đối tượng sử dụng
- Giá trị cốt lõi
- Cách hoạt động
- Khu vực tải ứng dụng
- Footer

### 2. FAQ page

Đường dẫn: `/faq-thue-xe-tu-lai`

Nội dung chính:

- Câu hỏi thường gặp cho người mới thuê xe tự lái
- Nội dung tối ưu cho SEO FAQ
- Internal link quay về homepage

## Tính năng hiện tại

- Giao diện landing page responsive cho desktop và mobile
- Hiệu ứng scroll reveal, progress line, carousel đơn giản
- Khu vực tải ứng dụng bằng file APK nội bộ
- FAQ page riêng với route `/faq-thue-xe-tu-lai`
- SEO dynamic cho homepage và FAQ thông qua `src/seo.ts`
- `robots.txt` và `sitemap.txt` phục vụ index cơ bản
- Tệp xác minh Google Search Console trong `public/`

## SEO hiện có

Project đang có các thành phần SEO on-page sau:

- `title`
- `meta description`
- `canonical`
- Open Graph
- Twitter meta
- Structured data theo từng trang
- Internal link giữa homepage và FAQ

Định hướng SEO hiện tại:

- Giữ nhận diện thương hiệu `TripDriver`
- Đồng thời hỗ trợ các truy vấn non-brand liên quan đến:
  - ứng dụng thuê xe tự lái
  - thuê xe tự lái cho người mới
  - thuê xe tự lái tại Thành phố Hồ Chí Minh

## Tech stack

- React 19
- Vite 7
- Tailwind CSS 4
- CSS custom
- ESLint

## Cấu trúc thư mục chính

```txt
src/
  App.jsx
  TripDriverWeb.tsx
  QAPage.tsx
  seo.ts
  index.css
  main.jsx

public/
  TripDriverLogo.jpg
  PhonePic.png
  tripdriver.apk
  robots.txt
  sitemap.txt
  googlea513ed28dedce9d4.html
  google88caaf6c07f99724.html

index.html
vercel.json
```

## Cài đặt và chạy local

### Cài dependency

```bash
npm install
```

### Chạy môi trường development

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Preview bản build

```bash
npm run preview
```

## Deploy

Project đang phù hợp để deploy trên **Vercel**.

`vercel.json` đã có rewrite cho route:

- `/faq-thue-xe-tu-lai`

Điều này giúp mở trực tiếp trang FAQ không bị lỗi 404 sau deploy.

## Static files quan trọng

- APK tải xuống: [public/tripdriver.apk](public/tripdriver.apk)
- Logo: [public/TripDriverLogo.jpg](public/TripDriverLogo.jpg)
- Ảnh điện thoại section 05: [public/PhonePic.png](public/PhonePic.png)
- Sitemap: [public/sitemap.txt](public/sitemap.txt)
- Robots: [public/robots.txt](public/robots.txt)

## Ghi chú

- `sitemap` hiện đang dùng định dạng `.txt` theo cấu hình cũ đã hoạt động ổn định
- FAQ page được render trong cùng app, nhưng có SEO riêng theo route
- Nội dung website đang được viết ưu tiên tiếng Việt

## Hướng phát triển tiếp theo

- Thêm accordion cho FAQ page
- Tối ưu sâu hơn SEO technical cho từng route
- Thêm analytics/search console tracking rõ ràng hơn
- Tích hợp backend hoặc form liên hệ thật
- Mở rộng nội dung landing page cho nhiều thành phố hoặc nhóm nhu cầu thuê xe

## Tác giả / liên hệ

- Thương hiệu: **TripDriver**
- Email: `tripdriver201@gmail.com`
