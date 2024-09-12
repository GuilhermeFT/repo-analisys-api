import { type Repository } from './types'

import { GPT } from '../gpt'
import puppeteer from 'puppeteer'

export class Repo {
  private owner: string
  private title: string
  private packageJson: string
  private repositoryUrl?: string
  public appUrl?: string
  private description?: string
  private userExcerpt?: string

  private ai: GPT

  constructor(data: Repository) {
    this.owner = data.owner
    this.title = data.title
    this.packageJson = data.packageJson
    this.repositoryUrl = data.repositoryUrl
    this.appUrl = data.appUrl
    this.description = data.description
    this.userExcerpt = data.userExcerpt

    this.ai = new GPT()
  }

  private async generateReadme() {
    return this.ai.generateReadme({
      owner: this.owner,
      title: this.title,
      packageJson: this.packageJson,
      repositoryUrl: this.repositoryUrl,
      appUrl: this.appUrl,
      description: this.description,
      userExcerpt: this.userExcerpt,
    })
  }

  private createTitle() {
    return `
      <h1 align="center">
        # ${this.title}
      </h1>
    `
  }

  private createMITLicense() {
    return `
      ## 📝 License
      This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
    `
  }

  private createContributing(repositoryUrl?: string) {
    return `
      ## 🤝 Contributing
      Contributions to this project are welcome! Please follow these steps:

      ${repositoryUrl ? `1. Clone the repository (\`git clone ${repositoryUrl}\`);` : '1. Fork the repository;'}
      2. Create a new branch (\`git checkout -b feature/branch\`);
      3. Make your changes and commit them (\`git commit -m 'feat: add new feature'\`);
      4. Push to the branch (\`git push origin feature/branch\`);
      5. Open a Pull Request.`
  }

  public async createReadme() {
    return `
      ${this.createTitle()}
      ${this.createContributing()}
      ${this.createMITLicense()}
    `
  }
}
