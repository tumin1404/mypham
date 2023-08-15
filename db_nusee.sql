create database db_nusee
go
use db_nusee
go
--------------------------------------1
create table distributor(
distributor_id int identity(1,1) primary key,
distributor_name nvarchar(500) not null,
distributor_address nvarchar(500),
distributor_phone varchar(10),
distributor_mail varchar(255),
distributor_note ntext,
distributor_date_created smalldatetime NOT NULL DEFAULT getdate()
)
go
insert into distributor(distributor_name,distributor_address,distributor_phone,distributor_mail,distributor_note) values
(N'Nhà cung cấp Hoàng Việc',N'Trung Hoà-Yên Mỹ-Hưng Yên','0368259165','duongvuhoangviec@gmail.com',N'Nhà cung cấp vjp 1'),
(N'Nhà cung cấp Nguyễn Thắng',N'Thị Trấn Yên Mỹ-Yên Mỹ-Hưng Yên','0353927164','nguyentrananhthang@gmail.com',N'Nhà cung cấp vjp 2'),
(N'Nhà cung cấp Đăng Thắng',N'Liêu Xá-Yên Mỹ-Hưng Yên','0334821905','vudangthang@gmail.com',N'Nhà cung cấp vjp 3'),
(N'Nhà cung cấp Đặng Đạt',N'Trung Hoà-Yên Mỹ-Hưng Yên','0375017492','dangtuandat@gmail.com',N'Nhà cung cấp vjp 4'),
(N'Nhà cung cấp Thanh Toàn',N'Vĩnh Khúc-Văn Giang-Hưng Yên','0341074925','lethanhtoan@gmail.com',N'Nhà cung cấp vjp 5');
--------------------------------------2
create table category(
cate_id INT IDENTITY(1,1) PRIMARY KEY,
cate_name nvarchar(500) not null,
cate_img ntext,
cate_note nvarchar(500),
cate_date_created smalldatetime NOT NULL DEFAULT getdate()
)
go
insert into category(cate_name,cate_img,cate_note) values
(N'Mỹ phẩm loại 1','img1.png',N'ảnh mẫu loại sản phẩm 1'),
(N'Mỹ phẩm loại 2','img2.png',N'ảnh mẫu loại sản phẩm 2'),
(N'Mỹ phẩm loại 3','img3.png',N'ảnh mẫu loại sản phẩm 3'),
(N'Mỹ phẩm loại 4','img4.png',N'ảnh mẫu loại sản phẩm 4'),
(N'Mỹ phẩm loại 5','img5.png',N'ảnh mẫu loại sản phẩm 5');
-----

