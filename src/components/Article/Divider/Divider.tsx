const Divider: React.FC = () => {
  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.container}>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </>
  );
};
const styles = {
  hr: "opacity-0 m-0 h-0",
  container: "w-24 flex justify justify-between mx-auto mb-9",
};
export default Divider;
