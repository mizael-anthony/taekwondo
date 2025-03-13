import Link from "next/link";
import { FC } from "react";

type IconType = "default-ico";

const iconRender = (val: IconType) => {
  switch (val) {
    case "default-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

// Définition des props du composant FeatureItem
interface FeatureItemProps {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

// Composant FeatureItem
const FeatureItem: FC<FeatureItemProps> = ({ title, description, icon, color }) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg space-y-3">
      <span className={`p-3 flex w-max rounded-full text-white ${color}`}>
        {iconRender(icon)}
      </span>
      <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

// Données des fonctionnalités
const features: FeatureItemProps[] = [
  {
    title: "Feature 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-sky-600",
  },
  {
    title: "Feature 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-indigo-600",
  },
  {
    title: "Feature 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-orange-600",
  },
  {
    title: "Feature 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-rose-600",
  },
  {
    title: "Feature 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-emerald-600",
  },
  {
    title: "Feature 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-pink-600",
  },
];

// Composant principal
const FeaturesSection: FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
          <div className="lg:w-[55%] xl:w-3/5 lg:items-center grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
          <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl">
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
              Stay focused on your business strategy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda rem inventore odit quibusdam pariatur explicabo vel temporibus
            </p>
            <div className="flex">
              <Link
                href="#"
                className="bg-sky-700 dark:bg-sky-500 text-white rounded-full px-6 h-12 flex w-max items-center"
              >
                Try it now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
