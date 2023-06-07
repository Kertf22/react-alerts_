import { useEffect, useState } from "react";
import { Type } from "../types/Type";

interface Notify {
    message: string;
    type: Type;
    show: boolean;
    delay?: number;
}

export const useNotify = () => {

    const [notify, setNotify] = useState<Notify>({
        message: '',
        type: 'success',
        show: false,
        delay: 5000
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setNotify({
                message: '',
                type: 'success',
                show: false
            });
        });

        return () => clearTimeout(timer);
    }, [notify]);

    return {notify, setNotify}
};