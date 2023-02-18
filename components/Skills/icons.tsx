import {
  FaLaravel,
  FaReact,
  FaJs,
  FaPhp,
  FaCss3Alt,
  FaVuejs,
  FaSass,
  FaHtml5,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTailwind
} from "react-icons/tb"

export const icons = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
    hoverClass: "hover:bg-orange-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 0.1,
    },
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
    hoverClass: "hover:bg-blue-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 0.2,
    },
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    hoverClass: "hover:bg-yellow-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 0.4,
    },
  },
  {
    title: "PHP",
    icon: <FaPhp />,
    hoverClass: "hover:bg-purple-600 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 0.6,
    },
  },
  {
    title: "React",
    icon: <FaReact />,
    hoverClass: "hover:bg-blue-400 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 0.8,
    },
  },
  {
    title: "Vue.js",
    icon: <FaVuejs />,
    hoverClass: "hover:bg-green-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 1,
    },
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs />,
    hoverClass: "hover:bg-grey-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 1.25,
    },
  },
  {
    title: "Laravel",
    icon: <FaLaravel />,
    hoverClass: "hover:bg-red-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 1.35,
    },
  },
  {
    title: "Sass",
    icon: <FaSass />,
    hoverClass: "hover:bg-pink-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 1.5,
    },
  },
  {
    title: "Tailwind",
    icon: <TbBrandTailwind />,
    hoverClass: "hover:bg-blue-500 hover:transition ease duration-500",
    transition: {
      type: "linear",
      duration: 1.8,
    },
  },
];
