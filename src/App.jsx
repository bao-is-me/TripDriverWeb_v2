import { useEffect, useState } from "react";
import TripDriverWeb from "./TripDriverWeb";
import QAPage from "./QAPage";

function getCurrentPage() {
    return window.location.hash.startsWith("#/qa") ? "qa" : "home";
}

export default function App() {
    const [page, setPage] = useState(getCurrentPage);

    useEffect(() => {
        const handleHashChange = () => setPage(getCurrentPage());
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return page === "qa" ? <QAPage /> : <TripDriverWeb />;
}