--------------------------------------3
create table product(
product_id int identity(1,1) primary key,
product_cate_id int foreign key REFERENCES category(cate_id),
product_distributor_id int foreign key REFERENCES distributor(distributor_id),
product_name nvarchar(800) not null,
product_img ntext,
product_price float,
product_sale float,
product_quantity int,
product_unit nvarchar(200),
product_note nvarchar(max),
product_date_created smalldatetime NOT NULL DEFAULT getdate()
)
go
insert into product(product_cate_id,product_distributor_id,product_name,product_img,product_price,product_sale,product_quantity,product_unit,product_note) values
(1, 1, N'Bộ 4 Mặt nạ ngủ dưỡng ẩm LANEIGE Cica Sleeping Mask 10ML x 4', N'Bộ 4 Mặt nạ ngủ dưỡng ẩm LANEIGE Cica Sleeping Mask 10ML x 4.jpg', 549000, 500000, 23, N'Hộp', N'ghi chú sản phẩm 1'),
(2, 2, N'Bộ 5 Kem Dưỡng Ẩm Dành Cho Da Dầu Và Da Hỗn Hợp Laneige Water Bank Blue HA Cream Oily 10mlx5', N'Bộ 5 Kem Dưỡng Ẩm Dành Cho Da Dầu Và Da Hỗn Hợp Laneige Water Bank Blue HA Cream Oily 10mlx5.jpg', 455000, 420000, 33, N'Hộp', N'ghi chú sản phẩm 2'),
(3, 3, N'Bộ dầu gội đầu, gội xả phục hồi tóc chiết xuất nấm Truffle Weilaiya', N'Bộ dầu gội đầu, gội xả phục hồi tóc chiết xuất nấm Truffle Weilaiya.jpg', 399000, 355000, 45, N'Hộp', N'ghi chú sản phẩm 3'),
(5, 5, N'Cặp Dầu Gội Và Dầu Xả Tigi Bed Head Resurrection Shampoo & Conditioner 750ml Đỏ', N'Cặp Dầu Gội Và Dầu Xả Tigi Bed Head Resurrection Shampoo & Conditioner 750ml Đỏ.jpg', 777000, 750000, 77, N'Hộp', N'ghi chú sản phẩm 4'),
(3, 3, N'COMBO 3 SẢN PHẨM TẶNG KEM BÁCH THẢO 30G', N'COMBO 3 SẢN PHẨM TẶNG KEM BÁCH THẢO 30G.png', 654000, 599000, 36, N'Hộp', N'ghi chú sản phẩm 5'),
(1, 1, N'COMBO 3 SẢN PHẨM TẶNG KEM CHỐNG NẮNG', N'COMBO 3 SẢN PHẨM TẶNG KEM CHỐNG NẮNG.png', 999000, 255000, 22, N'Hộp', NULL),
(1, 1, N'COMBO HẠT LỰU 120ML VS HÀN BÌ', N'COMBO HẠT LỰU 120ML VS HÀN BÌ.jpeg', 999000, 555000, 3, N'Hộp', NULL),
(1, 1, N'COMBO HẠT LỰU 120ML VS HƯỚNG DƯƠNG 30ML', N'COMBO HẠT LỰU 120ML VS HƯỚNG DƯƠNG 30ML.png', 999000, 555000, 5, N'Hộp', NULL),
(1, 1, N'COMBO KEM CHỐNG NẮNG VS KEM BÁCH THẢO 30G', N'COMBO KEM CHỐNG NẮNG VS KEM BÁCH THẢO 30G.png', 999000, 555000, 2, N'Hộp', NULL),
(1, 1, N'COMBO NHA ĐAM 120ML VS HÚT SẮC 30G', N'COMBO NHA ĐAM 120ML VS HÚT SẮC 30G.png', 999000, 555000, 3, N'Hộp', NULL),
(2, 1, N'COMBO TẶNG NGAY SỮA RỬA MẶT NUSEE ĐA NĂNG 120G', N'COMBO TẶNG NGAY SỮA RỬA MẶT NUSEE ĐA NĂNG 120G.png', 999000, 555000, 9, N'Hộp', NULL),
(3, 1, N'COMBO TẶNG TINH CHẤT HẠT LỰU 120ML', N'COMBO TẶNG TINH CHẤT HẠT LỰU 120ML.png', 999000, 555000, 2, N'Hộp', NULL),
(2, 1, N'COMBO THỦY PHÂN VS HÚT SẮC 30G', N'COMBO THỦY PHÂN VS HÚT SẮC 30G.jpeg', 999000, 555000, 4, N'Hộp', NULL),
(4, 1, N'DELEVENTH Caffeine Tinh chất mặt Dưỡng ẩm Giảm hắc tố Giảm nếp nhăn Làm đều màu da', N'DELEVENTH Caffeine Tinh chất mặt Dưỡng ẩm Giảm hắc tố Giảm nếp nhăn Làm đều màu da.jpg', 999000, 555000, 6, N'Hộp', NULL),
(1, 1, N'DELEVENTH Serum Lột mụn đầu đen Làm sạch lỗ chân lông Blackhead Remover', N'DELEVENTH Serum Lột mụn đầu đen Làm sạch lỗ chân lông Blackhead Remover.jpg', 999000, 555000, 2, N'Hộp', NULL),
(3, 1, N'FAIR KING Retinol Serum Chứa Retinol Collagen Chống Lão Hóa Xóa Đốm Nâu Nếp Nhăn Dưỡng Ẩm Sâu Làm Trắng Và Săn Chắc Da Dưỡng Chất Giúp Giảm Thâm Nám, Nếp Nhăn Và Làm Đều Màu Da 30ml', N'FAIR KING Retinol Serum Chứa Retinol Collagen Chống Lão Hóa Xóa Đốm Nâu Nếp Nhăn Dưỡng Ẩm Sâu Làm Trắng Và Săn Chắc Da Dưỡng Chất Giúp Giảm Thâm Nám, Nếp Nhăn Và Làm Đều Màu Da 30ml.jpg', 999000, 269000, 7, N'Hộp', NULL),
(2, 1, N'FOCALLURE Son kem nhanh khô chống thấm nước giữ màu tốt', N'FOCALLURE Son kem nhanh khô chống thấm nước giữ màu tốt.jpg', 999000, 555000, 6, N'Hộp', NULL),
(1, 1, N'KEM BÁCH THẢO TRỊ NÁM 30G NUSEE', N'KEM BÁCH THẢO TRỊ NÁM 30G NUSEE.png', 999000, 555000, 4, N'Hộp', NULL),
(3, 1, N'KEM CHỐNG NẮNG NUSEE', N'KEM CHỐNG NẮNG NUSEE.jpeg', 999000, 199000, 3, N'Hộp', NULL),
(1, 1, N'KEM CHỐNG NẮNG VS SỮA RỬA MẶT', N'KEM CHỐNG NẮNG VS SỮA RỬA MẶT.png', 999000, 555000, 8, N'Hộp', NULL),
(3, 1, N'Kem Dưỡng Ẩm, Phục Hồi, Giảm Khô, Giảm Ngứa Cho Da Nhạy Cảm Nutri Balm Stanhome 200ml', N'Kem Dưỡng Ẩm, Phục Hồi, Giảm Khô, Giảm Ngứa Cho Da Nhạy Cảm Nutri Balm Stanhome 200ml.jpg', 999000, 555000, 6, N'Hộp', NULL),
(2, 1, N'Kem dưỡng Collagen chống lão hóa dưỡng ẩm Estee Lauder Revitalizing Supreme+ Youth Power Soft Creme Moisturizer - Moisturizer 30ml', N'Kem dưỡng Collagen chống lão hóa dưỡng ẩm Estee Lauder Revitalizing Supreme+ Youth Power Soft Creme Moisturizer - Moisturizer 30ml.jpg', 999000, 555000, 7, N'Hộp', NULL),
(1, 1, N'Kem dưỡng da ban đêm Estee Lauder Revitalizing Supreme+ Night Intensive Restorative Crème - Moisturizer 50ml', N'Kem dưỡng da ban đêm Estee Lauder Revitalizing Supreme+ Night Intensive Restorative Crème - Moisturizer 50ml.jpg', 999000, 555000, 4, N'Hộp', NULL),
(2, 1, N'Kem Dưỡng Da Và Mờ Nám Meduzi', N'Kem Dưỡng Da Và Mờ Nám Meduzi.jpg', 999000, 555000, 9, N'Hộp', NULL),
(1, 1, N'Kem dưỡng trắng Collagen và chống lão hóa Estee Lauder Revitalizing Supreme+ Bright Power Soft Crème - Moisturizer 75ml', N'Kem dưỡng trắng Collagen và chống lão hóa Estee Lauder Revitalizing Supreme+ Bright Power Soft Crème - Moisturizer 75ml.jpg', 999000, 555000, 4, N'Hộp', NULL),
(3, 1, N'Kem dưỡng trắng da mặt chống lão hóa White Doctors Skin Lightening 40ml', N'Kem dưỡng trắng da mặt chống lão hóa White Doctors Skin Lightening 40ml.jpg', 999000, 555000, 3, N'Hộp', NULL),
(1, 1, N'KEM HOA HỒNG 30G NUSEE', N'KEM HOA HỒNG 30G NUSEE.png', 999000, 555000, 45, N'Hộp', NULL),
(4, 1, N'KEM HÚT SẮC 30G NUSEE', N'KEM HÚT SẮC 30G NUSEE.png', 999000, 555000, 6, N'Hộp', NULL),
(5, 1, N'Mặt Nạ Ngủ Dưỡng Da Cấp Ẩm Nhân Sâm Hàn Quốc Làm Trắng Chống Lão Hóa, Giảm Thâm Mụn, Se Khit Lỗ Chân Lông – CASSIA', N'Mặt Nạ Ngủ Dưỡng Da Cấp Ẩm Nhân Sâm Hàn Quốc Làm Trắng Chống Lão Hóa, Giảm Thâm Mụn, Se Khit Lỗ Chân Lông – CASSIA.jpg', 999000, 555000, 4, N'Hộp', NULL),
(2, 1, N'Miếng lột mụn mũi 3 bước Bioaqua - Đẩy mụn - Lột mụn - Se nhỏ chân lông', N'Miếng lột mụn mũi 3 bước Bioaqua - Đẩy mụn - Lột mụn - Se nhỏ chân lông.jpg', 999000, 555000, 3, N'Hộp', NULL),
(1, 1, N'MỘC MỸ NHÂN 30G TẶNG BỘ NHỎ 10G', N'MỘC MỸ NHÂN 30G TẶNG BỘ NHỎ 10G.jpeg', 999000, 555000, 7, N'Hộp', NULL),
(2, 1, N'Nước dưỡng Bio-essence Bio-Gold ngăn ngừa dấu hiệu lão hóa chiết xuất vàng sinh học 24K 30ml', N'Nước dưỡng Bio-essence Bio-Gold ngăn ngừa dấu hiệu lão hóa chiết xuất vàng sinh học 24K 30ml.jpg', 999000, 555000, 8, N'Hộp', NULL),
(3, 1, N'SERUM PRETASA RETINOL 0,5 EXTRA', N'SERUM PRETASA RETINOL 0,5 EXTRA.jpg', 999000, 555000, 9, N'Hộp', NULL),
(1, 1, N'Serum phục hồi, chống lão hóa Estee Lauder Advanced Night Repair 75ml', N'Serum phục hồi, chống lão hóa Estee Lauder Advanced Night Repair 75ml.png', 999000, 555000, 4, N'Hộp', NULL),
(3, 1, N'Son dưỡng môi hữu cơ BADGER Tea Tree & Lemon Balm Herbal Lip Balm USDA Organic - 4.2g', N'Son dưỡng môi hữu cơ BADGER Tea Tree & Lemon Balm Herbal Lip Balm USDA Organic - 4.2g.jpg', 999000, 555000, 6, N'Hộp', NULL),
(5, 1, N'Son nhung lì dưỡng ẩm hoàng kim Losec Summa Velvet Lipstick (màu Màu Deep Red)', N'Son nhung lì dưỡng ẩm hoàng kim Losec Summa Velvet Lipstick (màu Màu Deep Red).jpg', 999000, 555000, 5, N'Hộp', NULL),
(2, 1, N'Son Thỏi Mịn Lì 3CE - [MATTE] 3CE MOOD RECIPE LIP COLOR', N'Son Thỏi Mịn Lì 3CE - [MATTE] 3CE MOOD RECIPE LIP COLOR.jpg', 999000, 555000, 1, N'Hộp', NULL),
(2, 2, N'TẨY DA CHẾT ROSETTE SỐ 1 NHẬT BẢN MẪU MỚI 2018 ROSETTE', N'TẨY DA CHẾT ROSETTE SỐ 1 NHẬT BẢN MẪU MỚI 2018 ROSETTE.jpg', 999000, 555000, 8, N'Hộp', NULl),
(1, 2, N'Tẩy tế bào chết Huxley Scrub Mask Sweet Therapy 30g 120g dịu nhẹ cho da mụn da dầu nhạy cảm', N'Tẩy tế bào chết Huxley Scrub Mask Sweet Therapy 30g 120g dịu nhẹ cho da mụn da dầu nhạy cảm.jpg', 999000, 555000, 5, N'Hộp', NULL),
(4, 2, N'Tinh chất cô đặc vùng mắt Estee Lauder Advanced Night Repair Eye Concentrate Matrix Synchronized Multi-Recovery Complex 15ml', N'Tinh chất cô đặc vùng mắt Estee Lauder Advanced Night Repair Eye Concentrate Matrix Synchronized Multi-Recovery Complex 15ml.jpg', 999000, 555000, 6, N'Hộp', NULL),
(5, 3, N'TINH CHẤT CHỐNG NẮNG DƯỠNG TRẮNG &KIỂM SOÁT DẦU SPF50+ PA+++ 30ml', N'TINH CHẤT CHỐNG NẮNG DƯỠNG TRẮNG &KIỂM SOÁT DẦU SPF50+ PA+++ 30ml.png', 999000, 555000, 45, N'Hộp', NULL),
(3, 1, N'Tinh chất dưỡng sáng 2 ống Eucerin Duo Ampoules (2x15ml)', N'Tinh chất dưỡng sáng 2 ống Eucerin Duo Ampoules (2x15ml).jpg', 999000, 555000, 3, N'Hộp', NULL),
(2, 1, N'Tinh chất dưỡng trắng hồng và khắc phục sạm nám Estee Lauder Perfectionist Pro Rapid Brightening Treatment with Ferment3 + Vitamin C 50ml', N'Tinh chất dưỡng trắng hồng và khắc phục sạm nám Estee Lauder Perfectionist Pro Rapid Brightening Treatment with Ferment3 + Vitamin C 50ml.png', 999000, 555000, 5, N'Hộp', NULL),
(1, 1, N'Tinh Chất Giảm mụn The Ordinary Salicylic Acid 2% Solution', N'Tinh Chất Giảm mụn The Ordinary Salicylic Acid 2 Solution.jpg', 999000, 555000, 6, N'Hộp', NULL),
(3, 1, N'TINH CHẤT HẠT LỰU 120ML', N'TINH CHẤT HẠT LỰU 120ML.png', 999000, 555000, 4, N'Hộp', NULL),
(2, 1, N'Tinh Chất Làm Sáng Da Klairs Freshly Juiced Vitamin Drop 35ml', N'Tinh Chất Làm Sáng Da Klairs Freshly Juiced Vitamin Drop 35ml.jpg', 999000, 555000, 5, N'Hộp', NULL),
(1, 3, N'Tinh Chất Ốc Sên Phục Hồi Cải Thiện Thâm Sẹo Some By Mi Snail Truecica Miracle Repair Serum 50ml', N'Tinh Chất Ốc Sên Phục Hồi Cải Thiện Thâm Sẹo Some By Mi Snail Truecica Miracle Repair Serum 50ml.jpg', 999000, 555000, 6, N'Hộp', NULL),
(4, 2, N'Tinh chất phục hồi chống lão hóa Estee Lauder Advanced Night Repair Synchronized Multi-Recovery 20ml', N'Tinh chất phục hồi chống lão hóa Estee Lauder Advanced Night Repair Synchronized Multi-Recovery 20ml.png', 999000, 555000, 2, N'Hộp', NULl),
(5, 3, N'Tinh chất se khít lỗ chân lông Estee Lauder Idealist Pore Minizing Skin Refinish 50ml', N'Tinh chất se khít lỗ chân lông Estee Lauder Idealist Pore Minizing Skin Refinish 50ml.jpg', 999000, 555000, 6, N'Hộp', NULL),
(3, 2, N'TINH CHẤT TRẮNG DA HÀN BÌ ĐÊM NUSEE', N'TINH CHẤT TRẮNG DA HÀN BÌ ĐÊM NUSEE.jpeg', 999000, 555000, 1, N'Hộp', NULL),
(2, 1, N'TINH DÂU HOA HƯỚNG DƯƠNG NUSEE', N'TINH DÂU HOA HƯỚNG DƯƠNG NUSEE.png', 999000, 555000, 3, N'Hộp', NULL),
(1, 1, N'VIBRANT GLAMOUR Serum Chống Lão Hóa Tái Tạo Da Chống Nếp Nhăn Mờ Thâm Da Anti-aing Serum Anti-Wrinkle 30ml', N'VIBRANT GLAMOUR Serum Chống Lão Hóa Tái Tạo Da Chống Nếp Nhăn Mờ Thâm Da Anti-aing Serum Anti-Wrinkle 30ml.jpg', 999000, 555000, 45, N'Hộp', NULL);


