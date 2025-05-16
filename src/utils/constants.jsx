import { ArrowRightOutlined, FireOutlined, RocketOutlined, ThunderboltOutlined, StarFilled } from '@ant-design/icons';

export const slides = [
  {
    title: "Next-Gen Devices",
    subtitle: "Experience cutting-edge technology",
    buttonText: "Explore Now",
    icon: <RocketOutlined className="text-base" />,
    background: "bg-gradient-to-r from-blue-600 to-indigo-800",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    badgeText: "NEW LAUNCH",
    badgeColor: "bg-purple-500",
    topRight: {
      text: "AI-Powered Tech",
      icon: <StarFilled />
    }
  },
  {
    title: "Epic Summer Sale",
    subtitle: "Save up to 50% on premium tech",
    buttonText: "Shop Deals",
    icon: <FireOutlined className="text-base" />,
    background: "bg-gradient-to-r from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    badgeText: "LIMITED TIME",
    badgeColor: "bg-yellow-400 text-yellow-900",
    topRight: {
      text: "Limited Offer",
      icon: <StarFilled />
    }
  },
  {
    title: "Ultimate Performance",
    subtitle: "Powerful devices for professionals",
    buttonText: "Discover",
    icon: <ThunderboltOutlined className="text-base" />,
    background: "bg-gradient-to-r from-purple-700 to-pink-600",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80",
    badgeText: "FLAGSHIP MODELS",
    badgeColor: "bg-blue-400",
    topRight: {
      text: "Pro Edition",
      icon: <StarFilled />
    }
  }
];