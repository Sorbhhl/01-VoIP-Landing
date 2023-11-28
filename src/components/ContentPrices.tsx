import { TablePrices } from "./TablePrices";

const imgMobile =
  "https://images.unsplash.com/photo-1501162946741-4960f990fdf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const th_tarifas_llamadas = [
  "Llamadas destino",
  "Establecimiento",
  "Precio minuto",
];

const tr_tarifas_llamadas = [
  {
    row1: "A fijos nacionales",
    row2: "0,00€",
    row3: "0,007€",
  },
  {
    row1: "A móviles nacionales",
    row2: "0,00€",
    row3: "0,020€",
  },
  {
    row1: "A números especiales (902)",
    row2: "0,17€",
    row3: "0,140€",
  },
  {
    row1: "Internacionales",
    row2: "0,00€",
    row3: "Desde 0,015",
  },
];

const th_numeracion = ["Tipo de Número", "Alta/Portabilidad", "Cuota"];

const tr_numeracion = [
  {
    row1: "Número Geográfico",
    row2: "15,00€",
    row3: "5,00 €/mes",
  },
  {
    row1: "Numero 902",
    row2: "15,00€",
    row3: "7,00 €/mes",
  },
  {
    row1: "A números especiales (902)",
    row2: "15,00€",
    row3: "0,00 €/mes",
  },
  {
    row1: "Canal SIP Trunk",
    row2: "0,00€",
    row3: "3,00 €/mes",
  },
];

export default function ContentPrices() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 md:flex-row-reverse">
      <div className="w-full md:w-1/2 py-8 px-6 md:py-16 md:px-12">
          <h2 className="mb-2 text-gray-900 lg:mb-6 text-2xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
            Tarifas
          </h2>
          <TablePrices th={th_tarifas_llamadas} tr={tr_tarifas_llamadas} />
          <TablePrices th={th_numeracion} tr={tr_numeracion} />
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={imgMobile}
          alt="img-tlph"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
