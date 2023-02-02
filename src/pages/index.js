import Link from "next/link";

export default function index() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "wheat",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Link
        style={{ color: "green", margin: "1rem", fontSize: "2rem" }}
        href={"/index.html"}
      >
        Binary classification with TensorFlow.js
      </Link>
      <Link
        style={{ color: "blue", margin: "1rem", fontSize: "2rem" }}
        href={"/linear-section-6-checkpoint.html"}
      >
        Linear classification with TensorFlow.js
      </Link>
    </main>
  );
}