--------------------------------------
create table customer(
customer_id int identity(1,1) primary key,
customer_name nvarchar(200) not null,
customer_address ntext not null,
customer_phone varchar(10) not null,
customer_mail varchar(100),
customer_note ntext,
customer_date_created smalldatetime NOT NULL DEFAULT getdate()
)

insert into customer(customer_name,customer_address,customer_phone,customer_mail,customer_note) values
(N'Trần Ngọc Tú',N'Trung Hưng-Yên Mỹ-Hưng Yên','0372082758','trantu143444@gmail.com',N'Khách hàng 1'),
(N'Phan Hải An',N'Trung Hoà-Yên Mỹ-Hưng Yên','0859721391','phanan1@gmail.com',N'Khách hàng 2'),
(N'Nguyễn Thị Dung',N'Tân Lập-Yên Mỹ-Hưng Yên','0981736310','nguyendung2@gmail.com',N'Khách hàng 3'),
(N'Nguyễn Thị Duyên',N'Trung Hoà-Yên Mỹ-Hưng Yên','0968863733','nguyenduyen3@gmail.com',N'Khách hàng 4'),
(N'Lưu Hữu Hải',N'Liêu Xá-Yên Mỹ-Hưng Yên','0386559874','luuhai4@gmail.com',N'Khách hàng 5'),
(N'Vũ Như Tuấn Hùng',N'Liêu Xá-Yên Mỹ-Hưng Yên','0399981904','vuhung5@gmail.com',N'Khách hàng 6'),
(N'Vũ Hưu Huy',N'Liêu Xá-Yên Mỹ-Hưng Yên','0328875121','vuhuy6@gmail.com',N'Khách hàng 7'),
(N'Đỗ Trọng Nghĩa',N'TT.Yên Mỹ-Yên Mỹ-Hưng Yên','0865632914','trongnghia7@gmail.com',N'Khách hàng 8');
--------------------------------------
create table staff(
staff_id int identity(1,1) primary key,
staff_name nvarchar(200) not null,
staff_dateofbirth date not null,
staff_address nvarchar(400) not null,
staff_phone varchar(10) not null,
staff_mail varchar(100),
staff_sex nvarchar(10) not null,
staff_levels nvarchar(100) not null,
staff_note ntext,
staff_date_created smalldatetime NOT NULL DEFAULT getdate()
)

