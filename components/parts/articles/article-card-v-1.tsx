'use client'

import classNames from 'classnames'
import { forwardRef } from 'react'
import Image from 'next/image'
import { format, isSameDay } from 'date-fns'
import {
  IoCalendarClearOutline,
  IoEyeOutline,
  IoBookmark,
  IoBookmarkOutline,
} from 'react-icons/io5'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { IconButton } from '@/components/ui/icon-button'

export const ArticleCardSkeleton = forwardRef<HTMLDivElement>(
  function ArticleCardSkeleton(_, ref) {
    return (
      <div ref={ref} className="w-full px-4 py-4">
        <div className="flex gap-3 w-full flex-shrink-0">
          <Skeleton className="w-[200px] h-[133px]  rounded-sm" />

          <div className="flex-1 w-full">
            <Skeleton className="h-4 w-[60%] max-w-[160px]" />
            <Skeleton className="h-5 w-[100%] max-w-[660px] mt-2" />
            <Skeleton className="h-11 w-full mt-2" />

            <div className="flex gap-4 mt-3">
              <Skeleton className="h-5 w-[100px]" />
              <Skeleton className="h-5 w-[120px]" />
            </div>
          </div>
        </div>
      </div>
    )
  }
)

export interface ArticleCardProps {
  /**
   * Article title
   */
  title: string
  /**
   * Text of article
   */
  text: string
  /**
   * Article picture preview
   */
  pictureUrl?: string
  /**
   * Article topic name
   */
  topic?: string
  /**
   * Date of article
   */
  date: string | Date
  /**
   * Minutes required to read the article
   */
  minutesToRead?: number
  /**
   * Author name
   */
  userName: string
  /**
   * Author photo
   */
  userAvatarUrl: string
  /**
   * Mark card as liked.
   */
  isLiked?: boolean
  /**
   * Handle like button click
   */
  onLikeClick?: () => void
}

const getDateLabel = (date: string | Date) => {
  return isSameDay(new Date(), date) ? 'Today' : format(date, 'dd MMM')
}

const ArticleCard = forwardRef<HTMLDivElement, ArticleCardProps>(
  function ArticleCard(
    {
      title = '',
      text = '',
      topic,
      userAvatarUrl,
      userName = '',
      pictureUrl,
      minutesToRead,
      date,
      isLiked = false,
      onLikeClick,
    },
    ref
  ) {
    const formattedDate = getDateLabel(date)

    return (
      <div
        ref={ref}
        className={classNames('relative w-full px-4 py-4 cursor-pointer')}
      >
        <div className="flex gap-3 w-full">
          <div className="flex-shrink-0">
            {pictureUrl && (
              <Image
                src={pictureUrl}
                height={100}
                width={200}
                alt={title}
                className="rounded-md"
              />
            )}
          </div>
          <div className="min-w-[1px]">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Avatar type="circle" size={6}>
                <AvatarImage src={userAvatarUrl} />
                <AvatarFallback>{userName}</AvatarFallback>
              </Avatar>
              <div className="text-sm pr-8 flex gap-2 min-w-[1px]">
                <div className="truncate">{userName}</div>

                {topic && (
                  <>
                    <div>&bull;</div>
                    <div>{topic}</div>
                  </>
                )}
              </div>
            </div>

            <div className="font-bold text-lg flex-grow min-w-[1px] truncate mt-1">
              {title}
            </div>

            {text.length > 0 && (
              <p className="line-clamp-2 text-muted-foreground h-[48px]">
                {text}
              </p>
            )}

            <div className="text-sm text-muted-foreground mt-2 flex gap-4">
              <div className="flex gap-1 items-center">
                <IoCalendarClearOutline size={16} /> {formattedDate}
              </div>
              <div className="flex gap-1 items-center">
                <IoEyeOutline size={16} /> {minutesToRead} minutes to read
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-600 absolute top-1 right-1">
          <IconButton onClick={() => onLikeClick?.()} className="p-2">
            {isLiked ? (
              <IoBookmark size={20} />
            ) : (
              <IoBookmarkOutline size={20} />
            )}
          </IconButton>
        </div>
      </div>
    )
  }
)
ArticleCard.displayName = 'ArticleCard'

export default ArticleCard
