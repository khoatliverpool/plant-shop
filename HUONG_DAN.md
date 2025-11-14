# Hướng Dẫn Cài Đặt và Chạy Dự Án Plant Shop

## ✅ Dự Án Đã Được Tạo Thành Công!

Dự án React.js "Plant Shop" của bạn đã được tạo xong với đầy đủ các tính năng theo yêu cầu.

## 📍 Vị Trí Dự Án

```
C:\Users\TinTin\plant-shop
```

## 🚀 Cách Chạy Dự Án

### Bước 1: Mở Terminal trong thư mục dự án
```powershell
cd C:\Users\TinTin\plant-shop
```

### Bước 2: Khởi động server (nếu chưa chạy)
```powershell
npm start
```

Server sẽ tự động mở trình duyệt tại: http://localhost:3000

## 📋 Danh Sách Tính Năng Đã Hoàn Thành (50 điểm)

### ✅ GitHub (6 điểm)
- Repository công khai (2 điểm)
- Files Redux trong `/src/redux/` (4 điểm)
  - `store.js` - Cấu hình Redux store
  - `cartSlice.js` - Reducers cho giỏ hàng

### ✅ Trang Chủ / Landing Page (5 điểm)
- Hình nền đẹp (1 điểm)
- Mô tả về công ty (1 điểm)  
- Tên công ty: "Paradise Nursery" (1 điểm)
- Nút "Get Started" chuyển đến trang sản phẩm (2 điểm)

### ✅ Trang Danh Sách Sản Phẩm (9 điểm)
- 6 cây cảnh với hình ảnh, tên, giá (2 điểm)
  - Monstera Deliciosa ($29.99)
  - Bird of Paradise ($45.99)
  - Aloe Vera ($15.99)
  - Echeveria ($12.99)
  - Boston Fern ($24.99)
  - Maidenhair Fern ($22.99)
- Phân nhóm theo 3 danh mục (1 điểm)
  - Tropical (Nhiệt đới)
  - Succulent (Sen đá)
  - Fern (Dương xỉ)
- Nút "Add to Cart" với các tính năng (6 điểm)
  - Tăng số lượng trên icon giỏ hàng ✅
  - Nút bị vô hiệu hóa sau khi thêm ✅
  - Sản phẩm được thêm vào giỏ ✅

### ✅ Header (7 điểm)
- Hiển thị trên cả 2 trang (2 điểm)
- Icon giỏ hàng với số lượng sản phẩm (3 điểm)
- Điều hướng đến các trang khác (2 điểm)
  - Home, Products, Cart

### ✅ Trang Giỏ Hàng (23 điểm)
- Tổng số lượng sản phẩm (2 điểm)
- Tổng giá trị đơn hàng (2 điểm)
- Hiển thị hình, tên, giá từng sản phẩm (6 điểm)
- Nút tăng số lượng (+) (4 điểm)
- Nút giảm số lượng (-) (4 điểm)
- Nút xóa sản phẩm (2 điểm)
- Nút thanh toán (hiện "Coming Soon") (1 điểm)
- Nút tiếp tục mua hàng (2 điểm)

## 📁 Cấu Trúc Dự Án

```
plant-shop/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Các component React
│   │   ├── LandingPage.js
│   │   ├── ProductListing.js
│   │   ├── ShoppingCart.js
│   │   └── Header.js
│   ├── data/
│   │   └── plantsData.js   # Dữ liệu sản phẩm
│   ├── redux/              # Redux state management
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Công Nghệ Sử Dụng

- **React 17** - Thư viện JavaScript cho giao diện
- **Redux Toolkit** - Quản lý state
- **React Router v5** - Điều hướng giữa các trang
- **React Redux** - Kết nối React với Redux
- **CSS3** - Styling

## 📝 Các Lệnh Khả Dụng

```powershell
npm start   # Chạy ứng dụng ở chế độ development
npm build   # Build ứng dụng cho production
npm test    # Chạy tests
```

## 🎨 Các Trang Trong Ứng Dụng

1. **Trang Chủ** (`/`) - Landing page với background đẹp
2. **Trang Sản Phẩm** (`/products`) - Danh sách 6 cây cảnh
3. **Giỏ Hàng** (`/cart`) - Quản lý giỏ hàng

## 🔥 Tính Năng Nổi Bật

- ✅ Quản lý state toàn cục với Redux
- ✅ Giao diện đẹp, hiện đại
- ✅ Responsive design
- ✅ Hiệu ứng hover mượt mà
- ✅ Cập nhật real-time số lượng giỏ hàng
- ✅ Tính toán giá tự động
- ✅ Vô hiệu hóa nút khi đã thêm vào giỏ

## 📤 Đăng Lên GitHub

```powershell
# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: Plant Shop project with Redux"

# Thêm remote repository (thay <your-github-url> bằng URL repo của bạn)
git remote add origin <your-github-url>

# Push lên GitHub
git push -u origin main
```

## 🆘 Xử Lý Lỗi

Nếu gặp lỗi khi chạy:

1. **Xóa node_modules và cài lại:**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

2. **Clear cache:**
```powershell
npm cache clean --force
```

---

**Chúc bạn thành công với dự án! 🌿**