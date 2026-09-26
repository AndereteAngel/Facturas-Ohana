import {
    coloresEquipos,
    fraganciasAceites,
    fraganciasAerosoles,
    fraganciasAuto,
    fraganciasCaritas,
    fraganciasDifusores,
    fraganciasDisney,
    fraganciasMini,
    fraganciasSahumerios,
    fraganciasTarjetas,
    fraganciasTextiles,
    fraganciasTouch,
} from "./fragancias";

import Equipos from "../assets/Equipos.jpg";
import aceite from "../assets/aceite.jpg";
import aerosol from "../assets/aerosol.jpg";
import auto from "../assets/auto.jpg";
import caritas from "../assets/caritas.jpg";
import difusor from "../assets/difusor.jpg";
import difusorDisney from "../assets/difusorDisney.jpg";
import mini from "../assets/mini.jpg";
import repuestoTouch from "../assets/repuestoTouch.jpg";
import sahumerios from "../assets/sahumerios.jpg";
import tarjetas from "../assets/tarjetas.jpg";
import textil from "../assets/textiles.png";
import textilDisney from "../assets/textilDisney.jpg";
import touch from "../assets/touch.jpg";

const productos = [
    {
        id: 1,
        codigo: "TXT001",
        nombre: "Aromatizante Textil",
        categoria: "Textiles",
        descripcion:
            "Perfuma telas, cortinas, sillones, ropa de cama y prendas.",
        precio: 5000,
        stock: 10,
        imagen: textil,
        activo: true,
        fragancias: fraganciasTextiles,
    },

    {
        id: 2,
        codigo: "AER001",
        nombre: "Aerosol",
        categoria: "Aerosoles",
        descripcion: "Aromatizante de ambientes en aerosol.",
        precio: 7000,
        stock: 10,
        imagen: aerosol,
        activo: true,
        fragancias: fraganciasAerosoles,
    },

    {
        id: 3,
        codigo: "DIF001",
        nombre: "Difusor",
        categoria: "Difusores",
        descripcion: "Difusor con varillas.",
        precio: 6800,
        stock: 10,
        imagen: difusor,
        activo: true,
        fragancias: fraganciasDifusores,
    },

    {
        id: 4,
        codigo: "REP001",
        nombre: "Repuesto Touch",
        categoria: "Touch",
        descripcion: "Repuesto para Touch.",
        precio: 4000,
        stock: 10,
        imagen: repuestoTouch,
        activo: true,
        fragancias: fraganciasTouch,
    },

    {
        id: 5,
        codigo: "EQREP001",
        nombre: "Equipo Touch + Repuesto",
        categoria: "Touch",
        descripcion: "Equipo Touch con repuesto incluido.",
        precio: 6000,
        stock: 10,
        imagen: touch,
        activo: true,
        fragancias: fraganciasTouch,
    },

    {
        id: 6,
        codigo: "EQU001",
        nombre: "Equipo",
        categoria: "Equipos",
        descripcion:
            "Equipo aromatizador disponible en distintos colores.",
        precio: 17500,
        stock: 10,
        imagen: Equipos,
        activo: true,
        fragancias: [],
        colores: coloresEquipos,
    },

    {
        id: 7,
        codigo: "MIN001",
        nombre: "Mini",
        categoria: "Mini",
        descripcion: "Mini aromatizante.",
        precio: 3500,
        stock: 10,
        imagen: mini,
        activo: true,
        fragancias: fraganciasMini,
    },

    {
        id: 8,
        codigo: "TAR001",
        nombre: "Tarjeta Aromática",
        categoria: "Tarjetas",
        descripcion: "Ideal para placares y vehículos.",
        precio: 7800,
        stock: 10,
        imagen: tarjetas,
        activo: true,
        fragancias: fraganciasTarjetas,
    },

    {
        id: 9,
        codigo: "CAR001",
        nombre: "Caritas",
        categoria: "Caritas",
        descripcion: "Aromatizante para vehículos.",
        precio: 4500,
        stock: 10,
        imagen: caritas,
        activo: true,
        fragancias: fraganciasCaritas,
    },

    {
        id: 10,
        codigo: "AUT001",
        nombre: "Ámbar Difusor Colgante para Autos",
        categoria: "Autos",
        descripcion:
            "Difusor colgante para autos de la línea Ámbar.",
        precio: 2300,
        stock: 10,
        imagen: auto,
        activo: true,
        fragancias: fraganciasAuto,
    },

    {
        id: 11,
        codigo: "ACE001",
        nombre: "Aceite Esencial",
        categoria: "Aceites",
        descripcion:
            "Aceite esencial concentrado para hornillos y difusores.",
        precio: 4000,
        stock: 10,
        imagen: aceite,
        activo: true,
        fragancias: fraganciasAceites,
    },

    {
        id: 12,
        codigo: "SAH001",
        nombre: "Sahumerios Premium",
        categoria: "Sahumerios",
        descripcion:
            "Sahumerios premium de larga duración con distintas fragancias.",
        precio: 2100,
        stock: 10,
        imagen: sahumerios,
        activo: true,
        fragancias: fraganciasSahumerios,
    },

    // =========================================================
    // LÍNEA DISNEY
    // =========================================================

    {
        id: 13,
        codigo: "DIFDIS001",
        nombre: "Difusor de Ambiente - Línea Disney",
        categoria: "Difusores",
        descripcion:
            "Difusor aromático con varillas de 125 ml. Línea Disney, Pixar, Marvel y Star Wars.",
        precio: 7000,
        stock: 10,
        imagen: difusorDisney,
        activo: true,
        fragancias: fraganciasDisney,
    },

    {
        id: 14,
        codigo: "TXTDIS001",
        nombre: "Aromatizador Textil - Línea Disney",
        categoria: "Textiles",
        descripcion:
            "Aromatizador textil en spray de 250 ml. Perfuma telas, ropa, cortinas, sillones y ambientes.",
        precio: 5000,
        stock: 10,
        imagen: textilDisney,
        activo: true,
        fragancias: fraganciasDisney,
    },
];

export default productos;
