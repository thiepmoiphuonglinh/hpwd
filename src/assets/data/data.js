export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Tuấn Linh',
            child: 'Nhà Trai',
            father: 'Vương Văn Hà',
            mother: 'Đặng Thị Huệ',
            image: './src/assets/images/groom.jpg'
        },
        P: {
            id: 2,
            name: 'Thu Phương',
            child: 'Nhà Gái',
            father: 'Nguyễn Đức Khánh',
            mother: 'Nguyễn Thị Bình',
            image: './src/assets/images/bride.jpg'
        },

        couple: './src/assets/images/couple.jpg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'tháng 03',
            date: 'ngày 07',
            day: 'Sơn Dương',
            hours: {
                start: '16h00 - Thứ bảy',
                finish: 'Selesai'
            },
            address: 'Ủy ban nhân dân thị trấn Sơn Dương cũ (Đối diện Viettel Sơn Dương)',
        },
        reception: {
            year: '2026',
            month: 'tháng 03',
            date: 'ngày 08',
            day: 'Sơn Dương',
            hours: {
                start: '9h00 - Chủ nhật',
                finish: 'Selesai'
            },
            address: '81 tổ dân phố Măng Ngọt, Sơn dương, Tuyên quang',
        },
    },

    link: {
        calendar: '',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            qr: './src/assets/images/mb.png',
            rekening: '8001102000',
            name: 'Nguyễn Thu Phương',
            bankName: 'MB Bank'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: '',

    navbar: [
    {
        id: 1,
        teks: 'Trang chủ',
        icon: 'bx bxs-home-heart',
        path: '#home',
    },
    {
        id: 2,
        teks: 'Couple',
        icon: 'bx bxs-group',
        path: '#bride',
    },
    {
        id: 3,
        teks: 'Thời gian',
        icon: 'bx bxs-calendar-check',
        path: '#time',
    },
    {
        id: 4,
        teks: 'Ảnh',
        icon: 'bx bxs-photo-album',
        path: '#galeri',
    },
    {
        id: 5,
        teks: 'Lời chúc',
        icon: 'bx bxs-message-rounded-dots',
        path: '#wishas',
    },
],
}
