import { memo } from 'react'

import Carrot from '../icons/carrot'
import Cabbage from '../icons/cabbage'
import Pumpkin from '../icons/pumpkin'
import Corn from '../icons/corn'

const mapItemIcon = {
  '1': Carrot,
  '2': Cabbage,
  '3': Pumpkin,
  '4': Corn,
}

export default memo(function ItemIcon({
  size = '100%',
  id,
}: {
  id: string
  size?: string
}) {
  const IconComponent = mapItemIcon[id as keyof typeof mapItemIcon]
  return IconComponent ? <IconComponent size={size} /> : <div>null</div>
})
