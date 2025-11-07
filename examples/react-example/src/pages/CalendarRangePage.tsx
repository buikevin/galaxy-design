import { useState } from 'react'

export function CalendarRangePage() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Calendar Range</h1>
        <p className="text-muted-foreground mt-2">
          Select a date range with start and end dates.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add calendar-range</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Range Picker</h2>
          <div className="border rounded-lg p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Date Range</label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="date"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={startDate?.toISOString().split('T')[0] || ''}
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Start date</p>
                </div>
                <div className="flex-1">
                  <input
                    type="date"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={endDate?.toISOString().split('T')[0] || ''}
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground mt-1">End date</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Selected Range</h2>
          <div className="border rounded-lg p-6">
            {startDate && endDate ? (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Selected range:</p>
                <p className="font-semibold">
                  {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  Duration:{' '}
                  {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))}{' '}
                  days
                </p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No date range selected</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Presets</h2>
          <div className="border rounded-lg p-6">
            <div className="flex flex-wrap gap-2">
              <button
                className="px-3 py-2 text-sm border rounded-md hover:bg-accent"
                onClick={() => {
                  const today = new Date()
                  setStartDate(today)
                  setEndDate(today)
                }}
              >
                Today
              </button>
              <button
                className="px-3 py-2 text-sm border rounded-md hover:bg-accent"
                onClick={() => {
                  const today = new Date()
                  const lastWeek = new Date(today)
                  lastWeek.setDate(today.getDate() - 7)
                  setStartDate(lastWeek)
                  setEndDate(today)
                }}
              >
                Last 7 Days
              </button>
              <button
                className="px-3 py-2 text-sm border rounded-md hover:bg-accent"
                onClick={() => {
                  const today = new Date()
                  const lastMonth = new Date(today)
                  lastMonth.setDate(today.getDate() - 30)
                  setStartDate(lastMonth)
                  setEndDate(today)
                }}
              >
                Last 30 Days
              </button>
              <button
                className="px-3 py-2 text-sm border rounded-md hover:bg-accent"
                onClick={() => {
                  const today = new Date()
                  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
                  setStartDate(startOfMonth)
                  setEndDate(today)
                }}
              >
                This Month
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
