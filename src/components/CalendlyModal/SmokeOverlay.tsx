import React, {FC} from 'react';
import styles from './styles.module.scss'

interface SmokeOverlayProps {
    show: boolean,
    onClose: () => void,
    children: React.ReactNode,
}

const SmokeOverlay: FC<SmokeOverlayProps> = ({ show, onClose, children }) => {

    return (
        <div className={`${!show && styles.hidden} ${styles.overlay}`} onClick={onClose}>
            {children}
        </div>
    );
};

export default SmokeOverlay;
