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
  const { prompt } = req.body
  const promptWithScaffolding = `
    The Curse of Strahd is a Dungeons and Dragons campaign with this setting:

    ${prompt}

    Write the description for the beginning of the first session:
  `

  const body = {
    prompt: promptWithScaffolding,
    max_tokens: 50,
    temperature: 0.9,
    n: 3,
    model: 'text-davinci-003'
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
  const json = await response.json()

  const generationsJson = json.choices.map((generation: any) => generation.text)

  console.log(json);
  res.status(200).json({ generations: generationsJson })
}