import GoogleMapComponent from "./components/GoogleMapComponent";
import { SearchBar } from "./components/SearchBar";

export default function Home() {
    return <MapOverlayComponent />;
}

const MapOverlayComponent = () => {
    return (
        <>
            <div className="w-full h-full">
                <GoogleMapComponent />
            </div>
            <div className="absolute top-0 left-0 z-10 p-4 w-screen">
                <SearchBar />
            </div>
        </>
    );
};
