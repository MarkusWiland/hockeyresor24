// app/lag/components/TeamButton.tsx
import { Button } from '@/components/ui/button'

type TeamButtonProps = {
  name: string
  isActive: boolean
  onClick: () => void
}

export default function TeamButton({
  name,
  isActive,
  onClick,
}: TeamButtonProps) {
  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      onClick={onClick}
      className="min-w-[100px] rounded-xl"
    >
      {name}
    </Button>
  )
}
