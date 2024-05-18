interface Settings {
  storeName: string;
  storeDescription: string;
}

interface Company {
  companyName: string;
  email: string;
  city: string;
  phone: string;
  countryCode: string;
}

interface Profile {
  company: Company;
  settings: Settings;
}

export type { Profile };
