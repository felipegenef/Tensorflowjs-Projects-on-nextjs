import Link from "next/link";
import projects from "../constants/projects";
export default function index() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {projects.map((item, index) => {
        return (
          <Link
            key={index}
            style={{ color: "blue", margin: "1rem", fontSize: "2rem" }}
            href={"/" + item.file}
          >
            {item.name}
          </Link>
        );
      })}
    </main>
  );
}
