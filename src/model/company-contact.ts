export default class CompanyContact {
  label: string;
  content: string;
  icon: string;

  constructor(label: string, content: string, icon: string) {
    this.label = label;
    this.content = content;
    this.icon = icon;
  }
}

export const COMPANY_CONTACT_DATA: CompanyContact[] = [
  new CompanyContact("Phone", "(+632) 352-7329", "phone"),
  new CompanyContact("Email", "contactus@sparksoft.com.ph", "email"),
  new CompanyContact(
    "Address",
    "Unit 203, Xanland Place Condominium, 323 Katipunan Avenue, Quezon City, 1108, Philippines",
    "address"
  ),
];
