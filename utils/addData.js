import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();
// Function to add locations to Firestore
export const addLocations = async () => {
  const locations = [
    { locationId: "lc_1", name: "Phong Nha" },
    { locationId: "lc_2", name: "Bảo Ninh" },
    { locationId: "lc_3", name: "Quảng Ninh" },
    { locationId: "lc_4", name: "Quảng Trạch" },
    { locationId: "lc_5", name: "Hoàn Lão" },
    { locationId: "lc_6", name: "Cam Lộ" },
    { locationId: "lc_7", name: "Gio Linh" },
    { locationId: "lc_8", name: "Hải Lăng" },
    { locationId: "lc_9", name: "Hướng Hóa" },
    { locationId: "lc_10", name: "Triệu Phong" },
    { locationId: "lc_11", name: "Vĩnh Linh" },
  ];

  for (const location of locations) {
    try {
      await setDoc(doc(db, "locations", location.locationId), location);
      console.log(`Location ${location.locationId} added successfully.`);
    } catch (error) {
      console.error("Error adding location: ", error);
    }
  }
};


const tours = [
  {
    tourId: "tour_1",
    name: "Vũng Chùa Đảo Yến",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103310/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_gxt4sk.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103307/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_fwetlg.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103303/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_r5mdbn.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103305/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_ogfrrg.jpg",
    ],
    type: "Tham quan",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 100,
    price: 1000000,
    sale: 20,
    location: ["Quảng Ninh"],
  },
  {
    tourId: "tour_2",
    name: "Phong Nha Kẻ Bàng",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102980/travel-app/tours/phong%20nha/pn2_iiijyg.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102980/travel-app/tours/phong%20nha/pn1_pklrhc.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102979/travel-app/tours/phong%20nha/pn4_ldniit.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102979/travel-app/tours/phong%20nha/pn3_ttwkdu.jpg",
    ],
    type: "Khám phá",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 100,
    price: 1000000,
    sale: 20,
    location: ["Bố Trạch"],
  },
  {
    tourId: "tour_3",
    name: "Thành Cổ Quảng Trị",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102953/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc1_nvwu4e.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102952/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc4_ygi2o5.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102952/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc3_cgpzsl.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102951/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc2_u8980c.jpg",
    ],
    type: "Di tích lịch sử",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 100,
    price: 1000000,
    sale: 20,
    location: ["Đông Hà"],
  },
  {
    tourId: "tour_4",
    name: "Đảo Cồn Cỏ",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103269/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_qzj68b.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103263/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_jc5abj.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103261/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_tdrkt7.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103259/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_wdrxco.jpg",
    ],
    type: "Đảo",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 100,
    price: 1000000,
    sale: 20,
    location: ["Cồn Cỏ"],
  },
  {
    tourId: "tour_5",
    name: "Biển Nhật Lệ",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103060/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl1_pk52qr.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103059/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl3_khllal.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103058/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl2_hnm4oi.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103058/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl2_hnm4oi.jpg",
    ],
    type: "Bãi Biển",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 100,
    price: 1000000,
    sale: 20,
    location: ["Đồng Hới"],
  },
  {
    tourId: "tour_6",
    name: "Làng Cổ Bích La",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103176/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_d7qmpa.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103174/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_qggmtu.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103171/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_mbvrmt.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103169/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_qfotmb.jpg",
    ],
    type: "Di tích lịch sử",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 100,
    price: 1000000,
    sale: 20,
    location: ["Phong Điền"],
  },
  {
    tourId: "tour_7",
    name: "Làng Cổ Bích La",
    image: [
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",

    ],
    type: "Di tích lịch sử",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 100,
    price: 1000000,
    sale: 20,
    location: ["Phong Điền"],
  },
];


