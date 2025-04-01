export const Appbar = () => {
    return (
        <div className="shadow h-16 flex justify-between items-center px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            {/* App Name */}
            <div className="text-lg font-bold">
                PayTM App
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-4">
                <div className="text-sm font-medium">
                    Hello, User
                </div>
                <div className="relative group">
                    <div className="rounded-full h-12 w-12 bg-white flex justify-center items-center text-blue-700 font-bold text-xl cursor-pointer shadow-md hover:shadow-lg transition">
                        U
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Profile
                    </div>
                </div>
            </div>
        </div>
    );
};