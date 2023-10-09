type IconProps = {
    value: string | undefined;
    color?: string;
}

const Icon = ({value, color}: IconProps) => {
  return <span className={`material-icons-outlined`} style={{color}}>{value}</span>
}

export default Icon