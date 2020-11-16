import { useEffect, useState } from "react";
import {
  createLongLivedTokenAuth,
  createConnection,
  subscribeEntities,
} from "home-assistant-js-websocket";

function useEntities({ host, apiToken }) {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    (async () => {
      const auth = createLongLivedTokenAuth(host, apiToken);

      const connection = await createConnection({ auth });
      subscribeEntities(connection, (ent) => setEntities(ent));
    })();
  }, [host, apiToken]);

  return entities;
}

export default useEntities;