export const addTours = async () => {
    
const tours = [
    {
      tourId: "tour_1",
      name: "Vũng Chùa Đảo Yến",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103310/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_gxt4sk.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103307/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_fwetlg.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103303/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_r5mdbn.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103305/travel-app/tours/V%C5%A9ng%20Ch%C3%B9a%20%C4%90%E1%BA%A3o%20Y%E1%BA%BFn/download_ogfrrg.jpg",
      ],
      type: "Tham quan",
      evaluation: 4.5,
      evaluationCount: 120,
      booking: 100,
      price: 1000000,
      sale: 20,
      location: ["Quảng Ninh"],
    },
    {
      tourId: "tour_2",
      name: "Phong Nha Kẻ Bàng",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102980/travel-app/tours/phong%20nha/pn2_iiijyg.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102980/travel-app/tours/phong%20nha/pn1_pklrhc.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102979/travel-app/tours/phong%20nha/pn4_ldniit.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102979/travel-app/tours/phong%20nha/pn3_ttwkdu.jpg",
      ],
      type: "Khám phá",
      evaluation: 4.5,
      evaluationCount: 120,
      booking: 100,
      price: 1000000,
      sale: 20,
      location: ["Bố Trạch"],
    },
    {
      tourId: "tour_3",
      name: "Thành Cổ Quảng Trị",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102953/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc1_nvwu4e.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102952/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc4_ygi2o5.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102952/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc3_cgpzsl.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102951/travel-app/tours/thanh%20co%20quang%20tr%E1%BB%8B/tc2_u8980c.jpg",
      ],
      type: "Di tích lịch sử",
      evaluation: 4.5,
      evaluationCount: 120,
      booking: 100,
      price: 1000000,
      sale: 20,
      location: ["Đông Hà"],
    },
    {
      tourId: "tour_4",
      name: "Đảo Cồn Cỏ",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103269/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_qzj68b.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103263/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_jc5abj.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103261/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_tdrkt7.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103259/travel-app/tours/%C4%90%E1%BA%A3o%20c%E1%BB%93n%20c%E1%BB%8F/download_wdrxco.jpg",
      ],
      type: "Đảo",
      evaluation: 4.5,
      evaluationCount: 120,
      booking: 100,
      price: 1000000,
      sale: 20,
      location: ["Cồn Cỏ"],
    },
    {
      tourId: "tour_5",
      name: "Biển Nhật Lệ",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103060/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl1_pk52qr.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103059/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl3_khllal.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103058/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl2_hnm4oi.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103058/travel-app/tours/nh%E1%BA%ADt%20l%E1%BB%87/nl2_hnm4oi.jpg",
      ],
      type: "Bãi Biển",
      evaluation: 4.5,
      evaluationCount: 120,
      booking: 100,
      price: 1000000,
      sale: 20,
      location: ["Đồng Hới"],
    },
    {
      tourId: "tour_6",
      name: "Làng Cổ Bích La",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103176/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_d7qmpa.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103174/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_qggmtu.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103171/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_mbvrmt.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103169/travel-app/tours/L%C3%A0ng%20c%E1%BB%95%20b%C3%ADch%20la/download_qfotmb.jpg",
      ],
      type: "Di tích lịch sử",
      evaluation: 4.5,
      evaluationCount: 120,
      booking: 100,
      price: 1000000,
      sale: 20,
      location: ["Phong Điền"],
    },
    {
      tourId: "tour_7",
      name: "Làng Cổ Bích La",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730103113/travel-app/tours/Hang%20T%C3%A1m%20C%C3%B4/images_tfzvbp.jpg",
  
      ],
      type: "Di tích lịch sử",
      evaluation: 4.5,
      evaluationCount: 120,
      booking: 100,
      price: 1000000,
      sale: 20,
      location: ["Phong Điền"],
    },
  ];

  for (const tour of tours) {
    try {
      await setDoc(doc(db, "tours", tour.tourId), tour);
      console.log(`Location ${ tour.tourId} added successfully.`);
    } catch (error) {
      console.error("Error adding location: ", error);
    }
  }
  
}