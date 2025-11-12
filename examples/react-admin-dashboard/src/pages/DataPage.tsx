import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Pagination } from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'

export function DataPage() {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [uploadProgress, setUploadProgress] = useState(65)

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
  ]

  const simulateLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Data Display Components</h1>
        <p className="text-gray-500 mt-2">Components for displaying data and content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Badge Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Badge</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Variants</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium">Use Cases</p>
              <div className="flex flex-wrap gap-2">
                <Badge>New</Badge>
                <Badge variant="secondary">In Progress</Badge>
                <Badge className="bg-green-500">Completed</Badge>
                <Badge variant="destructive">Urgent</Badge>
                <Badge variant="outline">Draft</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar</CardTitle>
            <CardDescription>User profile images with fallback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">With Images</p>
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-14 w-14">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium">Fallback Only</p>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-blue-500 text-white">CD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-green-500 text-white">EF</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-purple-500 text-white">GH</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skeleton Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Skeleton</CardTitle>
            <CardDescription>Loading placeholders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <button
              onClick={simulateLoading}
              className="text-sm text-blue-500 hover:underline"
            >
              {loading ? 'Loading...' : 'Click to simulate loading'}
            </button>
            <div className="space-y-3">
              {loading ? (
                <>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-sm text-gray-500">john@example.com</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-md">
                    <p className="text-sm">This is some loaded content that appears after the skeleton loading state.</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Progress Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
            <CardDescription>Progress indicators and bars</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Upload Progress</span>
                <span className="text-gray-500">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} />
              <div className="flex gap-2">
                <button
                  onClick={() => setUploadProgress(Math.min(100, uploadProgress + 10))}
                  className="text-xs text-blue-500 hover:underline"
                >
                  +10%
                </button>
                <button
                  onClick={() => setUploadProgress(Math.max(0, uploadProgress - 10))}
                  className="text-xs text-blue-500 hover:underline"
                >
                  -10%
                </button>
                <button
                  onClick={() => setUploadProgress(0)}
                  className="text-xs text-gray-500 hover:underline"
                >
                  Reset
                </button>
              </div>
            </div>
            <Separator />
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Processing</span>
                  <span className="text-gray-500">25%</span>
                </div>
                <Progress value={25} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Installing</span>
                  <span className="text-gray-500">50%</span>
                </div>
                <Progress value={50} className="bg-blue-100" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Complete</span>
                  <span className="text-green-600">100%</span>
                </div>
                <Progress value={100} className="bg-green-100" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Separator Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Separator</CardTitle>
            <CardDescription>Visual dividers between content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Horizontal Separator</p>
              <p className="text-sm text-gray-500">Above content</p>
              <Separator />
              <p className="text-sm text-gray-500">Below content</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">With Text Content</p>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Section 1</h4>
                <p className="text-sm text-gray-500">First section content</p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Section 2</h4>
                <p className="text-sm text-gray-500">Second section content</p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Section 3</h4>
                <p className="text-sm text-gray-500">Third section content</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pagination Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Pagination</CardTitle>
            <CardDescription>Navigate through pages of content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Basic Pagination</p>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
              <p className="text-xs text-gray-500 text-center">
                Current page: {currentPage} of 10
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium">With More Siblings</p>
              <Pagination
                currentPage={currentPage}
                totalPages={20}
                onPageChange={setCurrentPage}
                siblingCount={2}
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium">Few Pages</p>
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={() => {}}
              />
            </div>
          </CardContent>
        </Card>

        {/* Table with Pagination */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Table with Pagination</CardTitle>
            <CardDescription>Data table with user information and pagination controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Avatar</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-gray-500">{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === 'Admin' ? 'default' :
                          user.role === 'Moderator' ? 'secondary' :
                          'outline'
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === 'Active' ? 'default' : 'secondary'}
                        className={user.status === 'Active' ? 'bg-green-500' : ''}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Separator />

            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />

            <div className="text-sm text-gray-500 text-center">
              Page {currentPage} of 10 • Showing 5 of 50 users
            </div>
          </CardContent>
        </Card>

        {/* Data Cards with Mixed Components */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Mixed Data Display</CardTitle>
            <CardDescription>Combining multiple components for rich data presentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stats Card 1 */}
              <div className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">Total Users</h4>
                  <Badge>+12%</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">2,543</p>
                  <Progress value={75} />
                  <p className="text-xs text-gray-500">75% of monthly goal</p>
                </div>
              </div>

              {/* Stats Card 2 */}
              <div className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">Active Sessions</h4>
                  <Badge variant="secondary">Live</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">1,234</p>
                  <Progress value={45} className="bg-blue-100" />
                  <p className="text-xs text-gray-500">45% capacity</p>
                </div>
              </div>

              {/* Stats Card 3 */}
              <div className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">Revenue</h4>
                  <Badge className="bg-green-500">+24%</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">$12,345</p>
                  <Progress value={90} className="bg-green-100" />
                  <p className="text-xs text-gray-500">90% of target</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
