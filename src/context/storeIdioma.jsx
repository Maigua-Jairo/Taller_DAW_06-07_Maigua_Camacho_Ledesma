import { create } from "zustand";

const storeIdioma = create((set) => ({

  idioma: "es",

  textos: {
    titulo: "Bienvenido",
    descripcion: "Esta es mi aplicación",
    boton: "Cerrar sesión",
    saludo: "Hola, usuario",
  },

  cambiarIdioma: (nuevoIdioma) => {
    const traducciones = {
      es: {
        titulo: "Bienvenido",
        descripcion: "Esta es mi aplicación",
        boton: "Cerrar sesión",
        saludo: "Hola, usuario",
      },
      en: {
        titulo: "Welcome",
        descripcion: "This is my application",
        boton: "Log out",
        saludo: "Hello, user",
      },
      fr: {
        titulo: "Bienvenue",
        descripcion: "C'est mon application",
        boton: "Se déconnecter",
        saludo: "Bonjour, utilisateur",
      },
    }

    set({ idioma: nuevoIdioma, textos: traducciones[nuevoIdioma] })
  },

}))

export default storeIdioma