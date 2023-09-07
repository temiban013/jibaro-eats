import { Dialog } from '@headlessui/react'
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import type { ImageProps } from '../utils/types'
import SharedModal from './SharedModal'

export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[]
  onClose?: () => void
}) {
  let overlayRef = useRef<HTMLElement | null>(null);

  const router = useRouter()

  const { photoId } = router.query
  let index = Number(photoId)

  const [direction, setDirection] = useState(0)
  const [curIndex, setCurIndex] = useState(index)

  function handleClose() {
    router.push('/', undefined, { shallow: true })
    if (onClose) onClose()
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setCurIndex(newVal)
    router.push(
      {
        query: { photoId: newVal },
      },
      `/p/${newVal}`,
      { shallow: true }
    )
  }
  

function useArrowKeyPress(onArrowRight: () => void, onArrowLeft: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        onArrowRight();
      } else if (event.key === 'ArrowLeft') {
        onArrowLeft();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onArrowRight, onArrowLeft]);
}

useArrowKeyPress(
  () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  },
  () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  }
)

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={(node) => {
          if (node) {
            overlayRef.current = node;
          }
        }}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  )
}
