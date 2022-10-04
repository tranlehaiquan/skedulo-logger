import { Loading } from "@skedulo/sked-ui";
import React, { useEffect } from "react";
import format from "date-fns/format";

import {
  MonitorLogs,
  SchemaSubscriptionOp,
  useFetchMonitorLogsQuery,
  useSubLogSubscription,
} from "../../generated/graphql";
import clsx from "clsx";

interface Props {
  className?: string;
  monitorId: string;
}

const Monitor: React.FC<Props> = ({ monitorId, className }) => {
  const [newLogs, setNewLogs] = React.useState<MonitorLogs[]>([]);
  const subscriptionInsertedLog = useSubLogSubscription({
    variables: {
      operation: SchemaSubscriptionOp.Insert,
      filter: `MonitorsId == '${monitorId}'`,
    },
  });

  const monitorLogs = useFetchMonitorLogsQuery({
    variables: {
      filter: `MonitorsId == '${monitorId}'`,
    },
  });

  useEffect(() => {
    if (subscriptionInsertedLog.data) {
      const newLog = subscriptionInsertedLog.data.schemaMonitorLogs.data;
      setNewLogs([...newLogs, newLog as any]);
    }
  }, [subscriptionInsertedLog.data]);

  useEffect(() => {
    monitorLogs.refetch();
  }, []);

  return (
    <code
      style={{ backgroundColor: '#0f172a' }}
      className={clsx(
        className,
        "overflow-auto rounded-md p-2 w-full text-slate-200"
      )}
    >
      {monitorLogs.data?.monitorLogs.edges.map(({ node }) => (
        <p key={node.UID} className="leading-5">
          {format(new Date(node.CreatedDate), "dd/MM/yyyy HH:mm:ss")}{" "}
          {node.Description}
        </p>
      ))}

      {newLogs.map((node) => (
        <p key={node.UID} className="leading-5">
          {format(new Date(node.CreatedDate), "dd/MM/yyyy HH:mm:ss ")}{" "}
          {node.Description}
        </p>
      ))}

      {monitorLogs.loading && <Loading />}
    </code>
  );
};

export default Monitor;
