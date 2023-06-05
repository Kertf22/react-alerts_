import React from "react";
import { Warning, Check, Info } from "@phosphor-icons/react";
import { Type } from "../types/Type";

interface NotificationProps {
    message: string;
    type: Type
}

const ContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '24px',
    right: '24px',
    padding: '8px',
    width: '200px',
    zIndex: 9999999999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '8x',
}

const IconStyle: React.CSSProperties = {
    padding: '4px',
    color: '#fff',
}

const Icon = ({ type }: { type: Type }) => {
    switch (type) {
        case 'success':
            return <Check size={32} />
        case 'info':
            return <Info size={32} />
        case 'error':
            return <Warning size={32} />
        case 'warning':
            return <Warning size={32} />
        default:
            return <Check size={32} />
    }
}

export const Notification = ({ message, type }: NotificationProps) => {

    const backgroundColor = {
        success: '#4CAF50',
        info: '#2196F3',
        error: '#f44336',
        warning: '#ff9800'
    }

    return (
        <div style={ContainerStyle}>
            <div style={{
                ...IconStyle,
                backgroundColor: backgroundColor[type],
            }}>
                <Icon type={type} />
            </div>
            {message}
        </div>
    )
}