import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id} className={styles.equipo}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul className={styles.plantilla}>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.jugador} key={jugador.id}>
                <img src={jugador.foto} alt={jugador.nombre} className={styles.foto} />
                <div>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Eden Hazard", Altura: "1.75", Peso: "74Kg", foto: "/img/1.jpg" },
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74Kg", foto: "/img/2.jpg" },
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg", foto: "/img/3.jpg" }
      ]
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.75", Peso: "74Kg", foto: "/img/4.jpg" },
        { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "74Kg", foto: "/img/5.jpeg" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81Kg", foto: "/img/6.jpg" }
      ]
    },
    {
      id: 3,
      nombre: "Manchester United",
      plantilla: [
        { id: 1, nombre: "David de Gea", Altura: "1.92", Peso: "82Kg", foto: "/img/7.jpeg" },
        { id: 2, nombre: "Harry Maguire", Altura: "1.94", Peso: "100Kg", foto: "/img/8.jpg" },
        { id: 3, nombre: "Marcus Rashford", Altura: "1.85", Peso: "70Kg", foto: "/img/9.jpg" }
      ]
    },
    {
      id: 4,
      nombre: "Juventus",
      plantilla: [
        { id: 1, nombre: "Wojciech Szczęsny", Altura: "1.95", Peso: "84Kg", foto: "/img/10.jpeg" },
        { id: 2, nombre: "Leonardo Bonucci", Altura: "1.90", Peso: "85Kg", foto: "/img/11.jpeg" },
        { id: 3, nombre: "Federico Chiesa", Altura: "1.75", Peso: "70Kg", foto: "/img/12.jpg" }
      ]
    }
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}