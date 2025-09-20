import { Shield, Clock, Users, TrendingUp} from "lucide-react"

export default function Services() {

const benefits = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Get approved and close faster than traditional lenders'
    },
    {
      icon: Shield,
      title: 'Secure & Trusted',
      description: 'Bank-level security with transparent, honest practices'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated specialists guide you through every step'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful investments and satisfied clients'
    }
  ];

    return (
    <div>
        {/* Benefits Section */}
        <div className="mt-20">
          <div className="flex flex-col align-items items-center gap-7">
            <p className="text-center px-4 py-2 bg-[#FFF0E6] text-[#FF6000] rounded-sm font-medium">
                Built to help smart investors invest smarter
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
                Why Invest in Real Estate?
            </h3>
            </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="w-16 h-16 bg-[#FFF0E6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#FF6000]" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
    </div>
    )
}