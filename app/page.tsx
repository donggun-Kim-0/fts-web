'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  // 백엔드(4000번 포트)에서 데이터를 가져오는 함수
  const fetchStores = async () => {
    try {
      // ✅ localhost:4000 대신 환경 변수 사용
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const res = await fetch(`${baseUrl}/store`);
      
      const data = await res.json();
      setStores(data);
    } catch (error) {
      console.error("데이터 가져오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  if (loading) return <div className="p-8">데이터를 불러오는 중...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">가맹점 운영 현황</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">가맹점명</th>
              <th className="border p-3 text-left">주소</th>
              <th className="border p-3 text-left">점주명</th>
            </tr>
          </thead>
          <tbody>
            {stores.length > 0 ? (
              stores.map((store: any) => (
                <tr key={store.id} className="hover:bg-gray-50">
                  <td className="border p-3">{store.id}</td>
                  <td className="border p-3 font-semibold">{store.name}</td>
                  <td className="border p-3">{store.address}</td>
                  <td className="border p-3">{store.ownerName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center">등록된 가맹점이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}