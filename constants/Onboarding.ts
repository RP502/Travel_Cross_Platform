import { ImageSourcePropType } from "react-native";


export interface OnboardingItem {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
}

export   const onboardingData: OnboardingItem[] = [
    {
      id: 1,
      title: "Kế hoạch du lịch của bạn",
      description:
        "Chuyến đi khám phá các địa danh nổi tiếng, trải nghiệm văn hóa, ẩm thực địa phương và nghỉ ngơi tại các khách sạn tiện nghi. Hành trình đầy thú vị và đáng nhớ!",
      image: require("@/assets/images/slide1.jpg"),
    },
    {
      id: 2,
      title: "Đặt tour dễ dàng",
      description:
        "Đặt tour dễ dàng với vài bước đơn giản: chọn điểm đến, thời gian, và dịch vụ yêu thích. Xác nhận thông tin, thanh toán nhanh chóng, và chuẩn bị cho chuyến đi thú vị!",
      image: require("@/assets/images/slide2.jpg"),
    },
    {
      id: 3,
      title: "Tận hưởng chuyến đi",
      description:
        "Tận hưởng chuyến đi với những trải nghiệm mới lạ, khám phá cảnh đẹp, văn hóa địa phương và thư giãn trong không gian thoải mái. Mỗi khoảnh khắc đều đáng nhớ!",
      image: require("@/assets/images/slide3.jpg"),
    },
  ];