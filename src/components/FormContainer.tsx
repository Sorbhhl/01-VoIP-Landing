import { DemoForm } from "./Form";
import imgTlph from "../assets/alexander-andrews-JYGnB9gTCls-unsplash.jpg";

export default function FormContainer() {
  return (
    <div className="flex flex-row w-full shadow-md">
      <div className="w-full md:w-1/2 py-8 px-6 md:py-16 md:px-12">
          <h2 className="mb-2 lg:mb-6 text-2xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
            Contáctanos
          </h2>
          <DemoForm />
      </div>
      <div className="w-1/2 hidden md:block">
        <img src={imgTlph} alt="" />
      </div>
    </div>
  );
}
