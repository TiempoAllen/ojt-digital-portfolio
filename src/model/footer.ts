export default class FooterModel {
  name: string;
  icon: string;
  url: string;

  constructor(name: string, icon: string, url: string) {
    this.name = name;
    this.icon = icon;
    this.url = url;
  }
}

export const FOOTER_DATA: FooterModel[] = [
  new FooterModel(
    "Email",
    "gmail",
    "https://mail.google.com/mail/?view=cm&fs=1&to=tiempoallen@gmail.com"
  ),
  new FooterModel(
    "LinkedIn",
    "linkedin-icon",
    "https://www.linkedin.com/in/john-allen-tiempo-1350492a0/"
  ),
  new FooterModel("GitHub", "github-icon", "https://github.com/TiempoAllen"),
];
