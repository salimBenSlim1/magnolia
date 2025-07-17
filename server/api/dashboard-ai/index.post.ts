export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const prompt = body.prompt?.toLowerCase() || ''

  // Simulate logic based on prompt
  if (prompt.includes('sales')) {
    return {
      chart: {
        title: 'Sales in Last 24 Hours',
        type: 'bar', // use "bar", "line", or "metric"
        labels: ['00h', '04h', '08h', '12h', '16h', '20h'],
        values: [5, 10, 7, 15, 12, 8],
      }
    }
  } else if (prompt.includes('users')) {
    return {
      chart: {
        title: 'New Users Today',
        type: 'line',
        labels: ['00h', '04h', '08h', '12h', '16h', '20h'],
        values: [2, 4, 3, 6, 5, 7],
      }
    }
  } else {
    return {
      chart: {
        title: 'Total Revenue',
        type: 'metric',
        value: '$2,431.00'
      }
    }
  }
})
