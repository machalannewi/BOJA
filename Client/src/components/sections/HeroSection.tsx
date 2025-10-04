import Link from 'next/link';
import { 
  Award,
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  DollarSign,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

  const stats = [
    { icon: Award, value: '2 Years', label: 'Building the Future'  },
    { icon: TrendingUp, value: '60%', label: 'Small & Medium Enterprises' },
    { icon: Users, value: '30%', label: 'Employee' },
    { icon: DollarSign, value: '10%', label: 'Corporate Entity' }
  ];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-16">
          
          {/* Left Side - Text */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-[#caf0f8] text-[#023e8a] rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                #1 Lending and Real Estate Investment Company
              </span>
            </div>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              We power the Investment...
            </h1>
            
            <p className="md:text-xl mb-8 max-w-2xl">
              Providing diverse range of financial solutions to individuals and businesses in Nigeria with a strong emphasis on tailored, accessible and reliable services.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/properties"
                className="inline-flex items-center px-8 py-4 bg-[#023e8a] text-white text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Browse Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
              href="/loans"
               className="inline-flex items-center px-8 py-4 bg-[#caf0f8] text-[#023e8a] text-lg font-semibold rounded-lg transition-all duration-200">
                Loans 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <IconComponent className="w-8 h-8 text-[#023e8a] mx-auto mb-3" />
                  <div className="text-2xl lg:text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="hidden lg:flex justify-center lg:justify-end">
          <Image
            src="/hero/hero-image.png"
            alt="Real Estate Illustration"
            width={600}
            height={500} 
            className="w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl"
          />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
