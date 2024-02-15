const Code: React.FC<{ codeSnppet: string; ariaLabel: string }> = ({
  codeSnppet,
  ariaLabel,
}) => {
  return (
    <code aria-label={ariaLabel}>
      <pre className={styles.code}>{codeSnppet}</pre>
    </code>
  );
};
const styles = {
  code: "bg-[#F9F9F9] p-10 rounded border-[1px] border-gray-300 divide-solid text-indigo-800 overflow-x-scroll text-sm",
};
export default Code;
