export interface CardTourProps {
  id: string;
  name: string;
  image: string;
  type: string;
  evaluation: number;
  evaluationCount: number;
  booking: number;
  price: number;
  sale?: number;
  isWhislist?: boolean;
  isMinWidth?: boolean;
}
export const CardTourPropsListData: CardTourProps[] = [
  {
    id: "1",
    name: "Tour Động Phong Nha",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    type: "Beach",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
  },
  {
    id: "2",
    name: "Beautiful Beach",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    type: "Beach",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
  },
  {
    id: "3",
    name: "Beautiful Beach",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    type: "Beach",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
  },
  {
    id: "4",
    name: "Beautiful Beach",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    type: "Beach",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
  },
  {
    id: "5",
    name: "Beautiful Beach",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    type: "Beach",
    evaluation: 4.5,
    evaluationCount: 120,
    booking: 80,
    price: 200,
    sale: 150,
    isWhislist: true,
  },
];
