import { useEffect, useState } from "react";
import TripDriverWeb from "./TripDriverWeb";
import QAPage from "./QAPage";

function getCurrentPage() {
    return window.location.pathname === "/faq-thue-xe-tu-lai" ? "qa" : "home";
}

export default function App() {
    const [page, setPage] = useState(getCurrentPage);

    useEffect(() => {
        const handleLocationChange = () => setPage(getCurrentPage());
        window.addEventListener("popstate", handleLocationChange);
        return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    return page === "qa" ? <QAPage /> : <TripDriverWeb />;
}
