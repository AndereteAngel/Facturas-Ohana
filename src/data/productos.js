import aceite from "../assets/aceite.jpg";
import aerosol from "../assets/aerosol.jpg";
import auto from "../assets/auto.jpg";
import caritas from "../assets/caritas.jpg";
import difusor from "../assets/difusor.jpg";
import fragancias from "./fragancias";
import mini from "../assets/mini.jpg";
import sahumerios from "../assets/sahumerios.jpg";
import tarjetas from "../assets/tarjetas.jpg";
import textil from "../assets/textiles.png";
import touch from "../assets/touch.jpg";

const productos = [
    {
        id: 1,
        codigo: "TXT001",
        nombre: "Aromatizante Textil",
        categoria: "Textiles",
        descripcion: "Perfuma telas, cortinas, sillones, ropa de cama y prendas.",
        precio: 4500,
        stock: 10,
        imagen: textil,
        activo: true,
        fragancias
    },

    {
        id: 2,
        codigo: "AER001",
        nombre: "Aerosol",
        categoria: "Aerosoles",
        descripcion: "Aromatizante de ambientes en aerosol.",
        precio: 6500,
        stock: 10,
        imagen: aerosol,
        activo: true,
        fragancias
    },

    {
        id: 3,
        codigo: "DIF001",
        nombre: "Difusor",
        categoria: "Difusores",
        descripcion: "Difusor con varillas.",
        precio: 6300,
        stock: 10,
        imagen: difusor,
        activo: true,
        fragancias
    },

    {
        id: 4,
        codigo: "REP001",
        nombre: "Repuesto Touch",
        categoria: "Touch",
        descripcion: "Repuesto para Touch.",
        precio: 3500,
        stock: 10,
        imagen: touch,
        activo: true,
        fragancias
    },

    {
        id: 5,
        codigo: "MIN001",
        nombre: "Mini",
        categoria: "Mini",
        descripcion: "Mini aromatizante.",
        precio: 3500,
        stock: 10,
        imagen: mini,
        activo: true,
        fragancias
    },

    {
        id: 6,
        codigo: "TAR001",
        nombre: "Tarjeta Aromática",
        categoria: "Tarjetas",
        descripcion: "Ideal para placares y vehículos.",
        precio: 7500,
        stock: 10,
        imagen: tarjetas,
        activo: true,
        fragancias
    },

    {
        id: 7,
        codigo: "CAR001",
        nombre: "Caritas",
        categoria: "Caritas",
        descripcion: "Aromatizante para vehículos.",
        precio: 4000,
        stock: 10,
        imagen: caritas,
        activo: true,
        fragancias
    },

    {
        id: 8,
        codigo: "AUT001",
        nombre: "Aromatizador para Auto",
        categoria: "Autos",
        descripcion: "Aromatizante colgante para vehículos de larga duración.",
        precio: 1900,
        stock: 10,
        imagen: auto,
        activo: true,
        fragancias: []
    },

    {
        id: 9,
        codigo: "ACE001",
        nombre: "Aceite Esencial",
        categoria: "Aceites",
        descripcion: "Aceite esencial concentrado para hornillos y difusores.",
        precio: 3800,
        stock: 10,
        imagen: aceite,
        activo: true,
        fragancias: []
    },

    {
        id: 10,
        codigo: "SAH001",
        nombre: "Sahumerios Premium",
        categoria: "Sahumerios",
        descripcion: "Sahumerios premium de larga duración con distintas fragancias.",
        precio: 1700,
        stock: 10,
        imagen: sahumerios,
        activo: true,
        fragancias: []
    }
];

export default productos;