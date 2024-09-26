import { memo } from 'react'

import { GRID_LENGTH } from '../config/main'

export default memo(function Grid({ cellSize }: { cellSize: number }) {
  const fieldArray = Array.from({ length: GRID_LENGTH }, (_, i) => i)

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      {fieldArray.map((item) => (
        <div
          key={item}
          className="h-[1px] w-full left-0 right-0 absolute bg-[#b1ce85]"
          style={{
            top: `${(item + 1) * cellSize}px`,
          }}
        />
      ))}
      {fieldArray.map((item) => (
        <div
          key={item}
          className="h-full w-[1px] top-0 bottom-0 absolute bg-[#b1ce85]"
          style={{
            left: `${(item + 1) * cellSize}px`,
          }}
        />
      ))}
    </div>
  )
})
