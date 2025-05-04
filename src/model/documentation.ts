export default class Documentation {
  title: string;
  date: string;
  image: string;

  constructor(title: string, date: string, image: string) {
    this.title = title;
    this.date = date;
    this.image = image;
  }
}

export const DOCUMENTATION_DATA: Documentation[] = [
  new Documentation("HR Orientation", "January 28, 2025", "documentation1"),
  new Documentation(
    "Department Orientation",
    "January 28, 2025",
    "documentation2"
  ),
  new Documentation("First Team Meeting", "January 28, 2025", "documentation3"),
  new Documentation(
    "First Design Presentation with Sir Harry Lagunsad",
    "February 6, 2025",
    "documentation4"
  ),
  new Documentation(
    "Second Design Presentation with Sir Harry Lagunsad",
    "February 15, 2025",
    "documentation5"
  ),
  new Documentation(
    "Presentation and Delegation of Tasks with Sir Harry and Sir Glenn",
    "February 28, 2025",
    "documentation6"
  ),
  new Documentation(
    "Virtual Meeting with Sir Harry Lagunsad",
    "March 26, 2025",
    "documentation7"
  ),
];
