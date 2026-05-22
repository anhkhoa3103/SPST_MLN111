// ═══════════════════════════════════════════════════════
// SCENES — toàn bộ cốt truyện
//
// type:    'story'    — kể chuyện thuần
//          'question' — có câu hỏi + lựa chọn + timer
//          'break'    — màn đen break reality
//          'final'    — phán quyết cuối
//
// images: [{ src, caption, pos }]
//   pos: 0=trái trên, 1=phải trên, 2=trái dưới,
//        3=phải dưới, 4=trái giữa
//
// shift: dương(+) = kéo về Phát, âm(-) = kéo về Duy
// ═══════════════════════════════════════════════════════

export const SCENES = [

  // ════════════════════════════════════════
  // CHƯƠNG 1 — NHẬN THỨC CẢM TÍNH
  // ════════════════════════════════════════

  {
    id: "s1-1", chapter: 1, type: "story",
    label: "Màn 1.1", title: "Những người bạn cũ",
    lines: [
      "Duy, Phát, Trọng quen nhau từ năm nhất đại học. Cùng khoa Kinh tế. Cùng thuê một căn phòng trọ năm hai.",
      "Trọng là người anh lớn trong nhóm — hay lo cơm nước khi hai đứa kia mải học thi. Hay trả tiền trước khi người khác kịp lấy ví. Hay im lặng khi cần và nói đúng lúc cần nói.",
      "Mười năm trôi qua. Ba người đi ba hướng — Duy làm kế toán cho công ty của Trọng. Phát trở thành đối tác đầu tư. Nhưng họ vẫn giữ liên lạc, vẫn gặp nhau thường xuyên — ít nhất là trước khi Trọng bị điều tra.",
    ],
    images: [{ src: "img/three-friends.jpg", caption: "Ba người bạn", pos: 1 }],
  },

  {
    id: "s1-2", chapter: 1, type: "story",
    label: "Màn 1.2", title: "Lô đất Đà Lạt",
    lines: [
      "Thứ Sáu. Ba người cùng lên Đà Lạt khảo sát lô đất mà Trọng và Phát đang hợp tác đầu tư. Duy đi theo để xem xét hợp đồng tài chính.",
      "Buổi sáng đi thực địa. Trời mát, sương còn đọng trên cỏ. Phát hay cười, Duy cầm tập hồ sơ, thỉnh thoảng ghi chú. Trọng đi chậm hơn. Anh quan sát mặt đất, các rãnh nước, phần nền mềm sau trận mưa đêm trước..",
      "Trong lúc đi quanh khu đất một mình, một người dân địa phương nói với Trọng: \"Đất vùng này hay bị lún lắm anh ơi. Mưa xuống là thấy liền.\"",
      "Trọng gật đầu. Không nói gì thêm. Nhưng trong lòng bắt đầu lo lắng.",
    ],
    images: [
      { src: "img/dalat-land.jpg", caption: "Lô đất Đà Lạt", pos: 0 },
      { src: "img/wet-soil.jpg", caption: "Dấu hiệu đất lún", pos: 1 },
    ],
  },

  {
    id: "s1-3", chapter: 1, type: "story",
    label: "Màn 1.3", title: "Hiệu thuốc đông y",
    lines: [
      "Trên xe về khách sạn, Trọng xoa lưng: \"Dạo này ngồi nhiều quá, lưng đau quá trời. Không biết chỗ nào mua phụ tử ngâm rượu không tụi mày?\"",
      "Duy nhìn ra cửa sổ: \"Có một tiệm tao từng ghé. Để tao dẫn.\"",
      "Tiệm thuốc nằm trong một con dốc nhỏ, bảng hiệu cũ, mùi thảo dược khô bám đầy trên kệ gỗ. Chủ tiệm nhận ra Duy. \“Lâu rồi mới thấy cậu.\”Duy gật đầu, không nói nhiều..",
      "Trọng hỏi mua phụ tử. Chủ tiệm lấy ra một lọ nhỏ, dặn kỹ:\“ Loại này mạnh. Dùng sai liều là nguy hiểm. Chỉ ngâm đúng cách, không được uống bừa.\”",
      "Phát thấy vậy cũng lấy một lọ:\“Tao cũng hay đau vai. Mua luôn cho tiện.\”",
      "Duy không mua. Anh nói mình còn một lọ cũ ở nhà, mang theo để đối chiếu loại thuốc.",
      "Khi tính tiền, Trọng mới nhớ ví để trên xe. Phát cũng không mang tiền mặt. Duy mở điện thoại, chuyển khoản ngay.Không hỏi thêm.",
    ],
    images: [
      { src: "img/herb-shop.jpg", caption: "Hiệu thuốc đông y", pos: 0 },
      { src: "img/phu-tu.jpg", caption: "Phụ tử", pos: 1 },
      { src: "img/payment-transfer.jpg", caption: "Duy chuyển khoản", pos: 2 },
    ],
  },

  {
    id: "s1-4", chapter: 1, type: "story",
    label: "Màn 1.4", title: "Tối hôm đó",
    lines: [
      "19:00. Khách sạn Minh Long, tầng 3, phòng 312 — phòng của Trọng.",
      "Phát mang theo chai rượu vang đỏ — thói quen mỗi lần gặp nhau.",
      "Trọng mở cửa. Anh nhìn chai rượu một thoáng rồi tránh sang một bên.\“Vào đi.\”",
      "Trọng lấy ba chiếc ly từ khay kính. Phát mở rượu.",
      "Trọng rót cho cả ba. Họ uống, nói chuyện về dự án, về bạn cũ, về mấy đứa ngày xưa giờ đã lập gia đình.",
      "Duy uống ít. Phát uống nhiều hơn. Ly của Trọng gần như vẫn còn nguyên. Một lúc, Trọng nhìn Duy và Phát rất lâu.",
      "Phát bật cười: \"Mày nhìn cái gì vậy?\"",
      "Trọng cười: \"Không có gì. Uống đi.\"",
    ],
    images: [
      { src: "img/room-312.jpg", caption: "Phòng 312", pos: 1 },
      { src: "img/wine-glass.jpg", caption: "Ly rượu vang đỏ", pos: 0 },
      { src: "img/three-drinking.jpg", caption: "Ba người", pos: 2 },
    ],
  },

  {
    id: "s1-5", chapter: 1, type: "story",
    label: "Màn 1.5", title: "Căng thẳng",
    lines: [
      "21:30. Phát đặt ly xuống. \"Trọng — mày có định rút khỏi dự án không? Tao nghe mấy đối tác nói.\"",
      "Trọng im lặng một lúc. \"Tao đang cân nhắc.\" Nụ cười của Phát biến mất. \"Cân nhắc là sao? Mày biết tao đang nợ bao nhiêu không?\"",
      "Trọng đáp:\“Tao biết.\”",
      "Phát nhìn thẳng vào anh:\“Mà mày vẫn cân nhắc?\”",
      "Trọng muốn nói về nền đất lún. Muốn nói rằng nếu tiếp tục, Phát sẽ mất nhiều hơn. Nhưng sợ Phát sẽ suy sụp vì không có cách xoay sở, và cũng sợ sẽ bị phát hiện về việc anh đang bị điều tra. Anh có toan tính riêng của mình, nên chọn cách im lặng, chỉ nhìn Phát",
      "Phát rót thêm rượu cho mình. Không mời ai.",
    ],
    images: [
      { src: "img/argument.jpg", caption: "Không khí căng thẳng", pos: 1 },
      { src: "img/hop-dong.jpg", caption: "Hợp đồng đầu tư", pos: 2 },
    ],
  },

  {
    id: "s1-6", chapter: 1, type: "story",
    label: "Màn 1.6", title: "Cuộc gọi",
    lines: [
      "Khoảng 22:00. Duy nhìn đồng hồ. Đứng dậy: \"Thôi tao về phòng. Mệt rồi.\"",
      "Trọng giữ lại: \"Ngồi thêm chút. Tao có chuyện muốn nói với mày.\"",
      "Duy khựng lại — Trong đầu anh lập tức hiện lên con số 500 triệu. Duy tránh ánh mắc Trọng và lắc đầu: \"Ngày mai nói cũng được. Ngủ ngon.\"",
      "Bước ra cửa. Trọng nhìn theo. Không gọi lại nữa.",
      "Hai phút sau khi bước ra — điện thoại của Phát rung, màn hình hiện tên Duy. Phát nhìn Trọng rồi đi ra ngoài hành lang nghe khoảng 30 giây. Quay vào, không nói gì.",
    ],
    images: [
      { src: "img/go-out.jpg", caption: "Duy rời đi", pos: 0 },
      { src: "img/phone-call.jpg", caption: "Duy gọi điện", pos: 3 },
    ],
  },

  {
    id: "s1-7", chapter: 1, type: "story",
    label: "Màn 1.7", title: "Hai người",
    lines: [
      "Chỉ còn Phát và Trọng. Phát uống thêm. Không nói gì. Không khí nặng nề.",
      "Một lúc sau Phát hỏi: \"Mày còn gì giấu tao nữa không?\"",
      "Trọng nhìn ly rượu trước mắt: \"Có.\"",
      "Phát chờ. Trọng im lặng, Phát cười khổ: \"Vậy thôi mày muốn làm gì làm.\"",
      "22:20: Phát bước ra. Cửa đóng lại — mạnh hơn bình thường. Không phải đập. Nhưng đủ để nghe thấy.",
      "Trọng một mình trong phòng. Trên bàn — chai rượu còn một nửa. Ly của Trọng còn đầy.",
      "Trọng nhìn ra cửa sổ.",
    ],
    images: [
      { src: "img/alone-room.jpg", caption: "Một mình", pos: 1 },
      { src: "img/wine-half.jpg", caption: "Chai rượu còn một nửa", pos: 0 },
    ],
  },

  {
    id: "s1-8", chapter: 1, type: "story",
    label: "Màn 1.8", title: "Án mạng",
    lines: [
      "Thứ Bảy, 07:12. Phát gọi lễ tân: Trọng không ra ăn sáng, không bắt máy.",
      "Nhân viên mở cửa phòng 312.",
      "Trọng nằm trên sàn. Ly rượu đã hết sạch nằm bên cạnh thi thể. Không có dấu hiệu xâm nhập. Không có vết đánh. Cửa khóa từ bên trong. Cửa sổ hé một khe nhỏ.",
      "Phát gọi cho Duy — ba lần — trước khi gọi 113.",
    ],
    images: [
      { src: "img/body-found.jpg", caption: "Phòng 312 — sáng hôm sau", pos: 1 },
      { src: "img/phone-calls.jpg", caption: "Gọi Duy 3 lần trước 113", pos: 0 },
    ],
  },

  // ── ĐIỂM NGOẶT 1 ──
  {
    id: "q1", chapter: 1, type: "question",
    label: "Điểm ngoặt 1", title: "Cảm giác ban đầu",
    lines: [
      "Duy rời phòng lúc 22:00, né tránh khi Trọng muốn nói chuyện.",
      "Phát ở lại một mình với Trọng đến 22:20, sau khi hai người cãi nhau về dự án.",
      "Trọng được tìm thấy chết trong phòng khóa từ bên trong. Nghi là do ngộ độc.",
      "Phát là người mang rượu đến, và đã gọi cho Duy 3 lần trước khi gọi 113.",
    ],
    images: [{ src: "img/wine-glass-evidence.jpg", caption: "Ly rượu có độc", pos: 1 }],
    question: "Ngay lúc này — khi chỉ có biểu hiện, thời gian và cảm giác ban đầu, bạn nghi ai?",
    options: [
      { text: "Duy", shift: -22 },
      { text: "Phát", shift: 25 },
      { text: "Chưa đủ thông tin", shift: 0 },
    ],
    timer: 20,
    feedback: "Đây là phán đoán cảm tính đầu tiên của bạn. Nó có thể cần thiết. Nhưng cái hiện ra trước mắt chưa chắc là cái đang tồn tại trong bản chất.",
  },

  // ════════════════════════════════════════
  // CHƯƠNG 2 — ĐIỀU TRA
  // LÀN SÓNG 1: Đẩy về Phát
  // ════════════════════════════════════════

  {
    id: "s2-1", chapter: 2, type: "story",
    label: "Màn 2.1", title: "Kết quả pháp y",
    lines: [
      "Nguyên nhân tử vong: ngộ độc Aconitine — chất độc chiết xuất từ cây phụ tử. Liều lượng đủ để giết người trong 2–3 giờ.",
      "Thời điểm uống: ước tính 22:10–22:30.",
      "Độc tìm thấy trong ly uống dở của Trọng — không phải trong chai. Phát và Duy uống từ chai đó cả tối — không ai bị ảnh hưởng.",
      "Kết luận: ai đó đã bỏ độc trực tiếp vào ly của Trọng.Dấu vân tay không đủ rõ để xác định người cuối cùng chạm vào ly, do hơi ẩm và việc ly đã bị dịch chuyển khi phát hiện thi thể.",
    ],
    images: [
      { src: "img/forensic.jpg", caption: "Báo cáo pháp y", pos: 0 },
      { src: "img/poison-diagram.jpg", caption: "Aconitine — chất độc", pos: 1 },
      { src: "img/wine-glass-evidence.jpg", caption: "Vật chứng — ly rượu", pos: 2 },
    ],
  },

  {
    id: "s2-2", chapter: 2, type: "story",
    label: "Màn 2.2", title: "Động cơ tài chính — Phát",
    lines: [
      "Ngân hàng xác nhận: Phát đang nợ 3.4 tỷ, đáo hạn trong 6 tuần.",
      "Lô đất Đà Lạt là dự án hợp tác — Trọng góp 40%, Phát góp 60%. Hợp đồng có điều khoản mua lại: nếu một bên tử vong, bên còn lại được mua phần góp vốn theo giá tại thời điểm ký — thấp hơn giá thị trường hiện tại gần 50%.",
      "Hợp đồng cũng có điều khoản bảo hiểm nhân thọ chéo. Mỗi bên mua bảo hiểm cho bên kia, người thụ hưởng là đối tác, nhằm bảo đảm dòng tiền mua lại phần vốn nếu một bên qua đời.",
      "Nếu Trọng chết trước khi bị khởi tố, Phát có thể nhận tiền bảo hiểm, mua lại phần vốn của Trọng theo giá cũ, rồi bán toàn bộ dự án theo giá thị trường.",
      "Số tiền đó đủ để Phát trả khoản nợ 3.4 tỷ.",
      "Nếu Trọng sống và rút theo giá thị trường → Phát không đủ tiền mua lại → phải thanh lý → không kịp trả nợ.",
      "Phát có biết về điều khoản bảo hiểm này trước khi Trọng chết không — không ai biết.",
      "Cảnh sát cho rằng Phát có động cơ khá rõ ràng",
    ],
    images: [
      { src: "img/debt-document.jpg", caption: "Nợ 3.4 tỷ — đáo hạn 6 tuần", pos: 0 },
      { src: "img/handwritten-list.jpg", caption: "Điều khoản hợp đồng", pos: 1 },
    ],
  },

  {
    id: "s2-3", chapter: 2, type: "story",
    label: "Màn 2.3", title: "Camera hành lang",
    lines: [
      "Camera tầng 3 ghi lại:",
      "22:00 - Duy bước ra khỏi phòng 312, đi về phía thang máy.",
      "22:02 - Duy vào thang máy, đi xuống tầng 1.",
      "22:20 - Phát bước ra khỏi phòng 312.",
      "22:22 - Phát vào thang máy.",
      "Sau 22:22, không có ai tiếp cận phòng 312 qua hành lang chính cho đến sáng hôm sau.",
      "Dữ liệu khóa cho thấy sau khi Phát rời đi, cửa không được mở từ bên ngoài thêm lần nào.",
    ],
    images: [
      { src: "img/timestamp.jpg", caption: "Khung thời gian", pos: 0 },
      { src: "img/hotel-camera.jpg", caption: "Camera xác nhận", pos: 1 },
    ],
  },

  {
    id: "s2-4", chapter: 2, type: "story",
    label: "Màn 2.4", title: "Cuộc gọi bị xóa",
    lines: [
      "Cảnh sát trích xuất dữ liệu điện thoại của Phát.",
      "22:02 - Phát nhận cuộc gọi từ số của Duy.Thời lượng: 30 giây.",
      "Cuộc gọi bị xóa khỏi nhật ký máy của Phát. Điều tra viên hỏi: \“Nội dung cuộc gọi là gì?\”",
      "Phát đáp:\“Tôi không nhớ rõ. Duy gọi lúc tôi đang bực. Tôi ra ngoài nghe, cậu ấy nói gì đó kiểu đừng căng quá. Tôi xóa vì... tôi không muốn bị hiểu lầm.\”",
      "Cảnh sát hỏi Duy:\“Anh có gọi cho Phát lúc 22:02 không?\”",
      "Duy im lặng một lúc.\“Có. Tôi thấy Phát mất bình tĩnh nên gọi bảo nó đừng cãi nữa. Tôi sợ Trọng mệt.\”",
      "\“Tại sao không nói ngay từ đầu?\”",
      "Duy cúi mặt: \“Vì tôi biết cuộc gọi đó khiến tôi trông rất đáng nghi.\”",
      "Sáng hôm sau, Phát gọi Duy ba lần trước khi gọi cảnh sát.",
      "Phát giải thích:",
      "\“Tôi hoảng. Tôi không biết phải làm gì. Duy là người đầu tiên tôi nghĩ tới.\”",
      "Cảnh sát ghi chú:",
      "",
      "Cuộc gọi đáng nghi, nhưng chưa xác minh được nội dung.",
    ],
    images: [
      { src: "img/timestamp.jpg", caption: "Khung thời gian", pos: 0 },
      { src: "img/hotel-camera.jpg", caption: "Camera xác nhận", pos: 1 },
    ],
  },

  // ── ĐIỂM NGOẶT 2 ──
  {
    id: "q2", chapter: 2, type: "question",
    label: "Điểm ngoặt 2", title: "Động cơ có đủ để kết tội?",
    lines: [
      "Phát có động cơ rõ ràng: khoản nợ 3.4 tỷ và điều khoản bảo hiểm chéo.",
      "Phát ở lại phòng một mình với Trọng từ 22:00 đến 22:20.",
      "Thời điểm Trọng uống độc 22:10–22:30 trùng với khoảng Phát còn trong phòng.",
      "Phát xóa cuộc gọi 22:02. Sáng hôm sau, Phát gọi Duy ba lần trước khi gọi cảnh sát. Nội dung cuộc gọi không thể xác minh."
    ],
    images: [{ src: "img/debt-document.jpg", caption: "Động cơ tài chính", pos: 1 }],
    question: "Chuỗi dữ kiện này khiến bạn nghiêng về giả thuyết nào?",
    options: [
      { text: "Phát có động cơ rõ ràng và cơ hội trực tiếp", shift: 22 },
      { text: "Duy và Phát có liên hệ đáng ngờ", shift: 10 },
      { text: "Chưa đủ để kết luận", shift: 0 },
    ],
    timer: 20,
    feedback: "Bạn đã chuyển từ cảm giác sang suy luận. Đó là một bước tiến. Nhưng động cơ chỉ cho thấy một người có lý do. Nó chưa chứng minh người đó đã hành động. Hãy cùng khám phá tiếp",
  },

  // ════════════════════════════════════════
  // LÀN SÓNG 2: Lật sang Duy
  // ════════════════════════════════════════

  {
    id: "s2-5", chapter: 2, type: "story",
    label: "Màn 2.5", title: "Hành tung của Duy",
    lines: [
      "Duy khai rằng sau khi rời phòng 312, anh không về phòng mình ngay.",
      "Anh xuống tầng 1, đi bộ ra cửa hàng tiện lợi phía sau khách sạn để mua nước, đồ ăn và vài lon bia.",
      "Lễ tân xác nhận thấy Duy đi qua sảnh.Camera bên ngoài cửa hàng tiện lợi ghi lại Duy xuất hiện lúc 22:19.",
      "Nhân viên cửa hàng cũng xác nhận:\“Anh đó vào mua nước suối, bánh mì và hai lon bia. Trông hơi thất thần.\”",
      "Dữ kiện này khiến Duy khó có thể quay lại phòng 312 sau 22:00 mà không bị camera hành lang ghi lại. Nhưng nó không loại trừ khả năng Duy đã làm gì đó trước khi rời phòng.",
    ],
    images: [
      { src: "img/hotel-camera.jpg", caption: "Camera CCTV hành lang", pos: 0 },
      { src: "img/timestamp.jpg", caption: "22:02 — Duy rời đi", pos: 1 },
    ],
  },

  {
    id: "s2-6", chapter: 2, type: "story",
    label: "Màn 2.6", title: "Lọ thuốc Duy vứt đi",
    lines: [
      "Camera trước cửa hàng tiện lợi ghi lại:",
      "22:19 - Trước khi bước vào cửa hàng, Duy dừng lại cạnh thùng rác. Anh lấy một vật nhỏ trong túi áo khoác, bỏ vào thùng.",
      "Cảnh sát kiểm tra thùng rác. Họ tìm thấy một lọ phụ tử. Đã mở, gần hết. Có dấu vân tay của Duy.",
      "Khi bị đối chất, Duy nói: \"Đó là lọ cũ của tôi. Tôi mang theo để đối chiếu loại thuốc khi vào tiệm cho Trọng. Nó gần hết từ trước rồi.\"",
      "Điều tra viên hỏi: \"Tại sao không vứt trong phòng khách sạn?\"",
      "Duy đáp:\“Tôi không nghĩ tới. Lúc ra ngoài, thấy thùng rác thì vứt.\”",
      "Câu trả lời nghe đơn giản.",
      "Quá đơn giản để không đáng nghi.",
    ],
    images: [
      { src: "img/deleted-call.jpg", caption: "Cuộc gọi bị xóa", pos: 1 },
      { src: "img/call-log.jpg", caption: "Chỉ cuộc gọi này bị xóa", pos: 0 },
    ],
  },

  {
    id: "s2-7", chapter: 2, type: "story",
    label: "Màn 2.7", title: "Điều tra tiệm thuốc",
    lines: [
      "Cảnh sát điều tra tiệm thuốc đông y ở Đà Lạt.",
      "Chủ tiệm xác nhận: hôm đó có ba người ghé. Hai người mua phụ tử — một người không mua. Người không mua là Duy. Nhưng Duy là khách quen.",
      "Chủ tiệm: \"Cậu đó từng mua ở đây vài lần. Bị đau lưng, mua về ngâm rượu. Tôi có dặn kỹ là không được dùng bừa.\"",
      "Cảnh sát hỏi: \“Hôm đó ai thanh toán?\”",
      "Chủ tiệm đáp: \“Cậu Duy chuyển khoản cho cả hai lọ. Tôi còn lưu số tài khoản vì cậu ấy là khách quen.\”",
      "Số tài khoản khớp với Duy.Điều này có nghĩa: Duy biết chính xác Trọng mua gì. Biết Phát mua gì. Biết loại phụ tử đó nguy hiểm đến mức nào.",
      "Khi bị hỏi, Duy chỉ nói:\“Tôi biết nó nguy hiểm nếu dùng sai. Nhưng tôi cũng đã dặn dò Trọng kỹ rồi mà.\”",
    ],
    images: [
      { src: "img/herb-shop.jpg", caption: "Tiệm thuốc — Duy là khách quen", pos: 0 },
      { src: "img/aconitine.jpg", caption: "Phụ tử — anh ta biết từ trước", pos: 1 },
    ],
  },

  {
    id: "s2-8", chapter: 2, type: "story",
    label: "Màn 2.9", title: "Tài khoản ngân hàng",
    lines: [
      "Ngân hàng xác nhận: trong 8 tháng qua, một công ty con của Trọng đều đặn chuyển tiền vào tài khoản Duy — mỗi lần một ít, cộng dồn 500 triệu.",
      "Cảnh sát nghi ngờ Duy lợi dụng quyền kế toán để tự chuyển tiền công ty vào tài khoản mình.",
      "Duy không giải thích rõ. Anh chỉ nói: \"Đó là chuyện nội bộ công ty. Tôi không tiện nói nhiều. Nhưng tôi đảm bảo đó là tiền hợp pháp.\"",
      "Nhưng khi điều tra viên nhắc đến Trọng, mặt Duy tái đi một chút. Không rõ vì điều gì.",
      "Về khoảng tiền 500 triệu",
      "Hay về cái chết của Trọng",
    ],
    images: [
      { src: "img/atm-receipt.jpg", caption: "Giao dịch đáng ngờ", pos: 0 },
      { src: "img/forensic.jpg", caption: "Sổ sách nội bộ", pos: 1 },
    ],
  },

  // ── ĐIỂM NGOẶT 3 ──
  {
    id: "q3", chapter: 2, type: "question",
    label: "Điểm ngoặt 3", title: "Vật chứng có nói hết sự thật?",
    lines: [
      "Duy là khách quen của tiệm thuốc phụ tử — biết loại thuốc này từ trước.",
      "Duy đề xuất ghé tiệm, thanh toán cho cả hai lọ, nhưng hôm đó không mua.",
      "Duy vứt một lọ phụ tử gần hết vào thùng rác trước cửa hàng tiện lợi — đúng tối hôm đó.",
      "Duy có khoản tiền bất thường gần 500 triệu đồng được chuyển từ công ty con của Trọng vào tài khoản cá nhân trong 8 tháng qua.",
    ],
    images: [{ src: "img/vial-empty.jpg", caption: "Lọ phụ tử gần hết", pos: 1 }],
    question: "Lọ phụ tử Duy vứt đi khiến bạn đánh giá thế nào?",
    options: [
      { text: "Duy rất đáng nghi", shift: -25 },
      { text: "Duy có thể đang nói thật", shift: 10 },
      { text: "Không chắc", shift: 0 },
    ],
    timer: 20,
    feedback: "Một vật chứng không tự mang sẵn ý nghĩa cuối cùng.Nó chỉ có giá trị khi được đặt trong toàn bộ quan hệ: thời gian, hành động, động cơ, điều kiện và các vật chứng khác. Nếu tách vật chứng khỏi hệ thống ấy, ta rất dễ bắt nó nói điều ta muốn nghe.",
  },

  // ════════════════════════════════════════
  // LÀN SÓNG 3: Mở ra cả hai
  // ════════════════════════════════════════

  {
    id: "s3-1", chapter: 3, type: "story",
    label: "Màn 3.1", title: "Ba lọ thuốc",
    lines: [
      "Cảnh sát khám phòng cả ba người.",
      "PHÒNG TRỌNG: Lọ phụ tử mua ở Đà Lạt — không tìm thấy trong phòng. Biến mất hoàn toàn.",
      "PHÒNG PHÁT: Một lọ phụ tử — còn nguyên, chưa có dấu hiệu sử dụng — giấu trong vali dưới lớp quần áo. Phát: \"Tôi mua ở Đà Lạt, để vào vali cho gọn. Tôi không giấu.\"",
      "Điều tra viên: \"Anh biết đây là Aconitine — chất độc gây chết người không?\" Phát: \"Không biết. Tôi chỉ biết là thuốc đông y tốt cho đau nhức — vì Duy là người đề xuất mua, nói là uống được.\"",
      "PHÒNG DUY: Không tìm thấy lọ phụ tử nào khác. Camera cửa hàng tiện lợi ghi lại Duy vứt một lọ vào thùng rác lúc 22:19. Lọ được thu hồi: đã mở, gần hết, có dấu vân tay Duy.",
      "Ba người. Ba lọ thuốc. Lọ của Trọng — biến mất. Lọ của Phát — còn nguyên. Lọ của Duy — gần hết, vứt đi đúng tối hôm đó.",
      "Điều tra viên nhìn bảng vật chứng rất lâu, mọi thứ đang rõ hơn.",
      "Nhưng thật ra, nó chỉ đang rối theo một cách có trật tự hơn.",
    ],
    images: [
      { src: "img/vial-empty.jpg", caption: "Lọ Duy vứt — gần hết", pos: 0 },
      { src: "img/vial-sealed.jpg", caption: "Lọ Phát — còn nguyên", pos: 1 },
      { src: "img/suitcase.jpg", caption: "Giấu trong vali", pos: 2 },
    ],
  },

  {
    id: "s3-2", chapter: 3, type: "story",
    label: "Màn 3.2", title: "Lọ thuốc dưới bụi cây",
    lines: [
      "Hai ngày sau, nhân viên khách sạn phát hiện một lọ thủy tinh nhỏ trong bụi cây phía sau khách sạn. Vị trí nằm ngay dưới cửa sổ phòng 312.",
      "Lọ đã mở. Gần hết. Nhãn giống loại phụ tử bán ở tiệm thuốc Đà Lạt.",
      "Trời đã mưa suốt một ngày sau khi Trọng chết. Dấu vân tay trên lọ bị nhòe, không đủ để xác định.",
      "Cảnh sát kiểm tra lại phòng 312. Cửa sổ có thể mở từ bên trong. Bệ cửa có một vệt ẩm mờ, nhưng không đủ xác định là nước mưa, rượu hay dấu tay.",
      "Camera hành lang không ghi nhận ai vào phòng sau khi Phát rời đi.",
      "Camera phía sau khách sạn không bao quát được bụi cây dưới phòng 312.",
      "Điều tra viên ghi vào hồ sơ: Lọ thuốc dưới bụi cây có thể là lọ của Trọng.",
      "Nhưng không có cách nào xác nhận tuyệt đối. Nếu đó là lọ của Trọng, giả thuyết Trọng tự dùng độc rồi ném lọ qua cửa sổ trở nên rất mạnh. Nếu không phải, vụ án có một khoảng trống lớn hơn nhiều.",
    ],
    images: [{ src: "img/vial-bush.jpg", caption: "Lọ thuốc dưới bụi cây", pos: 1 }],
  },

  {
    id: "s3-3", chapter: 3, type: "story",
    label: "Màn 3.3", title: "Hồ sơ y tế",
    lines: [
      "Cảnh sát truy xuất hồ sơ y tế của Trọng. Kết quả: bảo mật, không được tiết lộ. Bác sĩ điều trị từ chối cung cấp chi tiết khi chưa có đủ thủ tục pháp lý.",
      "Nhưng một điều tra viên tìm thấy lịch hẹn tái khám trong điện thoại của Trọng.Ghi chú cá nhân đi kèm chỉ có một dòng: \“Không còn nhiều thời gian.\”",
      "Trong lịch sử tìm kiếm, có những cụm từ: \"ung thư tụy giai đoạn cuối sống bao lâu\", \"đau ung thư tụy về đêm\", \"bảo hiểm nhân thọ khi người được bảo hiểm chết trước khởi tố\", \"Aconitine và tác hại\".",
      "Điều này đã nói lên căn bệnh nghiêm trọng của Trọng",
      "Nhưng lại mở ra bước ngoặc mới về thuốc độc",
    ],
    images: [
      { src: "img/medical-record.jpg", caption: "Hồ sơ bệnh án — bảo mật", pos: 0 },
      { src: "img/investigation.jpg", caption: "Điều tra tham nhũng", pos: 1 },
      { src: "img/wife-silent.jpg", caption: "Vợ Trọng — chị Lan", pos: 2 },
    ],
  },

  {
    id: "s3-4", chapter: 3, type: "story",
    label: "Màn 3.4", title: "Điều tra tham nhũng",
    lines: [
      "Cơ quan chức năng xác nhận Trọng đang trong diện điều tra tham nhũng.",
      "Việc khởi tố dự kiến có thể xảy ra trong vài tuần. Nếu bị khởi tố, tài sản của Trọng sẽ bị phong tỏa. Bao gồm cổ phần của anh trong dự án Đà Lạt.",
      "Điều đó đồng nghĩa: Phát không thể sử dụng dự án để xoay khoản nợ 3.4 tỷ. Và Duy, với tư cách kế toán nội bộ, có nguy cơ bị kéo vào điều tra dòng tiền.",
      "Trong hồ sơ kế toán, cảnh sát tìm thấy Trọng đã chuyển khoảng vào lại tài khoản công ty số tiền 505 triệu 650 nghìn. Khớp từng con số với số tiền chuyển vào tài khoản Duy.",
      "Điều tra viên hỏi Duy: \“Anh có biết Trọng đã biết chuyện tiền bạc không?\”",
      "Duy sững người: \“Không.”",
      "\“Anh ấy chưa từng hỏi anh?\”",
      "Duy lắc đầu. Mắt đỏ hơn: \“Anh ấy chỉ bảo tôi dạo này làm việc cẩn thận hơn.\”",
      "Lúc đó, Duy tưởng Trọng đang cảnh cáo.",
      "Bây giờ, anh không còn chắc nữa."
    ],
    images: [
      { src: "img/medical-record.jpg", caption: "Hồ sơ bệnh án — bảo mật", pos: 0 },
      { src: "img/investigation.jpg", caption: "Điều tra tham nhũng", pos: 1 },
      { src: "img/wife-silent.jpg", caption: "Vợ Trọng — chị Lan", pos: 2 },
    ],
  },

  {
    id: "s3-5", chapter: 3, type: "story",
    label: "Màn 3.5", title: "Chị Lan",
    lines: [
      "Vợ Trọng, chị Lan, được mời đến làm việc.",
      "Chị mặc áo tối màu, tóc buộc gọn.Suốt buổi, chị trả lời rất ít.",
      "Điều tra viên hỏi:\“Chị có biết anh Trọng đang bệnh không?\” - Chị im lặng.",
      "\“Chị có biết anh ấy đang bị điều tra không?\” - Chị vẫn im lặng.",
      "\“Trước chuyến đi, anh ấy có nói gì đặc biệt không?\” - Lúc này, chị mới ngẩng lên.\”",
      "\“Không.”",
      "\“Anh ấy nói anh ấy phải đi xa một thời gian.\”",
      "\“Đi xa là đi đâu?\”",
      "Chị nhìn xuống hai bàn tay mình: \“Tôi không hỏi\”",
      "\“Vì sao?\” - \"“Vì có những câu trả lời, nếu hỏi ra, mình sẽ phải ngăn lại.\”",
      "Sau đó chị không nói thêm gì nữa.",
    ],
    images: [
      { src: "img/medical-record.jpg", caption: "Hồ sơ bệnh án — bảo mật", pos: 0 },
      { src: "img/investigation.jpg", caption: "Điều tra tham nhũng", pos: 1 },
      { src: "img/wife-silent.jpg", caption: "Vợ Trọng — chị Lan", pos: 2 },
    ],
  },

  // ── ĐIỂM NGOẶT 4 ──
  {
    id: "q4", chapter: 2, type: "question",
    label: "Điểm ngoặt 4", title: "Khả năng nào đang mạnh nhất?",
    lines: [
      "Lọ của Trọng — biến mất.",
      "Lọ của Phát — còn nguyên trong vali.",
      "Lọ của Duy — đã mở, gần hết, bị vứt lúc 22:19.",
      "Một lọ phụ tử khác được tìm thấy dưới bụi cây ngay dưới cửa sổ phòng Trọng.",
      "Trọng bệnh nặng, sắp bị điều tra và có nguy cơ phong tỏa tài sản.",
      "Biết rõ về khoảng tiền của Duy và rủi ro về lô đất của Phát"
    ],
    images: [],
    question: "Với hệ thống vật chứng hiện tại, giả thuyết nào có cơ sở nhất?",
    options: [
      { text: "Duy đã dùng lọ của mình", shift: -15 },
      { text: "Phát đã dùng lọ của Trọng", shift: 15 },
      { text: "Trọng tự dùng rồi vứt lọ", shift: 0 },
      { text: "Chưa thể xác định", shift: 0 },
    ],
    timer: 20,
    feedback: "Bạn đang đứng trước nhiều khả năng. Để trở thành kết luận, một khả năng phải được kiểm chứng và phải giải thích được các dữ kiện tốt hơn những khả năng còn lại.",
  },

  {
    id: "s3-6", chapter: 3, type: "story",
    label: "Màn 3.6", title: "Đối chiếu giả thuyết",
    lines: [
      "Cảnh sát dựng lại ba giả thuyết chính.",
      "Giả thuyết Duy: Duy có động cơ vì khoản tiền 500 triệu. Duy biết rõ phụ tử. Duy có lọ thuốc đã mở. Nhưng Duy rời phòng lúc 22:00. Thời điểm Trọng uống độc ước tính 22:10-22:30. Camera cho thấy Duy đã vứt lọ thuốc ở bãi rác trước cửa hàng tiện lợi lúc 22:19. Nhưng anh hoàn toàn có thể bỏ độc vào ly từ trước và Trọng chỉ uống sau đó.",
      "Giả thuyết Phát: Phát có động cơ tài chính mạnh. Phát ở lại một mình với Trọng đến 22:20. Phát có cơ hội trực tiếp. Nhưng lọ thuốc của Phát còn nguyên. Nhưng vẫn có thể đặt nghi vấn về việc Phát dùng lọ của Trọng, hoặc dùng lọ của mình sau đó lấy đi lọ của Trọng.",
      "Giả thuyết thông đồng: Duy gọi Phát lúc 22:02. Phát gọi Duy ba lần trước khi gọi cảnh sát. Nội dung cuộc gọi không xác minh được. Nhưng nếu hai người có thông đồng, họ hoàn toàn có thể đã lên kế hoạch trước để một người bỏ độc vào ly, người kia vứt lọ thuốc đi sau đó. Và cũng như thống nhất lời khai trước cảnh sát",
      "Giả thuyết Trọng tự dùng độc. Trọng có bệnh nặng và sắp bị khởi tố. Lọ của Trọng biến mất và xuất hiện ngoài cửa sổ và không ai vào sau khi Phát rời đi. Nhưng giả thuyết này không giải thích được động cơ của Trọng, cũng như việc Phát và Duy có những hành động đáng ngờ sau đó.",
      "Trên bìa chỉ ghi một dòng",
      "\"Chưa đủ căn cứ khởi tố nghi phạm về hành vi giết người\"",
    ],
    images: [
      { src: "img/medical-record.jpg", caption: "Hồ sơ bệnh án — bảo mật", pos: 0 },
      { src: "img/investigation.jpg", caption: "Điều tra tham nhũng", pos: 1 },
      { src: "img/wife-silent.jpg", caption: "Vợ Trọng — chị Lan", pos: 2 },
    ],
  },

  // ── ĐIỂM NGOẶT 5 — Phán quyết tạm thời ──
  {
    id: "q5", chapter: 2, type: "question",
    label: "Điểm ngoặt 5", title: "Bạn có dám dừng lại?",
    lines: [
      "Duy đáng nghi vì tiền, phụ tử và lọ thuốc đã vứt.",
      "Phát đáng nghi vì nợ, bảo hiểm và thời gian ở riêng với Trọng.",
      "Cả hai đáng nghi vì cuộc gọi 22:02 và ba cuộc gọi sáng hôm sau.",
      "Trọng có bệnh nặng, sắp bị khởi tố, biết đất có vấn đề, biết chuyện tiền của Duy và vấn đề của Phát.",
      "Lọ Trọng biến mất, lọ Phát còn nguyên, lọ Duy gần hết và vứt đi đúng tối hôm đó, lọ khác xuất hiện dưới bụi cây ngay dưới cửa sổ phòng Trọng.",
      "Không ai khác vào phòng sau khi Phát rời đi.",
    ],
    images: [],
    question: "Bạn đã có nhiều thông tin nhất từ đầu đến giờ. Nhưng liệu như vậy đã đủ để kết luận chưa? Phán quyết tạm thời của bạn là gì?",
    options: [
      { text: "Duy", shift: -15 },
      { text: "Phát", shift: 15 },
      { text: "Cả hai thông đồng", shift: 0 },
      { text: "Chưa đủ dữ kiện để kết tội ai", shift: 0 },
    ],
    timer: 20,
    feedback: "Bạn đã chọn một kết luận. Kết luận của bạn hoàn toàn hợp lý và có căn cứ, nhưng liệu hợp lý có là chân lý của sự thật không?",
  },

  // ════════════════════════════════════════
  // CHƯƠNG 3 — PHẢN TƯ NHẬN THỨC
  // ════════════════════════════════════════

  {
    id: "break",
    chapter: 4,
    type: "break",
    breakLines: [
      "Bạn đã đổi ý {X} lần.",
      "Nhưng sự thật không đổi trong từng ấy lần.",
      "Chỉ có cách bạn nhìn sự thật thay đổi.",
      "Ban đầu, bạn nhìn thấy thái độ.",
      "Duy im lặng. Phát nóng nảy. Trọng giấu điều gì đó.",
      "Rồi bạn nhìn thấy động cơ.",
      "Nợ tiền. Biển thủ. Bảo hiểm. Phụ tử.",
      "Sau đó, bạn nhìn thấy vật chứng.",
      "Ly rượu. Camera. Cuộc gọi bị xóa. Những lọ thuốc không khớp nhau.",
      "Mỗi tầng dữ kiện làm bạn tưởng mình đã đến gần sự thật hơn.",
      "Nhưng đến gần sự thật không giống với chạm tới sự thật.",
      "Một cảm giác mạnh không phải chân lý.",
      "Một suy luận hợp lý chưa phải chân lý.",
      "Một khả năng đáng sợ cũng chưa phải chân lý.",
      "Chân lý không phụ thuộc vào việc bạn tin điều gì.",
      "Nó chỉ phụ thuộc vào việc điều gì đã thực sự xảy ra.",
      "Và nhận thức của bạn chỉ đúng khi nó chịu được sự kiểm tra của hiện thực.",
      "Bây giờ, hãy nhìn lại phán quyết của mình.",
    ],
  },

  {
    id: "final",
    chapter: 4,
    type: "final",
    finalLines: [
      "Đây là phán quyết cuối của bạn.",
      "Không có đồng hồ đếm ngược.",
      "Không có áp lực phải chọn thật nhanh.",
      "Lần này, đừng chọn điều khiến bạn thấy hợp lý nhất.",
      "Hãy chọn điều mà dữ kiện đã được kiểm chứng thật sự cho phép bạn kết luận.",
    ],
    question: "Với những gì đã được kiểm chứng, phán quyết của bạn là gì?",
    options: [
      { text: "Duy có tội", ending: "A" },
      { text: "Phát có tội", ending: "B" },
      { text: "Cả hai thông đồng", ending: "C" },
      { text: "Chưa đủ dữ kiện để kết tội ai", ending: "D" },
    ],
  },
];