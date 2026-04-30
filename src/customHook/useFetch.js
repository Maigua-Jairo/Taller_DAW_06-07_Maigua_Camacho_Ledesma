import { useCallback } from "react"

export const useFetch = () => {
  const fetchData = useCallback(async (url) => {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error("Error en la petición")
      const data = await response.json()
      return data
    } catch (error) {
      console.error("Fetch error:", error)
      return null
    }
  }, [])

  return fetchData
}