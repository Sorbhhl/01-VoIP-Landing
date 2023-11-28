import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function DemoForm() {
    return (
       <Card color="transparent" shadow={false} className="bg-white px-8 py-6 rounded-lg shadow-lg">
        <Typography variant="h4" color="blue-gray">
          Formulario de contacto
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          ¿Tienes dudas?¿Quieres solicitar una demo? ¡Escríbenos!
        </Typography>
        <form className="mt-8 mb-2 w-full">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nombre:
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="border-solid border-2 border-t-gray-300 p-2 rounded-lg focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin="anonymous"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email:
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="border-solid border-2 border-t-gray-300 p-2 rounded-lg focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin="anonymous"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Mensaje:
            </Typography>
            <Input
              type="text-area"
              size="lg"
              placeholder="Quiero solicitar una demo."
              className="border-solid border-2 border-t-gray-300 p-2 rounded-lg focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin="anonymous"
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Acepto los
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Términos y condiciones
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin="anonymous"
          />
          <Button className="mt-6 bg-ivoz_primary w-auto px-6 py-2" fullWidth>
            Enviar
          </Button>
        </form>
      </Card>
    );
  }