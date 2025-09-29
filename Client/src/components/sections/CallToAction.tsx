import Link from "next/link";


export default function CallToAction () {

    return (
        <div>
         {/* CTA Section */}
            <div className="text-center">
            <div className=" bg-[#003047] p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Investment Journey?
                </h3>
                <p className="text-xl mb-6 opacity-90">
                Join thousands of successful investors who trust our platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/properties"}>
                <button className="bg-[#caf0f8] text-[#023e8a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    Browse Properties
                </button>                
                </Link>
                <Link href={"/loans"}>
                <button className="bg-[#023e8a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#023e8a] transition-colors duration-200 cursor-pointer">
                    Apply for Financing
                </button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}