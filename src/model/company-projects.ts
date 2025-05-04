export default class CompanyProjects {
  label: string;
  content: string;
  icon: string;

  constructor(label: string, content: string, icon: string) {
    this.label = label;
    this.content = content;
    this.icon = icon;
  }
}

export const COMPANY_PROJECTS_DATA: CompanyProjects[] = [
  new CompanyProjects(
    "Infrastructure Project Management System (IPMS)",
    "Centralizes infrastructure project oversight for improved decision-making and accountability.",
    "infrastructure"
  ),
  new CompanyProjects(
    "Library Book Reservation and Borrowing System (LBRB)",
    "Modernizes library services with user-friendly search and smart book suggestions.",
    "library"
  ),
  new CompanyProjects(
    "Road and Drainage Fixes Management System (RDFX)",
    "Enhances maintenance project tracking and resource allocation.",
    "road-drainage"
  ),
  new CompanyProjects(
    "Human Resource Development Platform (HRDP)",
    "Cloud-based system for employee performance and training management.",
    "human-resource"
  ),
  new CompanyProjects(
    "Property Management System (PMS)",
    "Comprehensive solution for real estate management tasks.",
    "real-estate"
  ),
];