insert into staff(staff_name,staff_dateofbirth,staff_address,staff_phone,staff_mail,staff_sex,staff_levels,staff_note) values
(N'Lưu Thị Bích','2001/08/06',N'Liêu Xá-Yên Mỹ-Hưng Yên','0369005706','luubich1@gmail.com',N'Nữ',N'Nhân Viên bán hàng',N'Nhân viên 1'),
(N'Lưu Thị Hoa','2001/03/11',N'Liêu Xá-Yên Mỹ-Hưng Yên','0372726342','luuhoa2@gmail.com',N'Nữ',N'Nhân Viên bán hàng',N'Nhân viên 2'),
(N'Đinh Tiến Hợp','2001/06/24',N'Trung Hoà-Yên Mỹ-Hưng Yên','0353804452','dinhhop423@gmail.com',N'Nam',N'Nhân Viên bán hàng',N'Nhân viên 3'),
(N'Luyện Ngọc Hùng','2001/07/19',N'Ngọc Long-Yên Mỹ-Hưng Yên','0395946529','luyenhung439078@gmail.com',N'Nam',N'Nhân Viên bán hàng',N'Nhân viên 4'),
(N'Trần Thị Thanh Lan','2001/11/26',N'Liêu Xá-Yên Mỹ-Hưng Yên','0962253610','tranlan4567@gmail.com',N'Nữ',N'Nhân Viên bán hàng',N'Nhân viên 5'),
(N'Đặng Tuyết Mai','2001/05/15',N'Liêu Xá-Yên Mỹ-Hưng Yên','0979674621','dangmai453@gmail.com',N'Nữ',N'Nhân Viên bán hàng',N'Nhân viên 6'),
(N'Nguyễn Thị Kim Oanh','2001/09/06',N'TT.Yên Mỹ-Yên Mỹ-Hưng Yên','0823865515','nguyenoanh84@gmail.com',N'Nữ',N'Kế toán',N'Nhân viên 7'),
(N'Lê Thị Oánh','2001/12/18',N'Trung Hoà-Yên Mỹ-Hưng Yên','0964893127','leoanh66@gmail.com',N'Nữ',N'Nhân Viên bán hàng',N'Nhân viên 8'),
(N'Lưu Thị Thùy','2001/07/22',N'Liêu Xá-Yên Mỹ-Hưng Yên','0336962603','luuthuy@gmail.com',N'Nữ',N'Nhân Viên bán hàng',N'Nhân viên 9');
--------------------------------------
create table bill_imports(
bill_imports_id int identity(1,1) primary key,
bill_imports_distributor_id int foreign key REFERENCES distributor(distributor_id),
bill_imports_staff_id int foreign key REFERENCES staff(staff_id),
bill_imports_date date,
bill_imports_total_payment float,
bill_imports_payments nvarchar(100),
bill_imports_note nvarchar(200),
bill_imports_date_created smalldatetime NOT NULL DEFAULT getdate()
)
--------------------------------------
create table bill_imports_details(
imports_details_id int identity(1,1) primary key,
imports_details_imports_id int foreign key REFERENCES bill_imports(bill_imports_id),
imports_details_product_id int foreign key REFERENCES product(product_id),
imports_details_product_quantity int,
imports_details_product_unit nvarchar(200),
imports_details_date_created smalldatetime NOT NULL DEFAULT getdate()
)
--------------------------------------
create table bill_sales(
bill_sales_id int identity(1,1) primary key,
bill_sales_customer_id int foreign key REFERENCES customer(customer_id) null,
bill_sales_staff_id int foreign key REFERENCES staff(staff_id),
bill_sales_date_order date,
bill_sales_total_payment float,
bill_sales_payments nvarchar(100),
bill_sales__note nvarchar(200),
bill_sales_date_created smalldatetime NOT NULL DEFAULT getdate()
)
--------------------------------------
create table bill_sales_details(
sales_details_id int identity(1,1) primary key,
sales_details_sales_id int,
sales_details_product_id int ,
sales_details_product_quantity int,
sales_details_product_sale float,
sales_details_date_created smalldatetime NOT NULL DEFAULT getdate()
)
--------------------------------------
create table users(
users_id int identity(1,1) primary key,
users_full_name nvarchar(100),
users_name varchar(50) not null,
users_password varchar(100) not null,
users_mail varchar(100) not null,
users_phone varchar(10) not null,
users_token varchar(max),
users_role nvarchar(50) DEFAULT 'user',
users_status nvarchar(100) DEFAULT N'Hoạt Động',
users_note nvarchar(100),
users_date_created smalldatetime NOT NULL DEFAULT getdate()
)

