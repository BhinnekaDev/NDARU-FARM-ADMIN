export default function Button({
  label,
  styleButton,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <button className={styleButton} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
