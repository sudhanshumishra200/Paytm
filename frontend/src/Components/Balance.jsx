export const Balance = ({ value }) => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div className="text-xl font-bold">
                Your Balance
            </div>
            <div className="text-2xl font-semibold">
                ₹ {value}
            </div>
        </div>
    );
};