insert into users(users_full_name,users_name,users_password,users_mail,users_phone,users_token,users_role,users_note) values
(N'Trần Ngọc Tú','trantu1404','trantu1404','trantu143444@gmail.com','0372082758','','admin',N'Tài khoản 1'),
(N'Nguyễn Thị Ngọc','nguyenngoc1','nguyenngoc1','nguyenngoc1@gmail.com','0397395635','','user',N'Tài khoản 2'),
(N'Phạm Minh Châu','phamchau2','phamchau2','phamchau2@gmail.com','0922382086','','user',N'Tài khoản 3'),
(N'Nguyễn Thu Yến','nguyenyen3','nguyenyen3','nguyenyen3@gmail.com','0968467705','','user',N'Tài khoản 4'),
(N'Trần Văn Trưởng','trantruong4','trantruong4','trantruong4@gmail.com','0965656750','','user',N'Tài khoản 5'),
(N'Nguyễn Khánh Thư','nguyenthu5','nguyenthu5','nguyenthu5@gmail.com','0987243926','','user',N'Tài khoản 6'),
(N'Trần Đức Lương','tranluong6','tranluong6','tranluong6@gmail.com','0974135250','','user',N'Tài khoản 7'),
(N'Lê Thị Phương Lan','lelan7','lelan7','lelan7@gmail.com','0965370610','','user',N'Tài khoản 8'),
(N'Đặng Ngọc Huyền','danghuyen8','danghuyen8','danghuyen8@gmail.com','0988590558','','user',N'Tài khoản 9'),
(N'Nguyễn Thị Hiền','nguyenhien9','nguyenhien9','nguyenhien9@gmail.com','0865529391','','user',N'Tài khoản 10'),
(N'Lê Thành Đạt','ledat9','ledat9','ledat9@gmail.com','0362968338','','user',N'Tài khoản 11');
--------------------------------------
create table slide(
slide_id int identity(1,1) primary key,
slide_staff_id int foreign key REFERENCES staff(staff_id),
slide_img ntext,
slide_link ntext,
slide_note nvarchar(200),
slide_date_created smalldatetime NOT NULL DEFAULT getdate()
)
go

insert into slide(slide_staff_id,slide_img,slide_note) values
(6,'slide1.png',N'ảnh slide 1'),
(7,'slide2.jpg',N'ảnh slide 2'),
(8,'slide3.jpg',N'ảnh slide 3');
--------------------------------------
--drop database db_nusee

--select TOP(4)product_id,product_cate_id,product_name,product_img,product_price,product_sale,cate_name
--from
--dbo.product,dbo.category
--where product.product_cate_id=category.cate_id ORDER BY product_sale