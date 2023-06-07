import React, { FC, createContext, useEffect, useState } from "react";
import { Type } from "../types/Type";
import { Notification } from "../components/Notification";
import { useNotify } from "../hooks/useNotify";

interface AlertContextProps {
  openNotify: ({
    message,
    type,
    delay = 5000,
  }: {
    message: string;
    type: Type;
    delay?: number;
  }) => void;
}

export const AlertContext = createContext<AlertContextProps>(
  {} as AlertContextProps
);

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const { notify, setNotify } = useNotify();

  return (
    <AlertContext.Provider
      value={{
        openNotify: ({ message, type, delay }) =>
          setNotify({ message, type, delay, show: true }),
      }}
    >
      {notify.show && (
        <Notification message={notify.message} type={notify.type} />
      )}
      {children}
    </AlertContext.Provider>
  );
};

