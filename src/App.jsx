import { useEffect, useState } from 'react'
import ParkingCard from './ParkingCard'
import './index.css'
import logo from './logo.jpg'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const API_KEY = '4177524e5061706c37364f4b795661'
        const res = await fetch(
          `https://openapi.seoul.go.kr:8088/${API_KEY}/json/GetParkInfo/1/100`
        )
        const result = await res.json()

        if (result?.GetParkInfo?.row) {
          setData(result.GetParkInfo.row)
        } else {
          console.warn('API 응답에 row 없음:', result)
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
    (item) => item.PARK_NM.includes('한강진') || item.PARK_NM.includes('한남')
  )

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <

