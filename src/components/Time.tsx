import { parseISO, format, formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CSSProperties } from 'styled-components'

let now: Date | undefined = undefined

export interface TimeProps {
  dateTime: string
  style?: CSSProperties;
}

export default function Time({ dateTime, style }: TimeProps) {
  const parsedTime = parseISO(dateTime)

  if (!now) {
    now = new Date()
  }

  return <time
    dateTime={dateTime}
    title={format(parsedTime, "yyyy/MM/dd kk:mm:ss xxx", { locale: ru })}
    style={style}
  >
    {`${format(parsedTime, "yyyy/MM/dd", { locale: ru })} (${formatDistance(parsedTime, now, { addSuffix: true, locale: ru })})`}
  </time>
}
