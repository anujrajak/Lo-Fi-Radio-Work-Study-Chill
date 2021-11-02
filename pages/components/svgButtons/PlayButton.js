import styles from "../../../styles/Home.module.css";

export default function PlayButton({ setPlaying }) {
  return (
    <span className={styles.svgButton} onClick={() => setPlaying(true)} style={{cursor: "pointer"}}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path
          d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"
          fill="currentColor"
        />{" "}
      </svg>
    </span>
  );
}
