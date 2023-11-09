import { Settings } from "./Icons";

export const SearchBar = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-20 ">
            <div className="w-full  flex justify-around">
                <button className="w-10 h-10 rounded-full bg-green-500 text-white shadow-lg">2</button>
                <button className="w-10 h-10 rounded-full bg-blue-500 text-white shadow-lg">1</button>
            </div>
            <div className="w-full flex justify-between">
                <button className="w-10 h-10 rounded-full bg-red-500 text-white shadow-lg">3</button>

                <button className="w-10 h-10 rounded-full bg-yellow-500 text-white shadow-lg">4</button>
            </div>
            <div className="flex items-center justify-between w-full p-4 bg-white shadow-lg">
                <input
                    className="w-full p-2 rounded-full bg-slate-200	 focus:outline-none focus:ring focus:border-blue-300" // Style de l'input
                    type="text"
                    placeholder="Recherchez un itinéraire"
                />
                <Settings />
            </div>
        </div>
    );
};
