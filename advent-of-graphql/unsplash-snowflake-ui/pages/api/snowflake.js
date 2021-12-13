// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getData(req, res) {
  const stepzenResponse = await fetch(process.env.STEPZEN_API_URL, {
    method: "POST",
    headers: {
      Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query GetRandomPhoto {unsplash_Random_Photo {
          urls {
            full
          }
        }
      }`,
    }),
  });

  let data = await stepzenResponse.json();
  return res.json({ data: data });
}