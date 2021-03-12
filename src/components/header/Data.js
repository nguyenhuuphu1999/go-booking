const Datalist1 =[
   
        {
            "title":'Gift code',
            "link":"/gilfcode"
        },
        {"title":'Game bài b52',
         "link":"/b52club"
        },
        {"title":'Game bắn cá',
         "link":"/game-ban-ca"
        },
        {"title":'Go88',
         "link":"go-88"
        },
        {"title":'Zbet',
         "link":"zbet"
        },
        {"title":'Vic win',
         "link":"vic-win"
        },
        {"title":'Game bài đổi thưởng',
         "link":"game-bai-doi-thuong"
        },
        {"title":'Ric Win',
         "link":"ric-win"
        },
        {"title":'Top88',
         "link":"top-88"
        },
        {"title":'789 Club',
         "link":"789-club"
        },
        {"title":'May Club',
         "link":"may-club"
        },
        {"title":'Nhatvip',
         "link":"nhat-vip"
        },
        {"title":'Zowin',
         "link":"zo-win"
        },
        {"title":'Rikvip',
         "link":"rik-vip"
        },
        {"title":'Nhà cái uy tín',
         "link":"nha-cai-uy-tin"
        },
        {"title":'Yo88',
        "link":"yo-88"
        }
    
];

const Datalist2=[
    {
        "title":'Game tài xỉu',
        "link":"game-tai-xiu"
    },
    {
        "title":'Bomtan win',
        "link":"bom-tan-win"
    },
    {
        "title":'Sunwin',
        "link":"sun-win"
    },
    {
        "title":'Nổ hũ club',
        "link":"no-hu-club"
    },
    {
        "title":'FA88 Club',
        "link":"fa88-club"
    },
    {
        "title":'Macau Club',
        "link":"ma-cau-club"
    },
    {
        "title":'Lixi88',
        "link":"li-xi-88"
    },
    {
        "title":'Fan vip',
        "link":"fan-vip"
    },
    {
        "title":'Ngon Club',
        "link":"ngon-club"
    },
    {
        "title":'KingFun',
        "link":"king-fun"
    },
    {
        "title":'Nagavip',
        "link":'na-ga-vip'
    }
]



const Datalist3=[
    {
        "title":'Sv88',
        "link":"sv-88"
    },
    {
        "title":'R88',
        "link":"r88"
    },
    {
        "title":'Five88',
        "link":"five-88"
    },
    {
        "title":'Red88',
        "link":"red-88"
    },
    {
        "title":'Vn88',
        "link":"vn-88"
    },
    {
        "title":'Lucky88',
        "link":"lucky-88"
    },
    {
        "title":'Nbet',
        "link":"n-bet"
    },
    {
        "title":'Lode88',
        "link":"lode-88"
    },
    {
        "title":'Sky88',
        "link":"sky-88"
    },
    {
        "title":'Bong99',
        "link":"bong-99"
    },
    {   "title":'789bet',
        "link":'789best'
    }
]

const DataNavbar=[
    {
        "id":"1",
        "title":"TRANG CHỦ",
        "link":"",
        "id_child":""
    },//2
    {
        "id":"2",
        "title":"LIVE CASINO",
        "link":"n-bet",
        "id_child":""
    },
     {//Baccara
        "id":"3",
        "title":"BACCARAT",
        "link":"/baccarat",
        "id_child":"2"
    },//Rồng hổ
    {
        "id":"4",
        "title":"RỒNG HỔ",
        "link":"n-bet",
        "id_child":"2"
    },
    {//Tài xỉu
        "id":"5",
        "title":"TÀI XỈU",
        "link":"n-bet",
        "id_child":"2"
    },
    {//Roulette
        "id":"6",
        "title":"ROULETTE",
        "link":"n-bet",
        "id_child":"2"
    },//end2 Soi kèo bóng đá sẽ gồm
    // Bảng xếp hạng
    // Lịch thi đấu
    // Dự đoán kết quả
    {
        "id":"7",
        "title":"SOI KÈO BÓNG ĐÁ",
        "link":"bong-99",
        "id_child":""
    },
    {
        "id":"8",
        "title":"BẢNG XẾP HẠNG",
        "link":"bong-99",
        "id_child":"7"
    },{
        "id":"9",
        "title":"LỊCH THI ĐẤU",
        "link":"bong-99",
        "id_child":"7"
    },{
        "id":"10",
        "title":"DỰ ĐOÁN KẾT QUẢ",
        "link":"bong-99",
        "id_child":"7"
    },//end 7
    {// 8 Blog bóng đá sẽ gồm
// FIFA
// ASIAN
// Bóng đá Việt Nam
// Trọng tài
        "id":"11",
        "title":"BLOG BÓNG ĐÁ",
        "link":"bong_da_doi_song",
        "id_child":""
    },
    {
        "id":"12",
        "title":"FIFA",
        "link":"FIFA",
        "id_child":"11"
    },
    {
        "id":"13",
        "title":"ASIAN",
        "link":"bong_da_chau_a",
        "id_child":"11"
    },
    {
        "id":"14",
        "title":"BÓNG ĐÁ VIỆT NAM",
        "link":"bong_da_doi_song",
        "id_child":"11"
    },
    {
        "id":"15",
        "title":"TRỌNG TÀI",
        "link":"sky-88",
        "id_child":"11"
    },// end
    {//Nhận định Nhà cái sẽ gồm
// Top 10 Nhà cái lớn
// Link vào nhà cái
// Phốt nhà cái
        "id":"16",
        "title":"NHẬN ĐỊNH NHÀ CÁI",
        "link":"sky-88",
        "id_child":""
    },
    {
        "id":"17",
        "title":"TOP 10 NHÀ CÁI LỚN NHẤT",
        "link":"sky-88",
        "id_child":"16"
    },{
        "id":"18",
        "title":"LINK CÁC NHÀ CÁI",
        "link":"sky-88",
        "id_child":"16"
    },{
        "id":"19",
        "title":"PHỐT NHÀ CÁI",
        "link":"sky-88",
        "id_child":"16"
    },//END
    {//Lô đề sẽ gồm
// Xổ số kiến thiết
// Xổ số vietlot
// Lô đề
// Soi Cầu
        "id":"20",
        "title":"LÔ ĐỀ - XỔ SỐ",
        "link":"sky-88",
        "id_child":""
    },
    {
        "id":"21",
        "title":"XỔ SỐ KIẾN THIẾT",
        "link":"sky-88",
        "id_child":"20"
    },
    {
        "id":"22",
        "title":"XỔ SỐ VIETLOT",
        "link":"sky-88",
        "id_child":"20"
    },
    {
        "id":"23",
        "title":"LÔ ĐỀ ",
        "link":"sky-88",
        "id_child":"20"
    },
    {
        "id":"24",
        "title":"SOI CẦU",
        "link":"sky-88",
        "id_child":"20"
    },//END
]

export default {Datalist1 ,Datalist2, Datalist3,DataNavbar}