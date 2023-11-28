export default function AppDetails() {
  return (
    <div className="w-full py-8 px-6 md:py-16 md:px-12">
      <h2 className="mb-2 lg:mb-6 text-2xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
        Sobre VoIP
      </h2>
      <p>
        Nuestros servicios de voz están diseñados con el objetivo de
        proporcionar <b>soluciones de comunicación confiables y flexibles</b> para
        empresas y organizaciones.</p><br />
        <p> Nos encargamos de gestionar y administrar la
        infraestructura necesaria para garantizar la seguridad y eficiencia de
        tus comunicaciones. Contamos con <b>acuerdos con múltiples operadores</b>, lo
        que nos permite ofrecer un servicio redundante y con un SLA más elevado
        </p><br />
        <p>Diseñamos soluciones de voz personalizadas y adaptadas a tus necesidades
        para garantizar y optimizar tus comunicaciones.
      </p>
      <ol className="flex flex-col md:flex-row items-center mt-12 pl-4">
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="animate-pulse z-10 flex items-center justify-center w-6 h-6 bg-red-200 rounded-full shrink-0">
              <span className="flex w-3 h-3 bg-ivoz_primary rounded-full" />
            </div>
            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
          <div className="mt-3 items-center">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <h3 className="font-light text-gray-900 dark:text-white">
              Líneas IP Trunk
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full shrink-0">
              <span className="flex w-3 h-3 bg-gray-600 rounded-full" />
            </div>
            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
          <div className="mt-3 items-center">
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
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>

            <h3 className="font-light text-gray-900 dark:text-white">
              Tarifas planas
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full shrink-0">
              <span className="flex w-3 h-3 bg-gray-600 rounded-full" />
            </div>
            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
          <div className="mt-3 items-center">
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
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>

            <h3 className="font-light text-gray-900 dark:text-white">
              Portabilidades
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full shrink-0">
              <span className="flex w-3 h-3 bg-gray-600 rounded-full" />
            </div>
            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
          <div className="mt-3 items-center">
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
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>

            <h3 className="font-light text-gray-900 dark:text-white">
              SIP-Trunk entre PBX
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full shrink-0">
              <span className="flex w-3 h-3 bg-gray-600 rounded-full" />
            </div>
            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 md:hidden" />
          </div>
          <div className="mt-3 items-center">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <h3 className="font-light text-gray-900 dark:text-white">
              Numeración geográfica
            </h3>
          </div>
        </li>
      </ol>
    </div>
  );
}
