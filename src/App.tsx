import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ToasterContainer from "@components/ToasterContainer";
import AppRoutes from "@router/index.tsx";
import { useThemeDetector } from "@hooks/useThemeDetector.ts";
import CookieDisabled from "@components/validations/CookieDisabled.tsx";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [cookiesEnabled, setCookiesEnabled] = useState(true);
    const isDarkTheme = useThemeDetector();

    useEffect(() => {
        const checkCookieSupport = () => {
            document.cookie = "testcookie; SameSite=Strict";
            const isCookieEnabled =
                document.cookie.indexOf("testcookie") !== -1;
            document.cookie =
                "testcookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";
            return isCookieEnabled;
        };

        if (!checkCookieSupport()) {
            setCookiesEnabled(false);
            setIsLoading(false);
            return;
        }

    }, []);

    useEffect(() => {
        const favicon = document.getElementById(
            "favicon"
        ) as HTMLLinkElement | null;
        if (favicon)
            favicon.href = isDarkTheme ? "/WhiteLogo.svg" : "/BlackLogo.svg";
    }, [isDarkTheme]);

    if (!cookiesEnabled) {
        return <CookieDisabled />;
    }

    return (
        <BrowserRouter>
            <ToasterContainer />
            <AppRoutes isLoading={isLoading} />
        </BrowserRouter>
    );
}
