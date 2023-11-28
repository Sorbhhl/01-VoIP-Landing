const bgImage =
  "https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const logoIvoz =
  "https://ivoz.irontec.com/wp-content/uploads/2017/11/Logo_ivoz_provider-1.png";

export default function Portada() {
  return (
    <div
      className="relative flex items-center justify-center bg-cover object-center pt-32 pb-20 overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500 to-black opacity-50"></div>
      <div className="z-10 flex flex-col md:flex-row items-center w-full justify-center h-full gap-10 md:gap-40 px-10">
        <div className="text-white max-w-xl">
          <img src={logoIvoz} alt="logo-ivoz" />
          <h1 className="text-2xl md:text-4xl font-extrabold">
            La solución para Operadores VoIP 100% Libre
          </h1>
          <p>
            Una solución técnica abierta multipropósito, multimarca, multitenant
            & carrier grade.
          </p>
        </div>
        <div className="flex flex-col md:flex-row font-bold gap-5 text-white">
          <button className="bg-gray-600 px-6 py-2 rounded-lg text-center">
            Reserva una demo
          </button>
          <button className="bg-ivoz_primary px-6 py-2 rounded-lg flex flex-row gap-2 text-center">
            Consíguelo{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
