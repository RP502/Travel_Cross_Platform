export interface CardTicketProps {
  id: string;
  name: string;
  image: string;
  evaluation: number;
  evaluationCount: number;
  booking: number;
  price: number;
  sale?: number;
  isWhislist?: boolean;
  provine: string;
}
export const CardTicketPropsListData: CardTicketProps[] = [
  {
    id: "1",
    name: "Vé tham quan động Phong Nha",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
    provine: "Quảng Bình",
  },
  {
    id: "2",
    name: "Vé tham quan động Phong Nha",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    isWhislist: true,
    provine: "Quảng Bình",
  },
  {
    id: "3",
    name: "Vé tham quan động Phong Nha",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
    provine: "Quảng Bình",
  },
  {
    id: "4",
    name: "Vé tham quan động Phong Nha",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
    provine: "Quảng Bình",
  },
  {
    id: "5",
    name: "Vé tham quan động Phong Nha",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
    provine: "Quảng Bình",
  },
];
