import styles from './Fretboard.module.css';

function Fretboard() {
    const strings = [6, 5, 4, 3, 2, 1];
    const frets = [1, 2, 3, 4, 5];

    return (
        <div className={styles.fretboardWood}>
            {strings.map((stringNum) => (
                <div key={stringNum} className={styles.stringRow}>
                    <div className={styles.stringLine}></div>
                    {frets.map((fretNum) => (
                        <button key={fretNum} className={styles.fretButton}></button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Fretboard;