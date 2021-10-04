import React from "react";
import Banner from "components/banner/Banner";
import TableList from "components/tableList/TableList";
import Dropdown from "components/dropdown/Dropdown";
import Footer from "components/footer/Footer";

export type productRow = {
  brand: string;
  lab: string;
  price: number;
};
const rows: Array<productRow> = [
  {
    brand: "1",
    lab: "1",
    price: 1,
  },
  {
    brand: "2",
    lab: "2",
    price: 2,
  },
  {
    brand: "3",
    lab: "3",
    price: 3,
  },
  {
    brand: "4",
    lab: "4",
    price: 4,
  },
];

const faq = [
  { title: "¿1?", answer: "1" },
  { title: "¿2?", answer: "2" },
];
function Landing() {
  return (
    <div>
      <Banner></Banner>
      <div>
        <p>
          Las mejores expertas en ginecología del país están a tu disposición
          para conversar sin que tengas que salir de tu casa.
        </p>
        <button>Agendar una consulta</button>
      </div>
      <h2>Lista de medicamentos</h2>
      <TableList
        tableName="Pastillas"
        columnTitles={[
          "Marcas que ofrecemos",
          "Laboratorio",
          "Precio (sin cobertura)",
        ]}
        rows={rows}
      />
      <TableList
        tableName="Anillos"
        columnTitles={[
          "Marcas que ofrecemos",
          "Laboratorio",
          "Precio (sin cobertura)",
        ]}
        rows={rows}
      />
      <TableList
        tableName="Parches"
        columnTitles={[
          "Marcas que ofrecemos",
          "Laboratorio",
          "Precio (sin cobertura)",
        ]}
        rows={rows}
      />
      <h2>Preguntas frecuentes</h2>
      {faq.map((question) => {
        return (
          <Dropdown title={question.title} info={question.answer}></Dropdown>
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default Landing;
