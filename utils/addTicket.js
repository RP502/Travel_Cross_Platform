const tickets = [
  {
    ticketId: "t_1",
    name: "Động Phong Nha",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173645/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/images_xupfco.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173632/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/download_yxkxwk.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173639/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/download_kunf0t.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173636/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/download_hwvgei.jpg",
    ],
    evaluation: 4.5,
    evaluationCount: 320,
    booking: 150,
    price: 150000,
    sale: 10,
    provine: "Quảng Bình",
  },
  {
    ticketId: "t_2",
    name: "Động Thiên Đường",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173617/travel-app/ticket/%C4%91%E1%BB%99ng%20thi%C3%AAn%20%C4%91%C6%B0%E1%BB%9Dng/download_bkshm0.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173614/travel-app/ticket/%C4%91%E1%BB%99ng%20thi%C3%AAn%20%C4%91%C6%B0%E1%BB%9Dng/download_j1lxji.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173622/travel-app/ticket/%C4%91%E1%BB%99ng%20thi%C3%AAn%20%C4%91%C6%B0%E1%BB%9Dng/download_islhsp.jpg"
    ],
    evaluation: 4.7,
    evaluationCount: 400,
    booking: 250,
    price: 250000,
    sale: 15,
    provine: "Quảng Bình",
  },
  {
    ticketId: "t_3",
    name: "Thành cổ Quảng Trị",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173678/travel-app/ticket/Th%C3%A0nh%20c%E1%BB%95%20qu%E1%BA%A3ng%20tr%E1%BB%8B/download_iwny01.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173668/travel-app/ticket/Th%C3%A0nh%20c%E1%BB%95%20qu%E1%BA%A3ng%20tr%E1%BB%8B/download_ztzs3g.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173688/travel-app/ticket/Th%C3%A0nh%20c%E1%BB%95%20qu%E1%BA%A3ng%20tr%E1%BB%8B/download_dcuokc.jpg"
    ],
    evaluation: 4.8,
    evaluationCount: 500,
    booking: 50,
    price: 0,
    sale: 0,
    provine: "Quảng Trị",
  },
  {
    ticketId: "t_4",
    name: "Sông Chày - Hang Tối",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173734/travel-app/ticket/S%C3%B4ng%20Ch%C3%A0y%20-%20Hang%20T%E1%BB%91i/images_hwtift.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173725/travel-app/ticket/S%C3%B4ng%20Ch%C3%A0y%20-%20Hang%20T%E1%BB%91i/download_smbkyc.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173729/travel-app/ticket/S%C3%B4ng%20Ch%C3%A0y%20-%20Hang%20T%E1%BB%91i/download_yqatmx.jpg",
    ],
    evaluation: 4.6,
    evaluationCount: 360,
    booking: 200,
    price: 450000,
    sale: 10,
    provine: "Quảng Bình",
  },
  {
    ticketId: "t_5",
    name: "Địa đạo Vịnh Mốc",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173788/travel-app/ticket/%C4%91%E1%BB%8Ba%20%C4%91%E1%BA%A1o%20v%C4%A9nh%20m%E1%BB%91c/download_yghb5y.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173791/travel-app/ticket/%C4%91%E1%BB%8Ba%20%C4%91%E1%BA%A1o%20v%C4%A9nh%20m%E1%BB%91c/download_dwny2h.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173778/travel-app/ticket/%C4%91%E1%BB%8Ba%20%C4%91%E1%BA%A1o%20v%C4%A9nh%20m%E1%BB%91c/download_sqf4mx.jpg",
    ],
    evaluation: 4.3,
    evaluationCount: 250,
    booking: 100,
    price: 40000,
    sale: 0,
    provine: "Quảng Trị",
  },
  {
    ticketId: "t_6",
    name: "Biển Nhật Lệ",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173810/travel-app/ticket/Bi%E1%BB%83n%20Nh%E1%BA%ADt%20L%E1%BB%87/download_vcijwu.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173815/travel-app/ticket/Bi%E1%BB%83n%20Nh%E1%BA%ADt%20L%E1%BB%87/images_s4lnwz.jpgg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173822/travel-app/ticket/Bi%E1%BB%83n%20Nh%E1%BA%ADt%20L%E1%BB%87/download_uascap.jpg",

    ],
    evaluation: 4.2,
    evaluationCount: 180,
    booking: 300,
    price: 0,
    sale: 0,
    provine: "Quảng Bình",
  },
  {
    ticketId: "t_7",
    name: "Lăng mộ Đại tướng Võ Nguyên Giáp",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173860/travel-app/ticket/L%C4%83ng%20m%E1%BB%99%20%C4%90%E1%BA%A1i%20t%C6%B0%E1%BB%9Bng%20V%C3%B5%20Nguy%C3%AAn%20Gi%C3%A1p/images_ydhdao.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173853/travel-app/ticket/L%C4%83ng%20m%E1%BB%99%20%C4%90%E1%BA%A1i%20t%C6%B0%E1%BB%9Bng%20V%C3%B5%20Nguy%C3%AAn%20Gi%C3%A1p/images_pmvxs6.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173849/travel-app/ticket/L%C4%83ng%20m%E1%BB%99%20%C4%90%E1%BA%A1i%20t%C6%B0%E1%BB%9Bng%20V%C3%B5%20Nguy%C3%AAn%20Gi%C3%A1p/download_mxbd7t.jpg"
    ],
    evaluation: 4.9,
    evaluationCount: 600,
    booking: 450,
    price: 0,
    sale: 0,
    provine: "Quảng Bình",
  },
];

