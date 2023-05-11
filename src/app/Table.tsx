import pool from "@/conection/pool";
import { GetServerSideProps } from "next";

interface Data {
  // Define la interfaz de tus datos aquí
}

interface Props {
  data: Data[];
}

const TablePage: React.FC<Props> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>// Agrega las columnas de la tabla aquí</tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            // Muestra los datos de cada fila de la tabla aquí
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { rows } = await pool.query("SELECT * FROM tu-tabla");
  return { props: { data: rows } };
};
export default TablePage;
