import { lazy, Suspense } from "react";
import LoadSpinner from "@components/LoadSpinner.tsx";
import { Routes, Route } from "react-router-dom";
import "@styles/components/LoadSpinner.scss";
import MainLayout from "@components/layout/Layout";

const Home = lazy(() => import("@pages/Home.tsx"));
const About = lazy(() => import("@pages/About.tsx"));
const NotFound = lazy(() => import("@components/NotFound.tsx"));

interface AppRoutesProps {
    isLoading: boolean;
}

export default function AppRoutes({ isLoading }: AppRoutesProps) {
    return (
        <Suspense fallback={<div className={"spinner-container"}><LoadSpinner /></div>}>
            <Routes>

                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<About />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
