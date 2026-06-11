import styles from './Fretboard.module.css';
import { useState } from 'react';

function Fretboard() {
    const strings = [6, 5, 4, 3, 2, 1];
    const frets = [1, 2, 3, 4, 5];
    const [frettedNotes, setFrettedNotes] = useState([0, 0, 0, 0, 0, 0]) // Default state is all strings open

    // Updated the fretted notes array upon clicking a fret
    const handleFretClick = (stringIndex: number, fretNum: number) => {
        const newFrettedNotes = frettedNotes.slice();
        newFrettedNotes[stringIndex] = fretNum;
        setFrettedNotes(newFrettedNotes);
    }

    return (
        <div className={styles.fretboardWood}>
            {strings.map((stringNum) => (
                <div key={stringNum} className={styles.stringRow}>
                    <div className={styles.stringLine}></div>
                    {frets.map((fretNum) => {
                        const isFretActive = frettedNotes[stringNum] === fretNum;
                        return (
                            <button key={fretNum} className={styles.fretButton} onClick={() => handleFretClick(stringNum, fretNum)}>
                                {isFretActive && <div className={styles.fingerMarked} />}
                            </button>
                        )
                    })}
                </div>
            ))}
        </div>
    );
}

export default Fretboard;