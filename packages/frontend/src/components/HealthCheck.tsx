"use client";

import { useCallback, useState } from "react";

import Button from "./Button";

type Status = "initial" | "loading" | "success" | "error";

function getLabel(status: Status) {
  switch (status) {
    case "initial": {
      return "run health check";
    }
    case "loading": {
      return "loading...";
    }
    case "error": {
      return "FAILED";
    }
    case "success": {
      return "OK";
    }
  }
}

export default function HealthCheck() {
  const [status, setStatus] = useState<Status>("initial");

  const runHealthCheck = useCallback(() => {
    async function run() {
      setStatus("loading");

      await new Promise((ok) => setTimeout(ok, 200));

      try {
        await fetch("//localhost:3001/health");
        setStatus("success");
      } catch (e: unknown) {
        console.log(e);
        setStatus("error");
      }
    }

    void run();
  }, [setStatus]);

  return (
    <Button
      disabled={status === "loading"}
      label={getLabel(status)}
      onClick={runHealthCheck}
    />
  );
}
