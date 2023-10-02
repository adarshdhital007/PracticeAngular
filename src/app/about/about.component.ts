import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  firstName = "adarsh";
  lastName = "dhital";
  baseColor = "green";

  info = {
    bio: "Hello! I'm Adarsh, a Computer Science student at LPU. I have a keen interest in learning Frontend and Backend",
    skills: {
      proficientWith: ["C++", "HTML", "CSS","Angular","Java","PostgreSQL"],
      exposedTo: ["React", "MongoDB","SQL","Next"],
    },
    hobbies: [
      { emoji: "🎮", label: "Gaming" },
      { emoji: "🎸", label: "Playing Guitar" },
    ],
  };

  aboutMeText() {
    return `
    ${this.firstName}${this.firstName}${this.lastName} $ cat about${this.firstName} 
about${this.firstName} (main) $ ${this.info.bio}`;
  }

  skillsText() {
    return `
${this.firstName}${this.lastName} $ cd skills/tools
skills/tools (main) $ ls
Proficient With
${this.info.skills.proficientWith.map((skill) => `- ${skill}`).join("\n")}
Exposed To
${this.info.skills.exposedTo.map((skill) => `- ${skill}`).join("\n")}`;
  }

  miscText() {
    return `
${this.firstName}${this.lastName} $ cd hobbies/interests
hobbies/interests (main) $ ls
${this.info.hobbies
  .map((hobby) => `- ${hobby.emoji} ${hobby.label}`)
  .join("\n")}`;
  }
}
