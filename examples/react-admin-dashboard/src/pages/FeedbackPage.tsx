import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { toast } from '@/components/ui/toast'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function FeedbackPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)

  const showSuccessToast = () => {
    toast.success('Your action was completed successfully!', {
      description: 'Everything went as expected.',
    })
  }

  const showErrorToast = () => {
    toast.error('Something went wrong!', {
      description: 'Please try again later.',
    })
  }

  const showInfoToast = () => {
    toast.info('Useful information', {
      description: 'Here is some helpful information for you.',
    })
  }

  const showWarningToast = () => {
    toast.warning('Warning!', {
      description: 'Please review your input before proceeding.',
    })
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Feedback Components</h1>
          <p className="text-gray-500 mt-2">Alerts, dialogs, toasts, and tooltips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Alert Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Alert</CardTitle>
              <CardDescription>Static notification messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                  This is an informational alert message with an icon.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again later.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-500 text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully!
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-500 text-yellow-700">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please review your information before proceeding.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Dialog Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialogs for user interaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Basic Dialog</p>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a basic dialog with a title, description, and action buttons.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-gray-600">
                        You can add any content here. Forms, text, images, or other components.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setDialogOpen(false)}>
                        Confirm
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Confirmation Dialog</p>
                <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delete Item</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete the item.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setConfirmDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => {
                          setConfirmDialogOpen(false)
                          showSuccessToast()
                        }}
                      >
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Toast Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Toast</CardTitle>
              <CardDescription>Temporary notification messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Toast Notifications</p>
                <p className="text-sm text-gray-500">
                  Click buttons to show different toast types
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button onClick={showSuccessToast}>
                  Show Success
                </Button>
                <Button variant="destructive" onClick={showErrorToast}>
                  Show Error
                </Button>
                <Button variant="outline" onClick={showInfoToast}>
                  Show Info
                </Button>
                <Button variant="secondary" onClick={showWarningToast}>
                  Show Warning
                </Button>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">With Actions</p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    toast('Action Required', {
                      description: 'You have a pending task to complete.',
                      action: {
                        label: 'Undo',
                        onClick: () => console.log('Undo clicked'),
                      },
                    })
                  }}
                >
                  Show Toast with Action
                </Button>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Long Duration</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    toast('Persistent Message', {
                      description: 'This toast will stay for 10 seconds.',
                      duration: 10000,
                    })
                  }}
                >
                  Show Long Toast
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tooltip Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
              <CardDescription>Contextual help on hover</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Basic Tooltips</p>
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip!</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">With description</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="space-y-1">
                        <p className="font-semibold">Tooltip Title</p>
                        <p className="text-xs">Additional description text</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Info button</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Get more information here</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Icon with Tooltip</p>
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded hover:bg-gray-100">
                        <Info className="h-5 w-5 text-blue-500" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Information tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded hover:bg-gray-100">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Success indicator</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded hover:bg-gray-100">
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Warning message</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded hover:bg-gray-100">
                        <XCircle className="h-5 w-5 text-red-500" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Error notification</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Text with Tooltip</p>
                <p className="text-sm text-gray-600">
                  You can hover over{' '}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="underline decoration-dotted cursor-help text-blue-600">
                        this text
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is inline tooltip content</p>
                    </TooltipContent>
                  </Tooltip>
                  {' '}to see more information.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Combined Example */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Combined Feedback Demo</CardTitle>
              <CardDescription>Using multiple feedback components together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Welcome!</AlertTitle>
                <AlertDescription>
                  Try the interactive examples below to see how feedback components work together.
                </AlertDescription>
              </Alert>

              <div className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      Open Form
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Submit Form</DialogTitle>
                      <DialogDescription>
                        Fill out the form and submit to see a success toast.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={() => {
                          toast.success('Form Submitted!', {
                            description: 'Your information has been saved successfully.',
                          })
                        }}
                      >
                        Submit
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      Hover for info
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This button shows helpful information</p>
                  </TooltipContent>
                </Tooltip>

                <Button
                  variant="secondary"
                  onClick={() => {
                    toast.success('Quick Action', {
                      description: 'Action completed successfully!',
                      duration: 3000,
                    })
                  }}
                >
                  Trigger Toast
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  )
}
