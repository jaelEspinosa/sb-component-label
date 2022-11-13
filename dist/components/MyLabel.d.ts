/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * Este es el mensaje a mostrar en al etiqueta
     */
    label: string;
    /**
     *  Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  Este es el color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * mayusculas o minusculas
    */
    allCaps: boolean;
    /**
     * Selecciona un color
     */
    fontColor?: string;
    /**
     * Cambia el color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => JSX.Element;
