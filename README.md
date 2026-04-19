# TripDriverWeb_v2

TripDriverWeb_v2 là website nội dung của **TripDriver**, được xây dựng nhằm giới thiệu nền tảng, hỗ trợ người dùng mới tìm hiểu về dịch vụ thuê xe tự lái, triển khai nội dung bài viết phục vụ SEO, cung cấp trang FAQ riêng và cho phép tải trực tiếp ứng dụng Android từ website.

Đây không chỉ là một landing page đơn lẻ. Project hiện tại bao gồm nhiều trang nội bộ như trang chủ, trang danh sách tin tức, trang chi tiết bài viết và trang FAQ, đồng thời có thiết lập SEO theo từng route chính để hỗ trợ khả năng hiển thị trên Google.

## Phạm vi dự án

Website hiện tại tập trung vào các mục tiêu sau:

- Giới thiệu TripDriver như một nền tảng thuê xe tự lái
- Hỗ trợ người dùng mới thông qua nội dung hướng dẫn và FAQ
- Triển khai các bài viết phục vụ chiến lược SEO nội dung
- Tạo khu vực tin tức và bài viết chi tiết
- Cung cấp điểm tải file APK trực tiếp từ website
- Đảm bảo trải nghiệm hiển thị tốt trên desktop và mobile

## Các trang hiện có

### Trang chủ
**Route:** `/`

Chức năng chính:

- Giới thiệu TripDriver
- Trình bày giá trị cốt lõi của nền tảng
- Hướng người dùng đến tải ứng dụng
- Điều hướng tới các trang nội dung và hỗ trợ

### Trang danh sách tin tức
**Route:** `/tin-tuc`

Chức năng chính:

- Hiển thị danh sách các bài viết hiện có
- Hỗ trợ người dùng duyệt nội dung liên quan đến thuê xe tự lái
- Điều hướng nội bộ tới từng bài viết chi tiết

### Trang chi tiết bài viết
**Route:** theo dữ liệu trong `articleData.ts`

Chức năng chính:

- Hiển thị nội dung bài viết từ dữ liệu nội bộ
- Thiết lập SEO theo từng bài
- Phục vụ chiến lược content SEO

### Trang FAQ
**Route:** `/faq-thue-xe-tu-lai`

Chức năng chính:

- Trả lời các câu hỏi phổ biến của người thuê xe tự lái
- Có structured data dạng FAQ để hỗ trợ SEO
- Điều hướng người dùng quay lại trang chủ khi cần

## Các tính năng đã triển khai

- Cấu trúc website nhiều trang trong cùng ứng dụng React
- Trang chủ, trang FAQ, trang danh sách tin tức và trang chi tiết bài viết
- Dữ liệu bài viết nội bộ thông qua `articleData.ts`
- Thiết lập SEO theo route
- Canonical URL, Open Graph, Twitter metadata và JSON-LD schema
- Tải trực tiếp file APK từ thư mục `public`
- Giao diện responsive cho desktop và mobile
- Một số hiệu ứng giao diện và animation khi cuộn
- File xác minh Google Search Console
- Hỗ trợ index cơ bản thông qua `robots.txt` và `sitemap.txt`

## Triển khai SEO hiện tại

Project đã có phần xử lý SEO on-page cho các route chính thông qua `src/seo.ts`.

Các thành phần SEO đang có gồm:

- Tiêu đề trang động
- Meta description
- Canonical URL
- Open Graph metadata
- Twitter metadata
- Structured data (JSON-LD)
- FAQ schema cho trang FAQ
- Schema cho trang nội dung chính
- Liên kết nội bộ giữa các trang bài viết

## Công nghệ sử dụng

- **React 19**
- **Vite 7**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**
- **ESLint**

## Cấu trúc thư mục chính

```txt
src/
  App.jsx
  TripDriverWeb.tsx
  QAPage.tsx
  NewsListingPage.tsx
  NewsSection.tsx
  ArticlePage.tsx
  articleData.ts
  SiteHeader.tsx
  seo.ts
  main.jsx
  index.css

public/
  TripDriverLogo.jpg
  PhonePic.png
  tripdriver.apk
  robots.txt
  sitemap.txt
  google88caaf6c07f99724.html
  googlea513ed28dedce9d4.html

index.html
vite.config.js
vercel.json
eslint.config.js
