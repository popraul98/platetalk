import ContentMenu from "./ContentMenu.jsx";

const MobileMenu = () => {

    return (
        <aside id="logo-sidebar"
               className="sm:hidden fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 bg-gray-800 border-r border-gray-700"
               aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <ContentMenu/>
                </ul>
            </div>
        </aside>
    );
};

export default MobileMenu;