export default class Overview {
  label: string;
  content: string;
  icon: string;

  constructor(label: string, content: string, icon: string) {
    this.label = label;
    this.content = content;
    this.icon = icon;
  }
}

export const OVERVIEW_DATA: Overview[] = [
  new Overview("Name", "Sparksoft Solutions Inc.", "name"),
  new Overview(
    "Industry",
    "Information & Communication Technology",
    "industry"
  ),
  new Overview("Company Size", "11–50 employees", "size"),
  new Overview("Website", "sparksoft.com.ph", "website"),
  new Overview(
    "Headquarters",
    "Unit 203, Xanland Place Condominium, 323 Katipunan Avenue, Quezon City, Philippines",
    "location"
  ),
];
