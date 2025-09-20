export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'investor' | 'borrower' | 'admin';
  profile: {
    phone?: string;
    avatar?: string;
    preferences: {
      propertyTypes: string[];
      priceRange: {
        min: number;
        max: number;
      };
      locations: string[];
    };
  };
  savedProperties: string[];
  loanApplications: string[];
}