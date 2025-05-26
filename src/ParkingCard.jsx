function ParkingCard({ item }) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h2 className="text-lg font-semibold text-blue-800 mb-1">{item.PKLT_NM}</h2>
      <p className="text-sm text-gray-600">{item.ADDR}</p>
      <div className="mt-2">
        <p>🅿️ 전체: {item.CAPACITY}대</p>
        <p>✅ 현재 주차 가능: {item.CUR_PARKING}대</p>
        <p>⏰ 운영시간: {item.OPERATION_RULE_NM}</p>
      </div>
    </div>
  )
}

export default ParkingCard
