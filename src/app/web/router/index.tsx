import { lazy, Suspense } from "react";
import LoadSpinner from "@components/LoadSpinner.tsx";
import { Routes, Route } from "react-router-dom";
import "@styles/components/LoadSpinner.scss";
import MainLayout from "@components/layout/Layout";

const Home = lazy(() => import("@pages/Home.tsx"));
const About = lazy(() => import("@pages/About.tsx"));
const NotFound = lazy(() => import("@components/NotFound.tsx"));
const Projects = lazy(() => import("@pages/Projects"));
const Contact = lazy(() => import("@pages/Contact"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div className={"spinner-container"}><LoadSpinner /></div>}>
            <Routes>

                <Route element={<MainLayout />}>
                    <Route path="/portfolio/" element={<Home />} />
                    <Route path="/portfolio/about" element={<About />} />
                    <Route path="/portfolio/projects" element={<Projects />} />
                    <Route path="/portfolio/contact" element={<Contact />} />
                </Route>

                <Route path="/portfolio/*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
