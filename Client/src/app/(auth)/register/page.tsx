'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Building, Mail, Lock, User, Phone, ArrowRight, Shield, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  investorType: string;
  experience: string;
  agreedToTerms: boolean;
  agreedToMarketing: boolean;
}

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    investorType: '',
    experience: '',
    agreedToTerms: false,
    agreedToMarketing: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});
  const [step, setStep] = useState(1); // Multi-step form

  const investorTypes = [
    { value: 'beginner', label: 'New Investor' },
    { value: 'experienced', label: 'Experienced Investor' },
    { value: 'professional', label: 'Real Estate Professional' },
    { value: 'institutional', label: 'Institutional Investor' }
  ];

  const experienceLevels = [
    { value: 'none', label: 'No prior experience' },
    { value: '1-3', label: '1-3 properties' },
    { value: '4-10', label: '4-10 properties' },
    { value: '10+', label: '10+ properties' }
  ];

  const handleInputChange = (field: keyof SignUpFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear specific field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<SignUpFormData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<SignUpFormData> = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.investorType) newErrors.investorType = 'Please select investor type';
    if (!formData.experience) newErrors.experience = 'Please select experience level';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = false;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Implement actual registration logic
      console.log('Sign up attempt:', formData);
      
      // Redirect to verification page or dashboard
      window.location.href = '/auth/verify-email';
      
    } catch (err) {
      setErrors({ email: 'An account with this email already exists' });
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = (password: string): { strength: number; label: string; color: string } => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    if (strength <= 2) return { strength, label: 'Weak', color: 'bg-red-500' };
    if (strength <= 3) return { strength, label: 'Medium', color: 'bg-yellow-500' };
    return { strength, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordInfo = passwordStrength(formData.password);

  const benefits = [
    { icon: Shield, title: 'Secure Platform', description: 'Bank-level security for your investments' },
    { icon: TrendingUp, title: 'High Returns', description: 'Average 12%+ annual returns' },
    { icon: Users, title: 'Expert Support', description: '24/7 professional guidance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-mulish">
      
      {/* Left Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 mt-10">
        <div className="w-full max-w-md space-y-8">
          
          {/* Logo and Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
            <p className="mt-2 text-gray-600">
              Start your real estate investment journey today
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-[#FF6000]' : 'bg-gray-300'}`} />
            <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-[#FF6000]' : 'bg-gray-300'}`} />
          </div>

          {/* Sign Up Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl font-semibold text-center">
                {step === 1 ? 'Personal Information' : 'Account Setup'}
              </CardTitle>
              <CardDescription className="text-center">
                {step === 1 
                  ? 'Tell us a bit about yourself' 
                  : 'Set up your investment preferences'
                }
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={step === 1 ? (e) => { e.preventDefault(); handleNextStep(); } : handleSubmit} className="space-y-4">
                
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <>
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="pl-10 h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]"
                            required
                          />
                        </div>
                        {errors.firstName && (
                          <p className="text-sm text-red-600">{errors.firstName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]"
                          required
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-600">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10 h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]"
                          required
                        />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10 h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]"
                          required
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Continue Button */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#FF6000] hover:bg-orange-600 text-white font-semibold transition-colors duration-200"
                    >
                      <span>Continue</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </>
                )}

                {/* Step 2: Account Setup */}
                {step === 2 && (
                  <>
                    {/* Password Fields */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="pl-10 pr-10 h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {formData.password && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Password strength:</span>
                            <span className={`font-medium ${
                              passwordInfo.label === 'Weak' ? 'text-red-600' :
                              passwordInfo.label === 'Medium' ? 'text-yellow-600' :
                              'text-green-600'
                            }`}>
                              {passwordInfo.label}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${passwordInfo.color}`}
                              style={{ width: `${(passwordInfo.strength / 5) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}
                      {errors.password && (
                        <p className="text-sm text-red-600">{errors.password}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="pl-10 pr-10 h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-600">{errors.confirmPassword}</p>
                      )}
                    </div>

                    {/* Investor Type */}
                    <div className="space-y-2">
                      <Label htmlFor="investorType">Investor Type</Label>
                      <Select value={formData.investorType} onValueChange={(value) => handleInputChange('investorType', value)}>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]">
                          <SelectValue placeholder="Select investor type" />
                        </SelectTrigger>
                        <SelectContent>
                          {investorTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.investorType && (
                        <p className="text-sm text-red-600">{errors.investorType}</p>
                      )}
                    </div>

                    {/* Experience Level */}
                    <div className="space-y-2">
                      <Label htmlFor="experience">Real Estate Experience</Label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-[#FF6000] focus:ring-[#FF6000]">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.experience && (
                        <p className="text-sm text-red-600">{errors.experience}</p>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the{' '}
                          <Link href="/terms" className="text-[#FF6000] hover:text-orange-600 font-medium">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-[#FF6000] hover:text-orange-600 font-medium">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      {errors.agreedToTerms && (
                        <p className="text-sm text-red-600">{errors.agreedToTerms}</p>
                      )}

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.agreedToMarketing}
                          onCheckedChange={(checked) => handleInputChange('agreedToMarketing', checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="marketing" className="text-sm leading-relaxed text-gray-600">
                          I would like to receive investment opportunities and market updates via email
                        </Label>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="flex-1 h-12 border-gray-200"
                        disabled={isLoading}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 h-12 bg-[#FF6000] hover:bg-orange-600 text-white font-semibold transition-colors duration-200"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Creating...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <span>Create Account</span>
                            <CheckCircle className="h-4 w-4" />
                          </div>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </form>

              {/* Social Sign Up - Only on Step 1 */}
              {step === 1 && (
                <>
                  <div className="relative">
                    <Separator className="my-6" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white px-3 text-sm text-gray-500">Or sign up with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 border-gray-200 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 border-gray-200 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </>
              )}
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 pt-6">
              <Separator />
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/auth/login"
                  className="font-medium text-[#FF6000] hover:text-orange-600 transition-colors duration-200"
                >
                  Sign in here
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex lg:flex-1 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/properties/house-isolated-field.jpg')`,
          }}
        >
        <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#FF6000] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FF6000] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Start Building Wealth Through Real Estate
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our platform and get access to exclusive investment opportunities 
            with competitive financing options.
          </p>
          
          {/* Benefits */}
          <div className="space-y-6 mb-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6000]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#FF6000]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="opacity-75">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;