"use client"

import { useEffect, useState } from "react"

export default function ImageDebug() {
  const [baseUrl, setBaseUrl] = useState("")
  const [imageStatus, setImageStatus] = useState<Record<string, string>>({})

  const testImages = ["/images/dark_logo-1.png", "/images/resize2.jpg", "/images/mockup.png", "/images/live.png"]

  useEffect(() => {
    setBaseUrl(window.location.origin)

    // Test each image
    testImages.forEach((path) => {
      const img = new Image()
      img.onload = () => setImageStatus((prev) => ({ ...prev, [path]: "loaded" }))
      img.onerror = () => setImageStatus((prev) => ({ ...prev, [path]: "error" }))
      img.src = path
    })
  }, [])

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-lg z-50 max-w-md overflow-auto">
      <h3 className="text-lg font-bold mb-2 text-black">Image Debug</h3>
      <p className="text-sm text-gray-600 mb-2">Base URL: {baseUrl}</p>
      <div className="space-y-2">
        {testImages.map((path) => (
          <div key={path} className="text-sm">
            <span className={imageStatus[path] === "error" ? "text-red-500" : "text-green-500"}>
              {imageStatus[path] || "testing..."}
            </span>
            : {path}
          </div>
        ))}
      </div>
    </div>
  )
}

