import { useState } from 'react'

export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground mt-2">
          A date picker component with calendar interface.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add calendar</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Calendar</h2>
          <div className="border rounded-lg p-4 max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </h3>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div key={day} className="text-xs font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
              {emptyDays.map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {days.map((day) => (
                <button
                  key={day}
                  className="h-8 w-8 rounded-md text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  onClick={() =>
                    setSelectedDate(
                      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
                    )
                  }
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Selected Date Display</h2>
          <div className="border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Selected date:</p>
            <p className="text-lg font-semibold">
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Form Integration</h2>
          <div className="border rounded-lg p-6 space-y-4 max-w-md">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date of Birth</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={selectedDate.toLocaleDateString()}
                  readOnly
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
