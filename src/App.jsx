import { useEffect, useState } from "react";
import TripDriverWeb from "./TripDriverWeb";
import QAPage from "./QAPage";
import ArticlePage from "./ArticlePage";
import NewsListingPage from "./NewsListingPage";
import { articlesBySlug } from "./articleData";

function getCurrentPage() {
    const pathname = window.location.pathname;

    if (pathname === "/faq-thue-xe-tu-lai") {
        return { type: "qa" };
    }

    if (pathname === "/tin-tuc") {
        return { type: "news" };
    }

    if (articlesBySlug[pathname]) {
        return { type: "article", article: articlesBySlug[pathname] };
    }

    return { type: "home" };
}

export default function App() {
    const [page, setPage] = useState(getCurrentPage);

    useEffect(() => {
        const handleLocationChange = () => setPage(getCurrentPage());
        window.addEventListener("popstate", handleLocationChange);
        return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    if (page.type === "qa") {
        return <QAPage />;
    }

    if (page.type === "article") {
        return <ArticlePage article={page.article} />;
    }

    if (page.type === "news") {
        return <NewsListingPage />;
    }

    return <TripDriverWeb />;
}
