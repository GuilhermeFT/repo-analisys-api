import OpenAI from 'openai'
import { ChatCompletionCreateParamsBase } from 'openai/resources/chat/completions'
import { Repository } from '../repository/types'

export class GPT {
  private openai: OpenAI
  private model: ChatCompletionCreateParamsBase['model'] = 'gpt-4o-mini'

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  }

  public async generateReadme(data: Repository) {
    const completion = await this.openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'You are an expert developer generating a structured README for a GitHub repository based on the provided information.',
        },
        {
          role: 'user',
          content: `The repository is owned by ${data.owner} and is called ${data.title}. The following description is provided: ${data.description}. Here is the package.json content: ${data.packageJson}. Please create a professional and detailed README.md file. Use the following exclusively this format:

        ## 🔎 About the project
        Summarize the purpose and features of the project based on the provided description.
  
        ## 🧪 Technologies
        List relevant technologies used in the project, based on dependencies from package.json.
        
        ## 🚀 How to execute
        Provide detailed instructions on how to clone and run the project locally, using commands from the package.json.
        `,
        },
      ],
      model: this.model,
    })

    return completion.choices[0].message.content
  }
}
