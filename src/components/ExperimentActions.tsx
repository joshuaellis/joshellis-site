import { CodeIcon, Link2Icon } from '@radix-ui/react-icons'

import { IconButton } from './IconButton'

import styles from './ExperimentActions.module.css'

interface ExperimentActionsProps {
  experimentName: string
}

export const ExperimentActions = ({
  experimentName,
}: ExperimentActionsProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={styles.actions}>
      <IconButton
        href={`https://github.com/joshuaellis/joshellis-site/tree/main/src/features/${experimentName}`}
        label="View code"
      >
        <CodeIcon width={20} height={20} />
      </IconButton>
      <IconButton onClick={handleCopy} label="Copy URL">
        <Link2Icon width={20} height={20} />
      </IconButton>
    </div>
  )
}
