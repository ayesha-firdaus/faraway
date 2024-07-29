import React from 'react';
import styles from "./List.module.css";

const List = ({ item, index, setUnpacked, Unpacked }) => {
    function removeHandler(index) {
        setUnpacked((prev) => prev.filter((el, i) => i !== index));
    }

    function addtoggle(index) {
        setUnpacked((prev) => prev.map((el, i) => {
            console.log(index);
            if (index === el.id) {
                return { ...el, checkedvalue: !el.checkedvalue };
            } else {
                return el;
            }
        }));
    }

    console.log(Unpacked);

    return (
        <div>
            <li className={`${styles.items} ${item.checkedvalue && styles.cut}`}>
                <input type='checkbox' onChange={() => addtoggle(index)} />
                <span className={styles.quantity}>{item?.quantity}</span>
                <span className={styles.item}>{item?.item}</span>
                <span className={styles.cancel} onClick={() => removeHandler(index)}>&times;</span>
            </li>
        </div>
    );
};

export default List;
