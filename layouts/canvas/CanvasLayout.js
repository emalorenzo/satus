import { Canvas } from '@react-three/fiber'
import styles from './canvasLayout.module.scss'

export function CanvasLayout({ children, ...props }) {
  return (
    <div className={styles.canvasWrapper}>
      <Canvas {...props}>{children}</Canvas>
    </div>
  )
}
