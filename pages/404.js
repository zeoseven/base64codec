import { useEffect } from "react";

export default () => {
    useEffect(() => {
        window.location.href = "/";
    }, []);
};