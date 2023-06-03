import { nanoid } from "nanoid";
import { BsFillBriefcaseFill, BsWrenchAdjustableCircleFill, BsCashCoin } from "react-icons/bs"
const links = [
  {
    id: nanoid(),
    text: "home",
    url: "/",
  },
  {
    id: nanoid(),
    text: "about",
    url: "/about",
  },
  {
    id: nanoid(),
    text: "products",
    url: "/products",
  },
];
const services = [
  {
    id: nanoid(),
    icon: <BsWrenchAdjustableCircleFill />,
    title: 'maintainance',
    info: "We have a team of skilled technicians with vast knowledge of the products we sell therefore we can ensure that any malfunction that occurs to any of our products will be dealt with swiftly." },
  {
    id: nanoid(),
    icon: <BsFillBriefcaseFill />,
    title: 'consultancy',
    info: "If you have a startup business and you are having trouble setting up your tech infrastucture, A2Z will help you navigate through choosing the right products tailored to your company." 
  },
  {
    id: nanoid(),
    icon: <BsCashCoin />,
    title: 'sales',
    info: "While we prioritize quality, we also understand the significance of affordability. We believe that everyone should have access to superior products at reasonable prices."
  }
]
export { links, services }