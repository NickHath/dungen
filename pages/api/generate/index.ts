import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  generations: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // rate limiting, error handling, auth
  // cheaper model?
  // pull prompt from a param, not entire body
  const prompt = req.body
  const promptWithScaffolding = `
    This is Dungeons and Dragons campaign with this setting:

    ${prompt}

    Write the description for the beginning of the first session:
  `

  console.log(promptWithScaffolding)

  const body = {
    prompt: promptWithScaffolding,
    model: 'davinci',
    max_tokens: 300,
    temperature: 0.83,
    n: 6
  }

  const url = 'https://api.openai.com/v1/completions'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_KEY}`
    },
    body: JSON.stringify(body)
  }

  const response = await fetch(url, options)
  console.log(response)
  const json = await response.json()

  const generationsJson = json.choices.map((generation: any) => generation.text)

  console.log(json);
  res.status(200).json({ generations: generationsJson })
}