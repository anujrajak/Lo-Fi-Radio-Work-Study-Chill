import styles from "../../../styles/Home.module.css";

export default function PauseButton({ setPlaying }) {
  return (
    <span className={styles.svgButton} onClick={() => setPlaying(false)} style={{cursor: "pointer"}}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path d="M10 4H5v16h5V4zm9 0h-5v16h5V4z" fill="currentColor" />{" "}
      </svg>
    </span>
  );
}
