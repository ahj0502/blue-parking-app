import { useEffect, useState } from 'react'
import ParkingCard from './ParkingCard'
import './index.css'
import logo from './logo.jpg'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const res = await fetch('/api/proxy')
        const result = await res.json()

        if (result?.GetParkInfo?.row) {
          setData(result.GetParkInfo.row)
        }
      } catch (err) {
        console.error('API 요청 실패:', err)
      }
    }

    fetchParkingData()
    const interval = setInterval(fetchParkingData, 30000)
    return () => clearInterval(interval)
  }, [])

  const filteredData = data.filter(
    (item) => item.PKLT_NM?.includes('한강진')
  )

  console.log('전체 데이터 수:', data.length)
  console.log('한강진 필터 결과 수:', filteredData.length)
  console.log('한강진 필터 내용:', filteredData)
  window._data = data // ← 이 줄 추가됨

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="flex items-center mb-4">
        <img src={logo} alt="블루스퀘어 로고" className="h-10 mr-3" />
        <h1 className="text-xl font-bold text-blue-900">실시간 주차정보</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filteredData.map((item) => (
          <ParkingCard key={item.PKLT_NM} item={item} />
        ))}
      </div>
    </div>
  )
}

export default App
