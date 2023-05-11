import { Pool } from "pg";

const pool = new Pool({
  user: "tu-usuario",
  host: "localhost",
  database: "nombre-de-la-base-de-datos",
  password: "tu-contraseña",
  port: 5432,
});
  export async function getServerSideProps() {
    const { rows } = await pool.query("SELECT * FROM tu-tabla");
    return { props: { data: rows } };
  }
export default pool;
