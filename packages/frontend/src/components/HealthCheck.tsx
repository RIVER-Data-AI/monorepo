"use client";

import { useEffect, useState } from "react";

type Status = "loading" | "success" | "error";

export default function HealthCheck() {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    fetch("//localhost:3001/health")
      .then(() => {
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [setStatus]);

  switch (status) {
    case "loading": {
      return <strong>PENDING</strong>;
    }
    case "error": {
      return <strong>FAIL</strong>;
    }
    default: {
      return <strong>OK</strong>;
    }
  }
}
