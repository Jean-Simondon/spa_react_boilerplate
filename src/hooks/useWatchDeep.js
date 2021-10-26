import { useState } from 'react'
import { useDeepCompareEffect } from 'react-use'
import { useWatch } from 'react-hook-form'

/**
 * Permet d'éviter que la valeur watch soit continuellement considérée comme
 * nouvelle
 *
 * @param {{
 *  control: any
 *  name: string
 *  defaultValue: any
 * }} props
 */
const useWatchDeep = ({ control, name, defaultValue }) => {
  const watched = useWatch({
    control,
    name,
    defaultValue
  })
  const [value, setValue] = useState(watched)
  useDeepCompareEffect(() => {
    setValue(watched)
  }, [watched])

  return value
}

export default useWatchDeep
