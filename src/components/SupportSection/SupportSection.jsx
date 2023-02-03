import bmc from "../../assets/bmc-button.png";

export const SupportSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "125px",
        marginTop: "50px",
      }}
    >
      <p
        style={{
          fontFamily: "Covered By Your Grace",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Støt projektet (og dyrenes hven) her:
      </p>
      <a
        href="http://buymeacoffee.com/jbakchr"
        target="_blank"
        rel="noreferrer"
      >
        <img style={{ width: "200px" }} src={bmc} alt="buy me a coffee" />
      </a>
    </div>
  );
};
