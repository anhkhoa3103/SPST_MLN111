# PHÒNG 312

Game narrative triết học — React + Vite.

---

## Cài đặt & chạy

```bash
npm install
npm run dev
```

Mở `http://localhost:5173`

---

## Cấu trúc thư mục

```
phong312/
├── index.html
├── vite.config.js
├── package.json
│
├── public/
│   └── img/                  ← đặt tất cả ảnh vào đây
│       ├── char-duy.jpg
│       ├── char-trong.jpg
│       ├── char-phat.jpg
│       ├── three-friends.jpg
│       ├── dalat-land.jpg
│       └── ... (xem danh sách đầy đủ bên dưới)
│
└── src/
    ├── main.jsx              ← entry point (không chỉnh)
    ├── App.jsx               ← routing màn hình (không chỉnh)
    │
    ├── data/                 ← ████ CHỈNH Ở ĐÂY ████
    │   ├── characters.js     ← nhân vật, ảnh, tags
    │   ├── scenes.js         ← toàn bộ cốt truyện + câu hỏi
    │   ├── endings.js        ← 4 ending + kết luận + câu hỏi mở
    │   └── styles.js         ← màu sắc, font, layout tokens
    │
    ├── hooks/
    │   ├── useAudio.js       ← Web Audio API
    │   └── useGameState.js   ← state + logic game
    │
    └── components/
        ├── GlobalStyles.jsx  ← inject CSS
        ├── HUD.jsx           ← thanh nghi ngờ phía trên
        ├── ClueImage.jsx     ← ảnh manh mối rải rác
        ├── TypewriterText.jsx← hiệu ứng đánh máy
        ├── TimerBar.jsx      ← đếm ngược 20 giây
        ├── CharCard.jsx      ← thẻ nhân vật
        ├── IntroScreens.jsx  ← StartScreen + CharIntro
        ├── GameScenes.jsx    ← StoryScene + QuestionScene
        ├── SpecialScenes.jsx ← ChapterTransition + BreakScene + FinalScene
        └── EndingScreen.jsx  ← màn kết thúc + câu hỏi mở
```

---

## Cách chỉnh nội dung

### Thêm/đổi ảnh nhân vật
`src/data/characters.js` → đổi `avatar: 'img/char-duy.jpg'`

### Chỉnh câu chuyện
`src/data/scenes.js` → chỉnh `lines[]` của từng màn

### Thêm màn mới
Copy một object scene trong `SCENES[]`, đổi `id` và nội dung

### Chỉnh ending
`src/data/endings.js` → chỉnh `analysis`, `truth`, `philosophy`

### Đổi màu sắc / font
`src/data/styles.js` → chỉnh CSS variables trong `GLOBAL_CSS`

---

## Danh sách ảnh cần chuẩn bị

Đặt vào `public/img/`:

| File | Nội dung |
|---|---|
| `char-duy.jpg` | Ảnh nhân vật Duy |
| `char-trong.jpg` | Ảnh nhân vật Trọng |
| `char-phat.jpg` | Ảnh nhân vật Phát |
| `three-friends.jpg` | Ba người bạn |
| `dalat-land.jpg` | Lô đất Đà Lạt |
| `wet-soil.jpg` | Đất lún |
| `herb-shop.jpg` | Hiệu thuốc đông y |
| `aconitine.jpg` | Lọ phụ tử |
| `payment-transfer.jpg` | Chuyển khoản |
| `room-312.jpg` | Phòng 312 |
| `wine-glass.jpg` | Ly rượu |
| `three-drinking.jpg` | Ba người uống rượu |
| `argument.jpg` | Căng thẳng |
| `dalat-land-value.jpg` | Hợp đồng đất |
| `phone-call.jpg` | Điện thoại |
| `door-close.jpg` | Cửa đóng |
| `alone-room.jpg` | Phòng tối một mình |
| `wine-half.jpg` | Chai rượu còn nửa |
| `body-found.jpg` | Phát hiện thi thể |
| `phone-calls.jpg` | Lịch sử cuộc gọi |
| `forensic.jpg` | Báo cáo pháp y |
| `poison-diagram.jpg` | Sơ đồ chất độc |
| `wine-glass-evidence.jpg` | Vật chứng |
| `hotel-camera.jpg` | Camera CCTV |
| `timestamp.jpg` | Timestamp 22:02 |
| `broken-camera.jpg` | Camera hỏng |
| `deleted-call.jpg` | Cuộc gọi bị xóa |
| `call-log.jpg` | Lịch sử gọi Duy |
| `debt-document.jpg` | Giấy tờ nợ |
| `handwritten-list.jpg` | Danh sách tay |
| `witness.jpg` | Nhân chứng |
| `hallway-dark.jpg` | Hành lang tối |
| `atm-receipt.jpg` | Biên lai ATM |
| `lobby-camera.jpg` | Camera sảnh |
| `vial-empty.jpg` | Lọ đã mở |
| `vial-sealed.jpg` | Lọ còn nguyên |
| `suitcase.jpg` | Vali |
| `medical-record.jpg` | Hồ sơ bệnh án |
| `investigation.jpg` | Tài liệu điều tra |
| `wife-silent.jpg` | Vợ Trọng |
| `vial-bush.jpg` | Lọ dưới bụi cây |