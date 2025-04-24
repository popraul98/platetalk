import ContentMenu from "./ContentMenu.jsx";

const LeftMenu = () => {

    return (
        <div className="hidden sm:flex mt-8 w-fixed w-full flex-shrink flex-grow-0 px-2">
            <div className="sticky top-0 p-4 bg-transparent rounded-xl w-full h-full">
                <ul className="flex sm:flex-col overflow-hidden content-center justify-center">
                    <ContentMenu/>
                </ul>
            </div>
        </div>
    );
};

export default LeftMenu;