import Sidebar from "./dashboard/sidebar";

export function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-72 h-full min-h-screen bg-utama">
                {children}
            </div>
        </>
    );
}
