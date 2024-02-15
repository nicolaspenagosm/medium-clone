const Code: React.FC<{ codeSnppet: string }> = ({ codeSnppet }) => {
  return (
    <code>
      <pre className={styles.code}>{codeSnppet}</pre>
    </code>
  );
};
const styles = {
  code: "bg-[#F9F9F9] p-10 rounded border-[1px] border-gray-300 divide-solid text-indigo-800 overflow-x-scroll text-sm",
};
export default Code;
