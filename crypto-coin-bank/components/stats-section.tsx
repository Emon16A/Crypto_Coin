export default function StatsSection() {
    return (
        <section className="py-12 px-6 bg-white flex justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-4xl font-semibold text-gray-900">1 million</h2>
                    <p className="text-gray-500 text-sm">Volume traded</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-4xl font-semibold text-gray-900 flex items-center gap-2">
                        50+
                        <span className="bg-yellow-300 text-gray-900 text-xs font-medium px-2 py-1 rounded-full">counting...</span>
                    </h2>
                    <p className="text-gray-500 text-sm">Countries supported</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-4xl font-semibold text-gray-900">1 platform</h2>
                    <p className="text-gray-500 text-sm">For crypto wallet & trading</p>
                </div>
            </div>
        </section>
    );
}