import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();
// Function to add locations to Firestore
export const addTicket = async () => {

  const tickets = [
    {
      ticketId: "t_1",
      name: "Động Phong Nha",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173645/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/images_xupfco.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173632/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/download_yxkxwk.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173639/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/download_kunf0t.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173636/travel-app/ticket/%C4%91%E1%BB%99ng%20phong%20nha/download_hwvgei.jpg",
      ],
      evaluation: 4.5,
      evaluationCount: 320,
      booking: 150,
      price: 150000,
      sale: 10,
      provine: "Quảng Bình",
    },
    {
      ticketId: "t_2",
      name: "Động Thiên Đường",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173617/travel-app/ticket/%C4%91%E1%BB%99ng%20thi%C3%AAn%20%C4%91%C6%B0%E1%BB%9Dng/download_bkshm0.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173614/travel-app/ticket/%C4%91%E1%BB%99ng%20thi%C3%AAn%20%C4%91%C6%B0%E1%BB%9Dng/download_j1lxji.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173622/travel-app/ticket/%C4%91%E1%BB%99ng%20thi%C3%AAn%20%C4%91%C6%B0%E1%BB%9Dng/download_islhsp.jpg"
      ],
      evaluation: 4.7,
      evaluationCount: 400,
      booking: 250,
      price: 250000,
      sale: 15,
      provine: "Quảng Bình",
    },
    {
      ticketId: "t_3",
      name: "Thành cổ Quảng Trị",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173678/travel-app/ticket/Th%C3%A0nh%20c%E1%BB%95%20qu%E1%BA%A3ng%20tr%E1%BB%8B/download_iwny01.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173668/travel-app/ticket/Th%C3%A0nh%20c%E1%BB%95%20qu%E1%BA%A3ng%20tr%E1%BB%8B/download_ztzs3g.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173688/travel-app/ticket/Th%C3%A0nh%20c%E1%BB%95%20qu%E1%BA%A3ng%20tr%E1%BB%8B/download_dcuokc.jpg"
      ],
      evaluation: 4.8,
      evaluationCount: 500,
      booking: 50,
      price: 0,
      sale: 0,
      provine: "Quảng Trị",
    },
    {
      ticketId: "t_4",
      name: "Sông Chày - Hang Tối",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173734/travel-app/ticket/S%C3%B4ng%20Ch%C3%A0y%20-%20Hang%20T%E1%BB%91i/images_hwtift.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173725/travel-app/ticket/S%C3%B4ng%20Ch%C3%A0y%20-%20Hang%20T%E1%BB%91i/download_smbkyc.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173729/travel-app/ticket/S%C3%B4ng%20Ch%C3%A0y%20-%20Hang%20T%E1%BB%91i/download_yqatmx.jpg",
      ],
      evaluation: 4.6,
      evaluationCount: 360,
      booking: 200,
      price: 450000,
      sale: 10,
      provine: "Quảng Bình",
    },
    {
      ticketId: "t_5",
      name: "Địa đạo Vịnh Mốc",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173788/travel-app/ticket/%C4%91%E1%BB%8Ba%20%C4%91%E1%BA%A1o%20v%C4%A9nh%20m%E1%BB%91c/download_yghb5y.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173791/travel-app/ticket/%C4%91%E1%BB%8Ba%20%C4%91%E1%BA%A1o%20v%C4%A9nh%20m%E1%BB%91c/download_dwny2h.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173778/travel-app/ticket/%C4%91%E1%BB%8Ba%20%C4%91%E1%BA%A1o%20v%C4%A9nh%20m%E1%BB%91c/download_sqf4mx.jpg",
      ],
      evaluation: 4.3,
      evaluationCount: 250,
      booking: 100,
      price: 40000,
      sale: 0,
      provine: "Quảng Trị",
    },
    {
      ticketId: "t_6",
      name: "Biển Nhật Lệ",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173810/travel-app/ticket/Bi%E1%BB%83n%20Nh%E1%BA%ADt%20L%E1%BB%87/download_vcijwu.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173815/travel-app/ticket/Bi%E1%BB%83n%20Nh%E1%BA%ADt%20L%E1%BB%87/images_s4lnwz.jpgg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173822/travel-app/ticket/Bi%E1%BB%83n%20Nh%E1%BA%ADt%20L%E1%BB%87/download_uascap.jpg",
  
      ],
      evaluation: 4.2,
      evaluationCount: 180,
      booking: 300,
      price: 0,
      sale: 0,
      provine: "Quảng Bình",
    },
    {
      ticketId: "t_7",
      name: "Lăng mộ Đại tướng Võ Nguyên Giáp",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173860/travel-app/ticket/L%C4%83ng%20m%E1%BB%99%20%C4%90%E1%BA%A1i%20t%C6%B0%E1%BB%9Bng%20V%C3%B5%20Nguy%C3%AAn%20Gi%C3%A1p/images_ydhdao.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173853/travel-app/ticket/L%C4%83ng%20m%E1%BB%99%20%C4%90%E1%BA%A1i%20t%C6%B0%E1%BB%9Bng%20V%C3%B5%20Nguy%C3%AAn%20Gi%C3%A1p/images_pmvxs6.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730173849/travel-app/ticket/L%C4%83ng%20m%E1%BB%99%20%C4%90%E1%BA%A1i%20t%C6%B0%E1%BB%9Bng%20V%C3%B5%20Nguy%C3%AAn%20Gi%C3%A1p/download_mxbd7t.jpg"
      ],
      evaluation: 4.9,
      evaluationCount: 600,
      booking: 450,
      price: 0,
      sale: 0,
      provine: "Quảng Bình",
    },
  ];
  

  for (const item of tickets) {
    try {
      await setDoc(doc(db, "tickets", item.ticketId), item);
      console.log(`Location ${item.ticketId} added successfully.`);
    } catch (error) {
      console.error("Error adding location: ", error);
    }
  }
};
