export default function Button({
  label,
  styleButton,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button className={styleButton} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
