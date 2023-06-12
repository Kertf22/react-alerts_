import React from "react";
import { Warning, Check, Info } from "@phosphor-icons/react";
import { Type } from "../types/Type";

interface NotificationProps {
  message: string;
  type: Type;
}

const ContainerStyle: React.CSSProperties = {
  position: "fixed",
  top: "24px",
  right: "24px",
  padding: "8px",
  width: "200px",
  zIndex: 9999999999,
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "8x",
  borderRadius: "4px",
};

const IconStyle: React.CSSProperties = {
  padding: "4px",
  color: "#fff",
};


const backgroundColor = {
  success: {
    full: "rgba(76, 175, 80, 1)",
    light: "rgba(76, 175, 80, 0.2)",
  },
  info: {
    full: "rgba(33, 150, 243, 1)",
    light: "rgba(33, 150, 243, 0.2)",
  },
  error: {
    full: "rgba(244, 67, 54, 1)",
    light: "rgba(244, 67, 54, 0.2)",
  },
  warning: {
    full: "rgba(255, 152, 0, 1)",
    light: "rgba(255, 152, 0, 0.2)",
  }
};

const Icon = {
  success: <Check size={32} />,
  info: <Info size={32} />,
  error: <Warning size={32} />,
  warning: <Warning size={32} />,
};

export const Notification = ({ message, type }: NotificationProps) => {
  return (
    <div style={{
      ...ContainerStyle,
      backgroundColor: backgroundColor[type].light,
    }}>
      <div
        style={{
          ...IconStyle,
          backgroundColor: backgroundColor[type].full,
        }}
      >
        {/* {Icon[type] ?? <Check size={32} />} */}
        {<Check size={32} />}
      </div>
      {message}
    </div>
  );
};

export const Any = () => {
  return <h1>Test</h1>;
};
