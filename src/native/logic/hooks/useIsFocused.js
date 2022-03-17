import { useFocusEffect } from '@react-navigation/core'
import { useCallback, useRef } from 'react'

const useIsFocused = () => {
  const isMounted = useRef(false)

  useFocusEffect(
    useCallback(() => {
      isMounted.current = true

      return () => {
        isMounted.current = false
      }
    }, [])
  )

  return useCallback(() => isMounted.current, [])
}

export default useIsFocused
