import './mylabel.css'

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


export const MyLabel = ({
  label = 'no label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
  backgroundColor='transparent'
}: Props) => {
  return (
    <span
      style={{ color: fontColor, backgroundColor: backgroundColor }}
      className={` label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}

    </span>
  )
}

export default MyLabel;
