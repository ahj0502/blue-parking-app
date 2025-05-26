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
    (item) => item.PARK_NM.includes('_
