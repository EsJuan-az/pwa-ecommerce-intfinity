"use client"
import { handleUserLogin } from "@/actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"
const formSchema = z.object({
  email: z.string().email('Tu email debe ser un correo electrónico'),
  password: z.string(),
});

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        handleUserLogin( values.email, values.password ).then( resp => {
          console.log( resp );
          if( resp.status == 401 ){
            form.setError("password", {
              message: "Tu email o contraseña no son válidos",
              type: "validate",
            });
          }
        });
      }
  return (
    <div>
        <Card className="w-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CardHeader>
            <Image
              alt="Intfinity logo"
              src="/intfinity.png"
              width={100}
              height={100}
              className="m-auto select-none bg-purple rounded-full"/>
            <CardTitle>
              Intfinity Blocks
            </CardTitle>
            <CardDescription>Ingreso de usuario al panel.</CardDescription>
          </CardHeader>
          <CardContent>
          <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electrónico</FormLabel>
                            <FormControl>
                                <Input placeholder="Ingrese su email" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input placeholder="Ingrese su contraseña" type="password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="!mt-6">Ingresar</Button>
                </form>
            </Form>
          </CardContent>
        </Card>
    </div>
  )
}
