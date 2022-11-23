import styles from '@components/Tetris/gameStats.module.scss'

interface Props {
  score: number
  rows: number
  level: number
}

const GameStats = ({ score, rows, level }: Props) => {
  // level, points, linesCompleted, linesPerLevel
  // linesToLevel = linesPerLevel - linesCompleted

  return (
    <dl>
      <div>
        <dt>Level</dt>
        <dd>{level}</dd>
      </div>

      <div>
        <dt>Score</dt>
        <dd>{score}</dd>
      </div>

      <div>
        <dt>Rows</dt>
        <dd>{rows}</dd>
      </div>
    </dl>
  )
}

export default GameStats
