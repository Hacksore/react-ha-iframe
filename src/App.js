import useEntities from "./hooks/useEntities";

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const apiToken = params.get("apiToken");
  const host = params.get("host") || "http://homeassistant.local:8123";

  const entities = useEntities({ host, apiToken });

  const filterList = Object.values(entities).filter(
    (item) => item.state === "on"
  );

  return (
    <div
      style={{
        color: "#fff",
        background: "#282828",
        padding: "2px 12px 2px 12px",
      }}
    >
      <p>I am a React App!</p>
      <p>Total number of entities: {Object.keys(entities).length}</p>
      <p>Devices with "on" state: {filterList.length}</p>
    </div>
  );
};

export default App;
