import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();
// Function to add locations to Firestore
export const addHotels = async () => {
  const hotel = [
    {
      hotelId: "h_1",
      name: "Phong Nha CôCô Hotel",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171342/travel-app/hotel/phong%20nha%20coco%20housse/download_qdvju2.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171343/travel-app/hotel/phong%20nha%20coco%20housse/download_e0exgf.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171345/travel-app/hotel/phong%20nha%20coco%20housse/download_w40alx.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171352/travel-app/hotel/phong%20nha%20coco%20housse/images_qeccdg.jpg",
      ],
      evaluation: 4.5,
      evaluationCount: 210,
      booking: 175,
      price: 350000,
      sale: 15,
      provine: "Quảng Bình",
    },
    {
      hotelId: "h_2",
      name: "Muong Thanh Luxury Nhật Lệ",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171455/travel-app/hotel/Muong%20Thanh%20Luxury%20Nh%E1%BA%ADt%20L%E1%BB%87/download_imlcgr.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171453/travel-app/hotel/Muong%20Thanh%20Luxury%20Nh%E1%BA%ADt%20L%E1%BB%87/download_fum9sr.jpg",
      ],
      evaluation: 4.8,
      evaluationCount: 320,
      booking: 300,
      price: 1200000,
      sale: 20,
      provine: "Quảng Bình",
    },
    {
      hotelId: "h_3",
      name: "Khách sạn Xuyên Á",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171661/travel-app/hotel/Kh%C3%A1ch%20s%E1%BA%A1n%20Xuy%C3%AAn%20%C3%81/download_wcmo6b.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171656/travel-app/hotel/Kh%C3%A1ch%20s%E1%BA%A1n%20Xuy%C3%AAn%20%C3%81/download_cximfx.jpg",
      ],
      evaluation: 4.0,
      evaluationCount: 180,
      booking: 75,
      price: 450000,
      sale: 10,
      provine: "Quảng Trị",
    },
    {
      hotelId: "h_4",
      name: "Vinpearl Hotel Quảng Bình",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171400/travel-app/hotel/Vinpearl%20Hotel%20Qu%E1%BA%A3ng%20B%C3%ACnh/download_hugfqs.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171399/travel-app/hotel/Vinpearl%20Hotel%20Qu%E1%BA%A3ng%20B%C3%ACnh/download_wnidza.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171413/travel-app/hotel/Vinpearl%20Hotel%20Qu%E1%BA%A3ng%20B%C3%ACnh/images_vngqqo.jpg",
      ],
      evaluation: 4.7,
      evaluationCount: 250,
      booking: 180,
      price: 1800000,
      sale: 25,
      provine: "Quảng Bình",
    },
    {
      hotelId: "h_5",
      name: "Khách sạn Nhà Nghỉ Kim Hoa",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171623/travel-app/hotel/Kh%C3%A1ch%20s%E1%BA%A1n%20Nh%C3%A0%20Ngh%E1%BB%89%20Kim%20Hoa/download_s4dkom.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171616/travel-app/hotel/Kh%C3%A1ch%20s%E1%BA%A1n%20Nh%C3%A0%20Ngh%E1%BB%89%20Kim%20Hoa/download_nwsfkv.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171618/travel-app/hotel/Kh%C3%A1ch%20s%E1%BA%A1n%20Nh%C3%A0%20Ngh%E1%BB%89%20Kim%20Hoa/download_oexrmq.jpg",
      ],
      evaluation: 3.9,
      evaluationCount: 120,
      booking: 80,
      price: 250000,
      sale: 5,
      provine: "Quảng Trị",
    },
    {
      hotelId: "h_6",
      name: "Đèo Ngang Hotel",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171495/travel-app/hotel/%C4%90%C3%A8o%20Ngang%20Resort/download_otlpnc.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730171491/travel-app/hotel/%C4%90%C3%A8o%20Ngang%20Resort/download_n2w29m.jpg",
      ],
      evaluation: 4.2,
      evaluationCount: 140,
      booking: 120,
      price: 300000,
      sale: 15,
      provine: "Quảng Trị",
    },
    {
      hotelId: "h_7",
      name: "Phong Nha Lake House",
      image: [
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730172284/travel-app/hotel/Phong%20Nha%20Lake%20House/images_ui0qco.jpg",
        "https://res.cloudinary.com/dcp33adrf/image/upload/v1730172287/travel-app/hotel/Phong%20Nha%20Lake%20House/images_ygrhhe.jpg",
      ],
      evaluation: 4.3,
      evaluationCount: 160,
      booking: 130,
      price: 700000,
      sale: 20,
      provine: "Quảng Bình",
    },
  ];

  for (const item of hotel) {
    try {
      await setDoc(doc(db, "hotels", item.hotelId), item);
      console.log(`Location ${item.hotelId} added successfully.`);
    } catch (error) {
      console.error("Error adding location: ", error);
    }
  }
};
