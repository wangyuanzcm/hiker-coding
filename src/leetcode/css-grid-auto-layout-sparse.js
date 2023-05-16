type Grid = Array<Array<number>>
type Item = {
  id: number,
  style?: {
    gridRowStart?: number | string,
    gridRowEnd?: number | string,
    gridColumnStart?: number | string
    gridColumnEnd?: number | string
  }
}

function layout(rows: number, columns: number, items: Array<Item>): Grid {
  const grid: Grid = new Array(rows).fill(null).map(() => new Array(columns).fill(0))
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    let [xStart, xEnd, yStart, yEnd] = [0, 0, 0, 0]
    if (item.style && item.style.gridColumnStart) {
      xStart = parseGridLine(item.style.gridColumnStart)
      xEnd = item.style.gridColumnEnd ? parseGridLine(item.style.gridColumnEnd) : xStart + 1
    } else {
      [xStart, xEnd] = [0, columns]
    }
    if (item.style && item.style.gridRowStart) {
      yStart = parseGridLine(item.style.gridRowStart)
      yEnd = item.style.gridRowEnd ? parseGridLine(item.style.gridRowEnd) : yStart + 1
    } else {
      [yStart, yEnd] = [0, rows]
    }
    let success = false
    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        if (grid[y][x] === 0) {
          grid[y][x] = item.id
          success = true
          break
        }
      }
      if (success) {
        break
      }
    }
    if (!success) {
      throw new Error(`Item ${item.id} cannot be placed`)
    }
  }
  return grid
}

// 解析网格线，例如 "span 2" 或 3
function parseGridLine(line: number | string): number {
  if (typeof line === 'number') {
    return line - 1
  }
  const [type, spanString] = line.split(' ')
  const span = parseInt(spanString || '1')
  if (type === 'span') {
    return span - 1
  }
  return parseInt(line) - 1
}