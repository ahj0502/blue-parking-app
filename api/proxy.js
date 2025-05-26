// api/proxy.js (Vercel Serverless Function)

export default async function handler(req, res) {
  const API_KEY = '4177524e5061706c37364f4b795661'
  const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/GetParkInfo/1/100`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(data)
  } catch (err) {
    console.error('프록시 에러:', err)
    res.status(500).json({ error: '프록시 서버 에러 발생' })
  }
}
