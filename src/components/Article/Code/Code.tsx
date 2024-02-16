import "./code.scss";

const Code: React.FC<{ codeSnppet: string; ariaLabel: string }> = ({
  codeSnppet,
  ariaLabel,
}) => {
  return (
    <code aria-label={ariaLabel}>
      <pre className="code">{codeSnppet}</pre>
    </code>
  );
};

export default Code;
